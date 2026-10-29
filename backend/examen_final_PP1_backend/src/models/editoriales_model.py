from sqlmodel import SQLModel, Relationship, Field
from typing import Annotated, List



Nombre = Annotated[str, Field(unique=True, min_length=2, max_length=75)]
Activo = Annotated[bool, Field(default=True)]

class EditorialBase(SQLModel):
    nombre: Nombre
    pais_origen: str | None
    activo: Activo
    

class Editorial(EditorialBase, table=True):
    id: int | None = Field(default=None, primary_key=True)
    juegos: List["Juego"] | None = Relationship(back_populates="editorial")

class EditorialPublic(EditorialBase):
    id: int