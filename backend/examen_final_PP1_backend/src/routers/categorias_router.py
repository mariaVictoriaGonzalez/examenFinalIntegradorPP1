from fastapi import APIRouter, Depends, Path, Query, HTTPException
from fastapi_pagination import Page
from fastapi_pagination.ext.sqlmodel import paginate
from typing import Annotated, TypeAlias
from sqlmodel import Session, select
from database import get_db
from models.anidados import CategoriaNested
from models.categorias_model import Categoria, CategoriaBase, CategoriaPublic

categoria_routers = APIRouter()

NOT_FOUND = {
    404: {
        "description": "Response not found si no se encuentra el id",
        "content": {
            "application/json": {
                "example": {
                    "detail": "Categoría no encontrada",
                }
            }
        },
    },
}
#TypeAlias: para poder reutilizar Db en los endpoints y no rescribir Session = Depends(get_db)
Id = Annotated[int, Path(gt=0, description="ID de la categoría >0")]
Db: TypeAlias = Annotated[Session, Depends(get_db)]
Activos: TypeAlias = Annotated[bool, Query(description= "Filtrar solo activos?")]

#--------------------- GET ALL ----------------------------------
#Con filtrado de activos o no
@categoria_routers.get(
    "/",
    response_model=Page[CategoriaPublic]
)
async def get_categoria(
    db: Db,
    solo_activas: Activos = True
):
    consulta_categorias = select(Categoria)
    if solo_activas:
        consulta_categorias = consulta_categorias.where(Categoria.activo == True)
    return paginate(db, consulta_categorias)

#---------------------------- GET BY ID -----------------------------------

@categoria_routers.get(
    "/{id}",
    responses=NOT_FOUND,
    response_model=CategoriaNested,
)
async def get_categoria_by_id(
    id: Id, db: Db
):
    categoria_obtenida = db.get(Categoria, id)
    if categoria_obtenida is not None:
        return categoria_obtenida
    raise HTTPException(status_code=404, detail="Categoría no encontrada")

#--------------------- POST -------------------------------------

@categoria_routers.post(
    "/categoria",
    response_model=CategoriaPublic
)
async def crear_categoria(
    categoria: CategoriaBase,
    db: Db
):
    nueva_categoria = Categoria.model_validate(categoria)
    db.add(nueva_categoria)
    db.commit()
    db.refresh(nueva_categoria)
    return nueva_categoria

#-------------------- PUT --------------------------------------

@categoria_routers.put(
    "/{id}",
    responses=NOT_FOUND,
    response_model=CategoriaPublic
)
async def editar_categoria(
    id: Id,
    categoria_editar: CategoriaBase,
    db: Db,
):
    categoria_obtenida = db.get(Categoria, id)
    if categoria_obtenida is not None:
        categoria_obtenida.nombre = categoria_editar.nombre
        categoria_obtenida.tipo_juego = categoria_editar.tipo_juego
        categoria_obtenida.descripcion = categoria_editar.descripcion
        categoria_obtenida.activo = categoria_editar.activo
        db.commit()
        db.refresh(categoria_obtenida)
        return categoria_obtenida
    raise HTTPException(status_code=404, detail="Categoría no encontrada")

#---------------------- DELETE ------------------------------------

@categoria_routers.delete(
    "/{id}",
    responses=NOT_FOUND,
    response_model=list[CategoriaPublic],
)
async def borrar_categoria(
    id: Id,
    db: Db,
    logico: Annotated[bool, Query(description="Mantener registro?")] = True,
):
    categoria_obtenida = db.get(Categoria, id)
    if categoria_obtenida is not None:
        if logico:
            categoria_obtenida.activo = False
            db.commit()
        else:
            db.delete(categoria_obtenida)
            db.commit()
        return db.exec(select(Categoria)).all()
    raise HTTPException(status_code=404, detail="Categoría no encontrada")