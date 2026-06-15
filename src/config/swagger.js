import fs from "fs";
import path from "path";
import swaggerUi from "swagger-ui-express";

let swaggerSpec = {};
try {
  const filePath = path.join(process.cwd(), "swagger.json");
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf8");
    swaggerSpec = JSON.parse(fileContent);
  } else {
    console.warn("swagger.json not found, regenerating...");
  }
} catch (error) {
  console.error("Error reading swagger.json", error);
}

const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.3.0/swagger-ui.min.css";
const customOptions = {
  customCssUrl: CSS_URL,
  customSiteTitle: "Documentación API GameTrackr"
};

const setupSwagger = (app) => {
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, customOptions)
  );
};
export {
  setupSwagger
};
