/**
 * Archivo: server.js
 * Descriocion: archiivo responsable por toda a configuracion y execucion de la aplicacion
 */

const app = require("./src/app");

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("Aplicação executando na porta ", port);
});
