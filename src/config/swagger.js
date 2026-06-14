import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de GameTrackr",
      version: "1.0.0",
      description: "[\u2190 Volver a la p\xE1gina principal](/)\n\nDocumentaci\xF3n oficial de la API para la plataforma backend GameTrackr."
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
  apis: ["./src/routes/*.js", "./src/models/*.js"]
  // files containing annotations
};
const swaggerSpec = swaggerJsdoc(options);
const setupSwagger = (app) => {
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, { customSiteTitle: "Documentaci\xF3n API GameTrackr" })
  );
};
export {
  setupSwagger
};
