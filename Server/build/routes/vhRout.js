"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vh_Controller_1 = require("../Controllers/vh_Controller");
class Vhrout {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', vh_Controller_1.vhController.list);
        this.router.get('/:id', vh_Controller_1.vhController.getOne);
        this.router.post('/', vh_Controller_1.vhController.create);
        this.router.delete('/:id', vh_Controller_1.vhController.delete);
        this.router.put('/:id', vh_Controller_1.vhController.update);
    }
}
const index = new Vhrout();
exports.default = index.router;
