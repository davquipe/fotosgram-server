"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usrerRoutes = express_1.Router();
usrerRoutes.get('/prueba', (req, res) => {
    res.json({
        ok: true,
        mensaje: 'Todo funciona bien david!'
    });
});
exports.default = usrerRoutes;
