# 🏥 Pro-Familia API REST

Una API RESTful desarrollada para el Hospital **Pro-Familia**, diseñada para facilitar la gestión de citas médicas entre pacientes y doctores, con un sistema de autenticación seguro y validación de usuarios.

---

## 🚀 Funcionalidades Principales

- 🔐 **Autenticación** para pacientes y doctores.
- ✅ **Validación de correo electrónico** para pacientes.
- 👨‍⚕️ **CRUD de Doctores**.
- 🧑‍🦱 **CRUD de Pacientes**.
- 📅 **CRUD de Citas Médicas** (con asignación de doctor y paciente).

---

## 🧾 Estructura de Datos

### 👨‍⚕️ Doctores
```json
{
  "nombre": "Dr. Juan Pérez",
  "especialidad": "Cardiología",
  "correo": "juan@example.com",
  "contraseña": "********"
}

```
🧑 Pacientes
```json
{
  "nombre": "Ana Martínez",
  "edad": 28,
  "correo": "ana@example.com",
  "contraseña": "********",
  "teléfono": "1234-5678",
  "isVerified": true
}
```
📆 Citas
```json
{
  "fecha": "2025-04-08",
  "hora": "10:30",
  "motivo": "Dolor en el pecho",
  "doctorId": "ID_DEL_DOCTOR",
  "pacienteId": "ID_DEL_PACIENTE"
}
```
🔐 Autenticación
Registro e inicio de sesión diferenciados para pacientes y doctores.

Validación de correo electrónico obligatoria para pacientes antes de agendar citas.

⚙️ Tecnologías Utilizadas
- Node.js / Express

- MongoDB

- JWT para autenticación

- Nodemailer

📌 Notas
Los pacientes no pueden agendar citas si no han verificado su correo electrónico.

Solo los doctores pueden modificar o cancelar una cita.

👑 Autor
Sir Alexis Von Murec
Supremo Arquitecto de Software y Protector de los Códigos Sagrados

🏰 Licencia
Este proyecto se encuentra bajo la licencia MIT.
