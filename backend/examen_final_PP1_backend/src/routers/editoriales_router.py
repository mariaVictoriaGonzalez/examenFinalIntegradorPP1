from fastapi import APIRouter, Depends, Path, Query, HTTPException
from fastapi_pagination import Page, paginate
from typing import Annotated, TypeAlias
from sqlmodel import Session, select
from database import get_db
from models.anidados import EditorialNested
from models.editoriales_model import Editorial, EditorialBase, EditorialPublic

editorial_routers = APIRouter()

NOT_FOUND = {
    404: {
        "description": "Response not found si no se encuentra el id",
        "content": {
            "application/json": {
                "example": {
                    "detail": "Editorial no encontrada",
                }
            }
        },
    },
}

#TypeAlias: para poder reutilizar Db en los endpoints y no rescribir Session = Depends(get_db)
Id = Annotated[int, Path(gt=0, description="ID de la editorial >0")]
Db: TypeAlias = Annotated[Session, Depends(get_db)]

#--------------------- GET ALL ------------------------------------

@editorial_routers.get(
    "/",
    response_model=Page[EditorialPublic]
)
async def get_Editorial(db: Db):
    Editoriales = db.exec(select(Editorial)).all()
    return paginate(Editoriales)

#---------------------------- GET BY ID -----------------------------------

@editorial_routers.get(
    "/{id}",
    responses=NOT_FOUND,
    response_model=EditorialNested,
)
async def get_editorial_by_id(
    id: Id, db: Db
):
    editorial_obtenida = db.get(Editorial, id)
    if editorial_obtenida is not None:
        return editorial_obtenida
    raise HTTPException(status_code=404, detail="Editorial no encontrada")

#--------------------- POST ---------------------------------------

@editorial_routers.post(
    "/editorial",
    response_model=EditorialPublic
)
async def crear_editorial(
    editorial: EditorialBase,
    db: Db
):
    nueva_editorial = Editorial.model_validate(editorial)
    db.add(nueva_editorial)
    db.commit()
    db.refresh(nueva_editorial)
    return nueva_editorial

#-------------------- PUT -----------------------------------------
@editorial_routers.put(
    "/{id}",
    responses=NOT_FOUND,
    response_model=EditorialPublic
)
async def editar_editorial(
    id: Id,
    editorial_editar: EditorialBase,
    db: Db,
):
    editorial_obtenida = db.get(Editorial, id)
    if editorial_obtenida is not None:
        editorial_obtenida.nombre = editorial_editar.nombre
        editorial_obtenida.pais_origen = editorial_editar.pais_origen
        editorial_obtenida.activo = editorial_editar.activo
        db.commit()
        db.refresh(editorial_obtenida)
        return editorial_obtenida
    raise HTTPException(status_code=404, detail="Editorial no encontrada")

#---------------------- DELETE ------------------------------------
@editorial_routers.delete(
    "/{id}",
    responses=NOT_FOUND,
    response_model=list[EditorialPublic],
)
async def borrar_editorial(
    id: Id,
    db: Db,
    logico: Annotated[bool, Query(description="Mantener registro?")] = True,
):
    editorial_obtenida = db.get(Editorial, id)
    if editorial_obtenida is not None:
        if logico:
            editorial_obtenida.activo = False
            db.commit()
        else:
            db.delete(editorial_obtenida)
            db.commit()
        return db.exec(select(Editorial)).all()
    raise HTTPException(status_code=404, detail="Editorial no encontrada")