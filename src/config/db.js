import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    let uri = process.env.MONGODB_URI || "mongodb+srv://blackito:<db_password>@blackito.exo6ac7.mongodb.net/gametrackr?appName=blackito";
    
    // Limpiar quotes accidentales y espacios en blanco
    uri = uri.replace(/^["']|["']$/g, "").trim();

    if (!uri.startsWith("mongodb://") && !uri.startsWith("mongodb+srv://")) {
      console.warn("Advertencia: El formato de MONGODB_URI es inválido. Se omite la conexión a MongoDB.");
      return;
    }

    if (uri.includes("<db_password>")) {
      console.warn("Advertencia: Debes reemplazar <db_password> con tu contraseña real en la URI de MongoDB.");
    }

    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error de MongoDB: ${error.message}`);
    console.error("Fallo al conectar a MongoDB.");
  }
};
