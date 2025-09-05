# MaFiEst

## Descripción del Proyecto
MaFiEst es una plataforma educativa diseñada para facilitar el aprendizaje y la gestión de cursos en línea. Permite a los administradores crear grupos académicos, gestionar usuarios y supervisar el progreso de los estudiantes. Los docentes pueden subir materiales educativos, como talleres y exámenes, mientras que los estudiantes e independientes pueden acceder a cursos y realizar un seguimiento de su progreso y logros.

## Estructura del Proyecto

### Backend
El backend está construido con Node.js, Express y Sequelize, utilizando PostgreSQL como base de datos. La estructura de carpetas es la siguiente:

- **controllers/**: Contiene la lógica de negocio para manejar las solicitudes y respuestas.
- **models/**: Define la estructura de las tablas en la base de datos.
- **routes/**: Define las rutas de la API.
- **utils/**: Contiene utilidades y helpers, como la configuración y la conexión a la base de datos.
- **app.js**: Configuración principal de Express.
- **server.js**: Punto de entrada que levanta el servidor.

### Frontend
El frontend está construido con React y Vite, proporcionando una interfaz de usuario dinámica y responsiva. La estructura de carpetas es la siguiente:

- **public/**: Contiene el archivo HTML principal y el icono de la aplicación.
- **src/pages/**: Contiene las diferentes páginas de la aplicación, organizadas por rol (administrador, docente, estudiante, independiente).
- **src/components/**: Contiene componentes reutilizables como la barra de navegación y tarjetas de curso.
- **src/AppRoutes.jsx**: Define las rutas de la aplicación según el rol del usuario.
- **src/App.jsx**: Componente principal de la aplicación.

## Funcionalidades

- **Autenticación**: Los usuarios pueden registrarse, iniciar sesión y cerrar sesión. Los independientes pueden registrarse por sí mismos, mientras que los estudiantes son creados por administradores.
- **Gestión de Usuarios**: Los administradores pueden crear, leer, actualizar y eliminar usuarios.
- **Gestión de Grupos**: Los administradores pueden crear y gestionar grupos académicos.
- **Progreso y Logros**: Los estudiantes pueden ver su progreso en los cursos y los logros obtenidos.
- **Interacción**: Los usuarios pueden enviar formularios de contacto y solicitudes de asesoría.

## Requisitos

- Node.js
- PostgreSQL
- Dependencias de npm para el backend y frontend

## Instalación

1. Clona el repositorio:
   ```
   git clone <url-del-repositorio>
   cd MaFiEst
   ```

2. Configura el backend:
   - Navega a la carpeta `backend` y ejecuta:
     ```
     npm install
     ```

3. Configura el frontend:
   - Navega a la carpeta `frontend` y ejecuta:
     ```
     npm install
     ```

4. Configura las variables de entorno en el archivo `.env` en la carpeta `backend`.

5. Levanta el servidor backend:
   ```
   cd backend
   node server.js
   ```

6. Levanta el servidor frontend:
   ```
   cd frontend
   npm run dev
   ```

## Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia
Este proyecto está bajo la Licencia MIT.