"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prisma_1 = require("./lib/prisma");
const app = (0, express_1.default)();
app.get('/', async (req, res) => {
    const users = await prisma_1.prisma.user.findMany();
    return res.json(users);
});
// app.get('/' , async (req, res) => {
//   return res.json({bunda: true})
// })
app.listen({
    port: process.env.PORT || 3333
});
