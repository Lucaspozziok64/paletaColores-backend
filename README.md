🎨 Backend - API de Paleta de Colores
-
API RESTful para gestionar una paleta de colores con operaciones CRUD completas. Desplegada automáticamente en Vercel.

![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white&style=flat)

![Vercel](https://img.shields.io/badge/Deploy-Vercel-black)

![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-success)

####
🌟 Características principales
- 
- ✅ CRUD completo de colores (Crear, Leer, Actualizar, Eliminar)
- 🗄️ Base de datos en MongoDB Atlas (nube)
- 🌐 CORS habilitado para conexiones frontend
- 📊 Morgan para logging de peticiones
- 🔒 Variables de entorno protegidas
- 🚀 Despliegue automático en Vercel

####
📦 Tecnologías utilizadas
-
- Node.js - Entorno de ejecución
- Express.js - Framework web
- MongoDB Atlas - Base de datos en la nube
- Mongoose - ODM para MongoDB
- CORS - Middleware para cross-origin requests
- Morgan - Logger de peticiones HTTP
- dotenv - Manejo de variables de entorno

####
🛠️ Configuración local
- 
Prerrequisitos
- Node.js 18+
- MongoDB Atlas account
- Git

Instalación

1- Clonar el repositorio:
`````
git clone https://github.com/Lucaspozziok64/paletaColores-backend.git
cd tu-repo
`````

2- Instalar dependencias:
`````
npm install
`````

3- Configurar variable en .env:
`````
PORT=3000
MONGODB_URI=mongodb+srv://usuario:password@cluster.mongodb.net/tasksdb
NODE_ENV=developmentv
`````

4_ Ejecutar en desarrollo:
````
npm run dev
````
####
🚀 Despliegue en Vercel
- 
- Configuración automática

El proyecto incluye vercel.json para despliegue automático:
````
{
  "version": 2,
  "builds": [
    {
      "src": "src/app.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "src/app.js"
    }
  ]
}
````

Pasos para desplegar:
- Conectar repositorio con Vercel
- Configurar variables de entorno en dashboard de Vercel
- ¡Despliegue automático en cada push a main!

🤝 Contribución
-
- Fork del proyecto
- Crear rama feature: git checkout -b feature/nueva-funcionalidad
- Commit cambios: git commit -m "Agrega nueva funcionalidad"
- Push a la rama: git push origin feature/nueva-funcionalidad
- Abrir Pull Request

####

👨‍💻 Autor
- 
- Lucas Figueroa
- 💼 [LinkedIn](https://linkedin.com/in/lucas-figueroa-579b0b30b)
- 📬 lukafigueroa64@gmail.com
