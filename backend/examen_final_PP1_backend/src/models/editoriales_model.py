from sqlmodel import SQLModel, Relationship, Field
from typing import Annotated
from .juegos_model import Juego

Nombre = Annotated[str, Field(min_length=2, max_length=75)]

class EditorialBase(SQLModel):
    nombre: Nombre
    pais_origen: Nombre
    juegos_id: int | None = Field(default=None, foreign_key="juego.id")

class Editorial(EditorialBase, table=True):
    id: int | None = Field(default=None, primary_key=True)
    juegos: list["Juego"] | None = Relationship(back_populates="editorial")

class EditorialPublic(EditorialBase):
    id: int