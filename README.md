# EFI PP1 - "La Mazmorra"

## Profesores
* Arballo, Valentino
* Lemo, Facundo

## Integrantes
* Borsarello, Francisca
* Carrizo Larrarte, Emmanuel
* Gonzalez, Maria Victoria
* Zoppolo, Dina

---

## 🏰 Descripción del Proyecto

Se escogió como proyecto una tienda especializada en juegos de mesa y de rol llamada **"La Mazmorra"**. En este sistema se trabajó conjuntamente el desarrollo Backend y Frontend para simular un catálogo completo con administración de stock, categorías (divididas por tipo de juego), editoriales y precios localizados en Pesos Argentinos (ARS).

### 🛠️ API Utilizada
La aplicación consume una **API REST propia** diseñada para gestionar los recursos de la tienda de forma relacional. Cuenta con los siguientes endpoints principales estructurados en base al estándar JSON:
* `/categoria`: Administración de las distintas clasificaciones de juegos (Eurogames, Rol de Fantasía, Terror, etc.) con soporte para borrado lógico.
* `/editorial`: Registro de las empresas editoras y sus países de origen.
* `/juego`: Gestión integral del catálogo (precios, stock, descripción, edad mínima, rangos de jugadores y asignación de llaves foráneas).

---

## ⚙️ Pasos para ejecutar la aplicación de forma local

El proyecto está dividido en dos partes principales: la carpeta de `backend` y la carpeta de `frontend`. Sigue las siguientes instrucciones para levantar ambos entornos:

### 🎒 Backend

1. **Ingresar a la carpeta del backend:**
   ```bash
   cd backend/examen_final_PP1_backend
   ```

2. **Instalar las dependencias:**
   ```bash
   uv sync
   ```
   *Nota: `uv sync` lee los archivos `pyproject.toml` y `uv.lock`, crea el entorno virtual `.venv` automáticamente e instala las versiones exactas de las dependencias registradas.*

3. **Levantar el servidor de desarrollo:**
   Si te encuentras dentro de la carpeta `backend/examen_final_PP1_backend`, ejecuta:
   ```bash
   uv run fastapi dev src/main.py
   ```
   Si te encuentras en la raíz del proyecto (`EFI PP1`), puedes ejecutar directamente:
   ```bash
   uv run fastapi dev backend/examen_final_PP1_backend/src/main.py
   ```

4. **Acceso:**
   El servidor de desarrollo de FastAPI quedará disponible en: [http://127.0.0.1:8000](http://127.0.0.1:8000)  
   Para ver y probar la documentación interactiva de la API (Swagger), ingresa a: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

---

### 💻 Frontend

1. **Ingresar a la carpeta del frontend:**
   Abre una nueva terminal y navega hasta el directorio de la interfaz de usuario:
   ```bash
   cd frontend
   ```
   *(Nota: Asegúrate de reemplazar `frontend` por el nombre exacto de la carpeta si es diferente, por ejemplo `cd frontend/tu_carpeta_de_react`)*

2. **Instalar los módulos de Node:**
   Descarga todas las librerías necesarias del cliente ejecutando:
   ```bash
   npm install
   ```

3. **Iniciar el entorno de desarrollo:**
   Para levantar el proyecto y poder visualizar la interfaz de la tienda en tu navegador, ejecuta:
   ```bash
   npm run dev
   ```
   *Si el proyecto utiliza la configuración tradicional de Node, también puedes probar con:*
   ```bash
   npm start
   ```

4. **Acceso:**
   La terminal te indicará la dirección local asignada (usualmente [http://localhost:5173](http://localhost:5173) si usas Vite o [http://localhost:3000](http://localhost:3000) si usas React tradicional).

---

## 🧰 Tecnologías Utilizadas

* **Backend:** Python, FastAPI, SQLModel (SQLAlchemy + Pydantic), SQLite como motor de base de datos local y Alembic para el control de migraciones.
* **Frontend:** Node.js, JavaScript/TypeScript y empaquetadores de npm.

