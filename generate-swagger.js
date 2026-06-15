import fs from 'fs';
import path from 'path';
import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de GameTrackr",
      version: "1.0.0",
      description: "[\u2190 Volver a la p\xe1gina principal](/)\n\nDocumentaci\xf3n oficial de la API para la plataforma backend GameTrackr."
    },
    servers: [
      {
        url: "/api",
        description: "API V1 (Ruta relativa)"
      },
      {
        url: "http://localhost:3000/api",
        description: "Servidor de Desarrollo Local"
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
  apis: [
    path.join(process.cwd(), "src/routes/*.js"),
    path.join(process.cwd(), "src/models/*.js")
  ]
};

const swaggerSpec = swaggerJsdoc(options);
fs.writeFileSync(path.join(process.cwd(), 'swagger.json'), JSON.stringify(swaggerSpec, null, 2));
console.log('Swagger documentation generated successfully at swagger.json');
