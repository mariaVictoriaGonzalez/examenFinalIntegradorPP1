from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi_pagination import add_pagination

from src.models.juegos_model import juegos
from src.models.categorias_model import categoria
from src.models.editoriales_model import editorial
from src.routers.juegos_router import juegos_routers
from src.routers.categorias_router import categoria_routers
from src.routers.editoriales_router import editorial_routers



app = FastAPI()

app.title = "La Mazmorra"

app.include_router(juegos_routers, tags=["Juegos"], prefix="/juegos")
app.include_router(categoria_routers, tags=["Categoria"], prefix="/categoria")
app.include_router(editorial_routers, tags=["Editorial"], prefix="/editorial")


add_pagination(app)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http:/127.0.0.1:5500" #entorno desarrollo
        #el entorno de produccion
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)