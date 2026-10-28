from .categorias_model import CategoriaPublic
from .editoriales_model import EditorialPublic
from .juegos_model import JuegoPublic

class JuegoNested(JuegoPublic):
    categoria: CategoriaPublic | None = None
    editorial: EditorialPublic | None = None

class EditorialNested(EditorialPublic):
    juegos: list[JuegoPublic] = []

class CategoriaNested(CategoriaPublic):
    juegos: list[JuegoPublic] = []