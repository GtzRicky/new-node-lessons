import express from 'express';
import morgan from 'morgan';
import path from 'path';

const app = express();
app.use(morgan("tiny")); // Morgan muestra el output de la petición de acuerdo al parámetro que le indiquemos (tiny, dev, etc.).
app.use(express.static("public")); // De esta manera Express comparte todo el directorio indicado al cliente.
app.use(express.urlencoded({extended: true})); // Middleware para procesar content-type urlenconded.
app.use(express.json()); // Middleware para procesar datros en formato JSON


//Express se basa un 80 % en --> Middleware | atender peticiones | function | dar respuesta al cliente

// Middleware de aplicación -> Atender cualquier tipo de petición que llegue al servidor (GET, POST, PUT, DELETE, PATCH).
// Request y response son objetos con métodos send, json, sendFile...

app.use((request, response, next) => {
    console.log("Se obtuvo una petición por parte del cliente");
    next(); //Ignora este middleware y pasa al siguiente
});

// Atender peticiones a través del método GET ~ así con los diferentes métodos/peticiones
app.get("/", (request, response) => {
    const homePage = path.resolve("./public", "index-1.html");
    response.sendFile(homePage);
})

app.get("/nosotros", (request, response) => {
    console.log("Se obtuvo una petición por parte del cliente");
    response.send("Acerca de");
});

app.post("/users", (request, response, next) => {
    // Obtener los datos que me envía el cliente a través de la petición POST
    console.log(request.body);
    console.log(request.headers);

    // Validamos que tenga firstname y lastname
    const {firstname, lastname} = request.body;
    if(firstname && lastname) {
        return response.send("Ha llegado la petición a /users");
    }
     return next("La petición no pudo se procesada porque hay campos vacíos");
});

// Next cumple con dos funciones
// 1. Sin argumentos -> Continuar con el siguiente middleware
// 2. Con argumentos -> 

// Middleware para el manejo de errores
app.use((error, request, response, next) => {
   response.status(400).send(error);
});

export default app;