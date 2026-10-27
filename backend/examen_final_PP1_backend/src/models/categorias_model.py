from sqlmodel import SQLModel, Relationship, Field
from typing import Annotated


Nombre = Annotated[str, Field(min_length=2, max_length=75)]
Descripcion = Annotated[str, Field(max_length=500)]
Activo = Annotated[bool, Field(default=True)]

class CategoriaBase(SQLModel):
    nombre: Nombre
    descripcion: Descripcion
    activo: Activo


class Categoria(CategoriaBase, table=True):
    id: int | None = Field(default=None, primary_key=True)
    juegos: list["Juego"] | None = Relationship(back_populates="categoria")

class CategoriaPublic(CategoriaBase):
    id: int