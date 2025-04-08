/**
 * Modelo de datos para doctores
 * Nombre
 * Especialidad
 * Correo
 * Contraseña
 */

import { Schema, model } from "mongoose";

const doctorSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    especialidad: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        required: true,
        unique: true,
    },
    contraseña: {
        type: String,
        required: true,
    },
});

export default model("Doctores", doctorSchema);
