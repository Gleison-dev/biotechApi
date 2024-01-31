import express from "express";
import { usuarioRoute } from "./routes/Usuario.route.js";
import { catalogoRoute } from "./routes/Catalogo.route.js";
import { producaoRoute } from "./routes/Producao.route.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(usuarioRoute);
app.use(catalogoRoute);
app.use(producaoRoute);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})