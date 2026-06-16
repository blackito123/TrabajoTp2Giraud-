# GameTrackr 🎮

GameTrackr es una plataforma backend para que los gamers gestionen su biblioteca de videojuegos, registren su progreso y organicen sesiones de juego multijugador.

Este proyecto es un Trabajo Práctico Final construido meticulosamente siguiendo una arquitectura N-Tier para un código limpio, mantenible y escalable.

## 🚀 Tecnologías

* **Runtime:** Node.js
* **Framework:** Express.js
* **Base de Datos:** MongoDB con Mongoose (ODM)
* **Autenticación:** JSON Web Tokens (JWT) & bcryptjs
* **Documentación:** Swagger (swagger-ui-express & swagger-jsdoc)

## 📁 Arquitectura N-Tier

El proyecto está diseñado bajo una arquitectura multicapa clara:

```
├── src
│   ├── config/       # Configuraciones (DB, Swagger, etc.)
│   ├── controllers/  # Manejadores de Req/Res (Lógica de presentación)
│   ├── middlewares/  # Middlewares Express (Auth, Error Handling)
│   ├── models/       # Esquemas de Mongoose
│   ├── repositories/ # Patrón Repositorio (Capa acceso a datos - DB)
│   ├── routes/       # Definición de rutas y endpoints
│   ├── services/     # Lógica de negocio de la aplicación
│   ├── utils/        # Funciones auxiliares (JWT, transformadores)
│   └── database/     # (Opcional) Seeders o migraciones
└── server.js         # Punto de entrada de la aplicación
```

## 🛠️ Cómo instalar y correr localmente

### Prerrequisitos
- Node.js (v18+)
- MongoDB (Instalado localmente o usar Mongo Atlas)

### Pasos

1. Clonar el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd gametrackr
   ```

2. Instalar las dependencias:
   ```bash
   npm install
   ```

3. Configurar variables de entorno:
   * Copia el archivo llamado `.env.sample` a un nuevo archivo `.env`
   * Personaliza las variables dentro del `.env` según tu entorno local:
     ```env
     PORT=3000
     MONGODB_URI="mongodb://localhost:27017/gametrackr"
     JWT_SECRET="tu_secreto_super_seguro"
     ```

4. Iniciar el servidor en modo desarrollo:
   ```bash
   npm run dev
   ```

5. Accede a la documentación Swagger en tu navegador:
   * http://localhost:3000/api-docs

## 🔐 Variables de Entorno (.env)

Las variables requeridas por el sistema son:
* `PORT` - Puerto por defecto
* `MONGODB_URI` - Cadena de conexión hacia MongoDB
* `JWT_SECRET` - Llave privada para cifrado e intercepción de JWT.

## 🔌 Endpoints Principales

Todos los endpoints están prefijados por `/api/`. Para una lista interactiva de todos ellos, visite Swagger de modo local en `/api-docs`.

**Auth:**
- `POST /auth/register`: Registro de usuarios.
- `POST /auth/login`: Autenticación y generación de JWT.
- `GET /auth/me`: Obtenes info del user logueado.

**Games:**
- `GET /games`: Listado de todos los videojuegos.
- `POST /games`: Crear videojuego (solo Admis)

**Library:**
- `GET /library`: Colección personal de el usuario
- `POST /library`: Añadir un juego al perfil 

## ☁️ Despliegue en Render

El proyecto está configurado para ser desplegado fácilmente en [Render](https://render.com).
1. Crea una cuenta en Render.
2. Crea un nuevo Web Service conectado a tu repositorio de GitHub.
3. Asegúrate de configurar tus Variables de Entorno (`MONGODB_URI`, `JWT_SECRET`, etc.) en el panel de control de Render.
4. Render detectará el proyecto Node.js e iniciará el despliegue automáticamente usando `npm start` (asegúrate de que el comando de inicio sea correcto en `package.json`).
---

## 👥 Integrantes del Equipo

Este trabajo fue desarrollado por el siguiente equipo:
1. Alex Giraud