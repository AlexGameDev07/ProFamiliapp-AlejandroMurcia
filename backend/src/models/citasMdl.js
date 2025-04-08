/**
 * Modelo de datos para citas
 * Fecha
 * Hora
 * Motivo
 * DoctorAsignado
 * PacienteAsignado
 */
import { Schema, model } from "mongoose";

const citaSchema = new Schema({
    fecha: {
        type: Date,
        required: true,
    },
    hora: {
        type: String,
        required: true,
    },
    motivo: {
        type: String,
        required: true,
    },
    doctorAsignado: {
        type: Schema.Types.ObjectId,
        ref: "Doctores",
        required: true,
    },
    pacienteAsignado: {
        type: Schema.Types.ObjectId,
        ref: "Pacientes",
        required: true,
    },
});

export default model("Citas", citaSchema);