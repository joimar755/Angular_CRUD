"use strict";
exports.__esModule = true;
var express_1 = require("express");
var vh_Controller_1 = require("../Controllers/vh_Controller");
var Vhrout = /** @class */ (function () {
    function Vhrout() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    Vhrout.prototype.config = function () {
        this.router.get('/', vh_Controller_1.vhController.list);
        this.router.get('/:id', vh_Controller_1.vhController.getOne);
        this.router.post('/', vh_Controller_1.vhController.create);
        this.router["delete"]('/:id', vh_Controller_1.vhController["delete"]);
        this.router.put('/:id', vh_Controller_1.vhController.update);
    };
    return Vhrout;
}());
var index = new Vhrout();
exports["default"] = index.router;
