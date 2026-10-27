from .categorias_model import CategoriaPublic, Categoria
from .editoriales_model import EditorialPublic, Editorial
from .juegos_model import JuegoPublic, Juego

class JuegoNested(JuegoPublic):
    categoria: Categoria | None = None
    editorial: Editorial | None = None

class EditorialNested(EditorialPublic):
    juegos: list[Juego] = []

class CategoriaNested(CategoriaPublic):
    juegos: list[Juego] = []