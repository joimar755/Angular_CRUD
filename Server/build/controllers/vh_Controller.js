"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.vhController = void 0;
var Database_1 = __importDefault(require("../Database"));
var Vh_Controller = /** @class */ (function () {
    function Vh_Controller() {
    }
    Vh_Controller.prototype.list = function (req, res) {
        var games = Database_1["default"].query('SELECT * FROM registro', [req.body]);
        res.json(games);
    };
    Vh_Controller.prototype.getOne = function (req, res) {
        var id = req.params.id;
        var games = [Database_1["default"].query('SELECT * FROM registro WHERE id = ?', [id])];
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: 'the game not exist' });
    };
    Vh_Controller.prototype.create = function (req, res) {
        Database_1["default"].query('INSERT INTO registro set ?', [req.body]);
        res.json({ text: 'create a tarifa' });
    };
    Vh_Controller.prototype["delete"] = function (req, res) {
        var id = req.params.id;
        Database_1["default"].query('DELETE FROM registro WHERE id = ?', [id]);
        res.json({ text: 'delete a tarifa: ' });
    };
    Vh_Controller.prototype.update = function (req, res) {
        //res.json({text: 'update a tarifa: ' + req.params.id});
        var id = req.params.id;
        Database_1["default"].query('UPDATE registro set ? WHERE id = ?', [req.body, id]);
        res.json({ text: 'actualizado a tarifa: ' });
    };
    return Vh_Controller;
}());
exports.vhController = new Vh_Controller();
exports["default"] = exports.vhController;
