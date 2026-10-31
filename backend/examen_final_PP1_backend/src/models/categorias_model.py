from sqlmodel import SQLModel, Relationship, Field
from typing import Annotated, List
from enum import Enum


Nombre = Annotated[str, Field(min_length=2, max_length=40)]
Descripcion = Annotated[str, Field(max_length=250)]
Activo = Annotated[bool, Field(default=True)]

#Enum sirve para limitar las opciones a una lista cerrada,
#es mejor que una lista porque SQLModel no sabe que hacer con la lista
#a nivel de base de datos ni de validación
class TipoJuego(str, Enum):
    MESA = "Mesa"
    ROL = "Rol"

#index=True, la BD crea una lista ordenada alfabéticamente para optimizar respuesta
#unique=True, para que no se repita
class CategoriaBase(SQLModel):
    nombre: Nombre = Field(unique=True)
    tipo_juego: TipoJuego = Field(index=True)
    descripcion: Descripcion
    activo: Activo


class Categoria(CategoriaBase, table=True):
    id: int | None = Field(default=None, primary_key=True)
    juegos: List["Juego"] | None = Relationship(back_populates="categoria")

class CategoriaPublic(CategoriaBase):
    id: int