from sqlmodel import SQLModel, Relationship, Field
from typing import Annotated, List



Nombre = Annotated[str, Field(min_length=2, max_length=75)]
Descripcion = Annotated[str, Field(max_length=500)]


class CategoriaBase(SQLModel):
    nombre: Nombre
    descripcion: Descripcion


class Categoria(CategoriaBase, table=True):
    id: int | None = Field(default=None, primary_key=True)
    juegos: List["Juego"] | None = Relationship(back_populates="categoria")

class CategoriaPublic(CategoriaBase):
    id: int