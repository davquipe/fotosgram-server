"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const usuarioSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    avatar: {
        type: String,
        default: 'av-1.png'
    },
    email: {
        type: String,
        unique: true,
        requiered: [true, 'El correo es Obligatorio']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es necesaria']
    }
});
exports.Usuario = mongoose_1.model('Usuario', usuarioSchema);
