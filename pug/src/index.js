//Imports
const express = require("express")
const app = express()
const path = require("path")
const routes = require("./routes/router")
const mainRoute = require("./routes/mainRouter")
const PORT = 8080

//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "/public")))
app.use("/", mainRoute)
app.use("/api/productos", routes)

//Engine
app.set("views", path.join(__dirname, "../public/views"))
app.set("view engine", "pug")

//Puerto Server
app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Server escuchando puerto : ${PORT}`);
})