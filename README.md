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

**Sessions:**
- `GET /sessions`: Explorar grupos de partidas
- `POST /sessions/:id/join`: Acceder e inscribirse a un evento

## ☁️ Despliegue recomendado (Vercel)

1. Crear cuenta gratuita en [Vercel](https://vercel.com).
2. Instalar Vercel CLI globalmente: `npm i -g vercel`.
3. Iniciar sesión en la CLI: `vercel login`.
4. En el directorio raíz del proyecto, ejecuta el comando `vercel`.
5. Selecciona las opciones predeterminadas para enlazar tu proyecto local con Vercel o vincúlalo desde tu repositorio de GitHub directamente desde la plataforma web.
6. Asegúrate de configurar tus Variables de Entorno (`MONGODB_URI`, `JWT_SECRET`, etc.) en la pestaña "Settings > Environment Variables" del proyecto en Vercel.
7. Vercel detectará el archivo de configuración o el punto de entrada y desplegará la aplicación. (Nota: Para Vercel con Express, puede que requieras crear un archivo `vercel.json` configurando los *rewrites* hacia `server.js` o el archivo entrypoint empaquetado).
---

## 👥 Integrantes del Equipo

Este trabajo fue desarrollado por el siguiente equipo (máximo 4 integrantes):
1. Alex Giraud

> **Nota sobre Control de Versiones:** El repositorio cuenta con un historial de commits claro y explicativo, demostrando la contribución activa y equitativa de todos los miembros del equipo.

---

*Nota: La documentación de este servidor y estructura base fue generada y estructurada mediante el uso de herramientas de Inteligencia Artificial (OpenCode, Antigravity CLI, y/o ClaudeCode) cumpliendo con los estándares requeridos en las consignas del Trabajo Práctico Final.*
