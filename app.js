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

app.post("/send-email", (req, res) => {
  // El código para enviar el correo electrónico sigue siendo el mismo
  // ...

  // Renderiza la vista de éxito o error después de enviar el correo
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.render("message", { message: "Error al enviar el correo" });
    } else {
      console.log("Correo enviado: " + info.response);
      res.render("message", { message: "Correo enviado correctamente" });
    }
  });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:4000`);
});
