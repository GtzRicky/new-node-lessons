const http = require('http');
const https = require('https');
const fs = require('fs/promises');
const path = require('path');

//Request => (Obj) Petición por parte del cliente
// Response => (Obj) Respuesta hacia el cliente

const getPage = async (path) => {
    try {
        let data = await fs.readFile(path, 'utf-8');
        return data;
    } catch (error) {
        console.log(error.message);
    }
};

http.createServer( async (request, response) => {
    const url = request.url; //Accediendo a la ruta que está solicitando el cliente

    switch (url) {
        case '/contacto':
            const contactPath = path.resolve('./www/contacto.html');
            const contactPage = await getPage(contactPath);
            response.end(contactPage);
        break;
        
        case '/nosotros':
            const aboutPath = path.resolve('./www/nosotros.html');
            const aboutPage = await getPage(aboutPath);
            response.end(aboutPage);
        break;

        case '/pokemon':
            https.get('https://pokeapi.co/api/v2/pokemon', (res) => {
                let data = '';

                res.on("data", (chunks) => {
                    data += chunks;
                }); //Evento - al método on se le conoce como un evento

                res.on("end", () => {
                    response.end(data);
                });
            });
        break;

        default :
            const homePath = path.resolve('./www/index.html');
            const homePage = await getPage(homePath);
            response.end(homePage);
        break;
    }
}).listen(8000);