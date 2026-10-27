from sqlmodel import SQLModel, Relationship, Field
from pydantic import model_validator
from decimal import Decimal
from typing import Annotated
from .editoriales_model import Editorial
from .categorias_model import Categoria

Nombre = Annotated[str, Field(min_length=2, max_length=75)]
Precio = Annotated[Decimal, Field(decimal_places=2, default=1, gt=0)]
Stock = Annotated[int, Field(ge=0, default=1)]
EdadMinima = Annotated[int, Field(gt=0)]
Descripcion = Annotated[str, Field(max_length=500)]
Jugadores = Annotated[int, Field(ge=1)]
Activo = Annotated[bool, Field(default=True)]


class JuegoBase(SQLModel):
    nombre: Nombre
    stock: Stock
    precio: Precio
    edad_minima: EdadMinima
    thumbnail: str | None = None
    descripcion: Descripcion
    jugadores_min: Jugadores
    jugadores_max: Jugadores
    activo = Activo
    editorial_id: int | None = Field(default=None, foreign_key="editorial.id")
    categoria_id: int | None = Field(default=None, foreign_key="categoria.id")

#Comprueba que jugadores_min no sea superior a jugadores_max una vez fueron validados individualmente
    @model_validator(mode="after")
    def validar_jugadores(self):
        if self.jugadores_min > self.jugadores_max:
            raise ValueError(
                "El minimo de jugadores no puede superar al máximo"
            )
        return self

class Juego(JuegoBase, table=True):
    id: int | None = Field(default=None, primary_key=True)
    editorial: Editorial | None = Relationship(back_populates="juegos")
    categoria: Categoria | None = Relationship(back_populates="juegos")

class JuegoPublic(JuegoBase):
    id: int