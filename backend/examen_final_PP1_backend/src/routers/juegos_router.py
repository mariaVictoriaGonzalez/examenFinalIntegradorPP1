from fastapi import APIRouter, HTTPException, Depends, Path, Query
from fastapi_pagination import Page, paginate
from sqlmodel import Session, select
from typing import Annotated, TypeAlias

from database import get_db
from models.anidados import JuegoNested
from models.juegos_model import Juego, JuegoBase, JuegoPublic

juegos_routers = APIRouter()

NOT_FOUND = {
    404: {
        "description": "Response not found si no se encuentra el id",
        "content": {
            "application/json": {
                "example": {
                    "detail": "Elemento no encontrado",
                }
            }
        },
    },
}
#TypeAlias: para poder reutilizar Db en los endpoints y no rescribir Session = Depends(get_db)
Id = Annotated[int, Path(gt=0, description="ID del juego > 0")]
Db: TypeAlias = Annotated[Session, Depends(get_db)]

#---------------------------- GET ALL JUEGOS -------------------------------

@juegos_routers.get(
    "/", response_model=Page[JuegoPublic]
)
async def get_juegos(db: Db):
    juegos = db.exec(select(Juego)).all()
    return paginate(
        juegos
    )

#---------------------------- GET ALL JUEGOS ACTIVOS -----------------------

@juegos_routers.get(
    "/activos", response_model=Page[JuegoPublic]
)
async def get_juegos(db: Db):
    juegos = db.exec(select(Juego)).where(Juego.activo == True)
    return paginate(
        juegos
    )

#---------------------------- GET BY ID -----------------------------------

@juegos_routers.get(
    "/{id}",
    responses=NOT_FOUND,
    response_model=JuegoNested,
)
async def get_juegos_by_id(
    id: Id, db: Db
):
    juego_obtenido = db.get(Juego, id)
    if juego_obtenido is not None:
        return juego_obtenido
    raise HTTPException(status_code=404, detail="Juego no encontrado")

#---------------------------- POST -----------------------------------

@juegos_routers.post("/", response_model=JuegoNested)
async def crear_juego(
    juego_nuevo: JuegoBase, db: Db
):
    juego_db = Juego.model_validate(juego_nuevo)
    db.add(juego_db)
    db.commit()
    db.refresh(juego_db)
    return juego_db

#---------------------------- PUT -------------------------------------

@juegos_routers.put(
    "/{id}", responses=NOT_FOUND, response_model=JuegoPublic
)
async def editar_juego(
    id: Id,
    juego_editar: JuegoBase,
    db: Db,
):
    juego_obtenido = db.get(Juego, id)
    if juego_obtenido is not None:
        juego_obtenido.nombre = juego_editar.nombre
        juego_obtenido.stock = juego_editar.stock
        juego_obtenido.precio = juego_editar.precio
        juego_obtenido.edad_minima = juego_editar.edad_minima
        juego_obtenido.thumbnail = juego_editar.thumbnail
        juego_obtenido.descripcion = juego_editar.descripcion
        juego_obtenido.jugadores_min = juego_editar.jugadores_min
        juego_obtenido.jugadores_max = juego_editar.jugadores_max
        juego_obtenido.activo = juego_editar.activo
        juego_obtenido.editorial_id = juego_editar.editorial_id
        juego_obtenido.categoria_id = juego_editar.categoria_id
        db.commit()
        db.refresh(juego_obtenido)
        return juego_obtenido

    raise HTTPException(status_code=404, detail="Juego no encontrado")

#----------------------------- DELETE ------------------------------------

@juegos_routers.delete(
    "/{id}",
    responses=NOT_FOUND,
    response_model=list[JuegoPublic],
)
async def borrar_juego(
    id: Id,
    db: Db,
    logico: Annotated[bool, Query(description="Mantener registro?")] = True,
):
    juego_obtenido = db.get(Juego, id)
    if juego_obtenido is not None:
        if logico:
            juego_obtenido.atcivo = False
        else:
            db.delete(juego_obtenido)
            db.commit()
        return db.exec(select(Juego)).all()
    raise HTTPException(status_code=404, detail="Juego no encontrado")