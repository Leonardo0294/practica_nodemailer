const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const ejs = require("ejs");
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "",
        pass: "",
      },
    });

    const mailOptions = {
      from: "tu_correo@gmail.com",
      to: email,
      subject: subject,
      text: `Hola ${name},\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Correo enviado correctamente");
    res.render("message", { message: "Correo enviado correctamente" });
  } catch (error) {
    console.error(error);
    res.render("message", { message: "Error al enviar el correo" });
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});

