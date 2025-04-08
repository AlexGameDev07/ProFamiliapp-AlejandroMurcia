const citasCtrl = {};
import citasMdl from "../models/citasMdl";
import pacientesMdl from "../models/pacientesMdl";
import doctoresMdl from "../models/doctoresMdl";

//*GET
citasCtrl.getCitas = async (req, res) => {
    try {
        const citas = await citasMdl.find().populate("doctorAsignado", "pacienteAsignado");
        res.json(citas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//*GET/:id
citasCtrl.getCita = async (req, res) => {
    try {
        const cita = await citasMdl.findById(req.params.id).populate("doctorAsignado", "pacienteAsignado");
        if (!cita) return res.status(404).json({ message: "Cita no encontrada" });
        res.json(cita);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//*POST
citasCtrl.postCita = async (req, res) => {
    const { paciente, doctor, fecha, hora, motivo } = req.body;

    try {
        // Verificar si el paciente y el doctor existen
        const pacienteExiste = await pacientesMdl.findById(paciente);
        const doctorExiste = await doctoresMdl.findById(doctor);

        if (!pacienteExiste) return res.status(404).json({ message: "Paciente no encontrado" });
        if (!doctorExiste) return res.status(404).json({ message: "Doctor no encontrado" });

        // Crear la cita
        const nuevaCita = new citasMdl({ paciente, doctor, fecha, hora, motivo });
        const savedCita = await nuevaCita.save();
        res.status(201).json(savedCita);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//*PUT
citasCtrl.updateCita = async (req, res) => {
    const { paciente, doctor, fecha, hora, motivo } = req.body;

    try {
        // Verificar si el paciente y el doctor existen
        if (paciente) {
            const pacienteExiste = await pacientesMdl.findById(paciente);
            if (!pacienteExiste) return res.status(404).json({ message: "Paciente no encontrado" });
        }

        if (doctor) {
            const doctorExiste = await doctoresMdl.findById(doctor);
            if (!doctorExiste) return res.status(404).json({ message: "Doctor no encontrado" });
        }

        // Actualizar la cita
        const updatedCita = await citasMdl.findByIdAndUpdate(
            req.params.id,
            { paciente, doctor, fecha, hora, motivo },
            { new: true, runValidators: true }
        );

        if (!updatedCita) return res.status(404).json({ message: "Cita no encontrada" });
        res.status(200).json(updatedCita);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//*DELETE
citasCtrl.deleteCita = async (req, res) => {
    try {
        const cita = await citasMdl.findByIdAndDelete(req.params.id);
        if (!cita) return res.status(404).json({ message: "Cita no encontrada" });
        res.json({ message: "Cita eliminada" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default citasCtrl;