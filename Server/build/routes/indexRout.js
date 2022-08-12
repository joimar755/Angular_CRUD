"use strict";
exports.__esModule = true;
var express_1 = require("express");
var indexController_1 = require("../controllers/indexController");
var indexRoutes = /** @class */ (function () {
    function indexRoutes() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    indexRoutes.prototype.config = function () {
        this.router.get('/', indexController_1.indexController.index);
    };
    return indexRoutes;
}());
var index = new indexRoutes();
exports["default"] = index.router;
