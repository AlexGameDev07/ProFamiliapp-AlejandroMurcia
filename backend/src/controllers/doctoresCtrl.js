const doctoresCtrl = {};
import doctoresMdl from "../models/doctoresMdl";

//*GET
doctoresCtrl.getDoctores = async (req, res) => {
    try {
        const doctores = await doctoresMdl.find();
        res.json(doctores);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//*GET/:id
doctoresCtrl.getDoctor = async (req, res) => {
    try {
        const doctor = await doctoresMdl.findById(req.params.id);
        if (!doctor) return res.status(404).json({ message: "Doctor no encontrado" });
        res.json(doctor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//*POST
doctoresCtrl.postDoctor = async (req, res) => {
    const doctor = new doctoresMdl(req.body);
    try {
        const savedDoctor = await doctor.save();
        res.status(201).json(savedDoctor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//*PUT
doctoresCtrl.updateDoctor = async (req, res) => {
    try {
        const updatedDoctor = await doctoresMdl.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedDoctor) return res.status(404).json({ message: "Doctor no encontrado" });
        res.status(200).json(updatedDoctor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//*DELETE
doctoresCtrl.deleteDoctor = async (req, res) => {
    try {
        const doctor = await doctoresMdl.findByIdAndDelete(req.params.id);
        if (!doctor) return res.status(404).json({ message: "Doctor no encontrado" });
        res.json({ message: "Doctor eliminado" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default doctoresCtrl;