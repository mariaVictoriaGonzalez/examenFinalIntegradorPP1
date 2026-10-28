from sqlmodel import SQLModel, Relationship, Field
from typing import Annotated, List



Nombre = Annotated[str, Field(min_length=2, max_length=75)]

class EditorialBase(SQLModel):
    nombre: Nombre
    pais_origen: Nombre
    

class Editorial(EditorialBase, table=True):
    id: int | None = Field(default=None, primary_key=True)
    juegos: List["Juego"] | None = Relationship(back_populates="editorial")

class EditorialPublic(EditorialBase):
    id: int