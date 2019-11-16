"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const usuario_1 = __importDefault(require("./routes/usuario"));
const mongoose_1 = __importDefault(require("mongoose"));
const server = new server_1.default();
// Rutas de mi apliacion
server.app.use('/user', usuario_1.default);
// Condectar DB
// ya no es recomendable usar useCreateIndex => useUnifiedTopology
mongoose_1.default.connect('mongodb://localhost:27017/fotosgram', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err)
        throw err;
    console.log('Base de Datos ONLINE');
});
// Levantar express
server.start(() => {
    console.log(`Servidor Corriendo en puerto ${server.port}`);
});
