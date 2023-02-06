"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../Controllers/indexController");
//import { indexController } from "../controllers/indexController";
class indexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.indexController.index);
    }
}
const index = new indexRoutes();
exports.default = index.router;
