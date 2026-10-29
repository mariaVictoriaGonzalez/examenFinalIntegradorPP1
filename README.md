# EFI PP1 - "La Mazmorra"
__Profesores__  
Arballo, Valentino  
Lemo, Facundo  

__Integrantes__
* Borsarello, Francisca
* Carrizo Larrarte, Emmanuel
* Gonzalez, Maria Victoria
* Zoppolo, Dina  

---

Se escogió como proyecto una tienda de juegos de mesa y rol que llamamos __"La Mazmorra"__<br>
En este proyecto se trabajó conjuntamente el Backend y Fronend con diferentes herramientas que hemos visto a lo largo del año.<br>

### Backend
1- para instalar las dependencias debemos entrar en la carpeta
```
backend/examen_final_PP1_backend
```

2- luego se instala las dependencias usando
```
uv sync
```
3- uv sync lo que hace es leer el archivo pyproject.toml y uv.lock, crea el entorno virtual .venv si es necesario e instala las versiones de las dependencias registradas en el lockfile.

4- Se levanta el servidor usando
```
uv run fastapi dev src/main.py
```
Esto ejecuta el servidor de desarrollo de FastAPI. Normalmente queda disponible en http://127.0.0.1:8000.

Y para ver la documentación interactiva de la API se ingresa a:
http://127.0.0.1:8000/docs

