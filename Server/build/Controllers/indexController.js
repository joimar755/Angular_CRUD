"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json('hello_joimar');
    }
}
exports.indexController = new IndexController();
exports.default = exports.indexController.index;
