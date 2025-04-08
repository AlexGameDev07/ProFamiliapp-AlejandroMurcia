const pacientesCtrl = {};
import pacientesMdl from "../models/pacientesMdl";

//*GET
pacientesCtrl.getPacientes = async (req, res) => {
    try {
        const pacientes = await pacientesMdl.find();
        res.json(pacientes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//*GET/:id
pacientesCtrl.getPaciente = async (req, res) => {
    try {
        const paciente = await pacientesMdl.findById(req.params.id);
        if (!paciente) return res.status(404).json({ message: "Paciente no encontrado" });
        res.json(paciente);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//*POST
pacientesCtrl.postPaciente = async (req, res) => {
    const paciente = new pacientesMdl(req.body);
    try {
        const savedPaciente = await paciente.save();
        res.status(201).json(savedPaciente);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//*PUT
pacientesCtrl.updatePaciente = async (req, res) => {
    try{
        const updatedPaciente = await pacientesMdl.findByIdAndUpdate(
            req.params.id, 
            paciente, 
            { new: true, runValidators: true }
        );
        if (!updatedPaciente) return res.status(404).json({ message: "Paciente no encontrado" });
        res.status(200).json(updatedPaciente);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//*DELETE
pacientesCtrl.deletePaciente = async (req, res) => {
    try {
        const paciente = await pacientesMdl.findByIdAndDelete(req.params.id);
        if (!paciente) return res.status(404).json({ message: "Paciente no encontrado" });
        res.json({ message: "Paciente eliminado" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

