from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi_pagination import add_pagination

#ROUTERS from routers.NOMBRE import ...


app = FastAPI()

app.title = "APP EFI" #nombre temporal

#los routers - pathoperation app.include_router(NOMBRE_routers, tags["NOMBRE"], prefix="/nombre")

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