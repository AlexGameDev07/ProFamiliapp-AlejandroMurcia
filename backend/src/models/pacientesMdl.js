/**
 * Modelo de datos para pacientes
 * Nombre
 * Edad
 * Correo
 * Contraseña
 * Teléfono
 * isVerified
 */

import { Schema, model } from "mongoose";

const pacienteSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    edad: {
        type: Number,
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
    telefono: {
        type: String,
        required: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
});

export default model("Pacientes", pacienteSchema);
