from contextlib import asynccontextmanager
from pathlib import Path
import sys
from alembic.config import Config
from alembic import command
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi_pagination import add_pagination

from app.routers.juegos_router import juegos_routers
from app.routers.categorias_router import categoria_routers
from app.routers.editoriales_router import editorial_routers


BASE_DIR = Path(__file__).resolve().parent.parent.parent

if str(BASE_DIR) not in sys.path:
    sys.path.insert(0, str(BASE_DIR))
if str(BASE_DIR / "src") not in sys.path:
    sys.path.insert(0, str(BASE_DIR / "src"))

def run_migrations():
    ini_path = BASE_DIR / "alembic.ini"
    alembic_dir = BASE_DIR / "alembic"

    #Verificación rápida en los logs para confirmar que se subieron los archivos
    if not ini_path.exists():
        raise FileNotFoundError(f"No se encontró alembic.ini en: {ini_path}")

    alembic_cfg = Config(str(ini_path))

    #Forzamos la ruta absoluta de la carpeta migraciones
    alembic_cfg.set_main_option("script_location", str(alembic_dir))

    command.upgrade(alembic_cfg, "head")

@asynccontextmanager
async def lifespan(app: FastAPI):
    run_migrations()
    yield

app = FastAPI(lifespan=lifespan)

app.title = "La Mazmorra"

app.include_router(juegos_routers, tags=["Juegos"], prefix="/juegos")
app.include_router(categoria_routers, tags=["Categoria"], prefix="/categoria")
app.include_router(editorial_routers, tags=["Editorial"], prefix="/editorial")


add_pagination(app)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://127.0.0.1:5500"   #HTML
        "http://localhost:5500"
        "http://localhost:5173"   #React con Vite
        "http://127.0.0.1:5173"
        "http://127.0.0.1:3000"   #Vercel por defecto
        "http://localhost:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)