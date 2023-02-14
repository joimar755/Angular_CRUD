"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vhController = void 0;
const Database_1 = __importDefault(require("../Database"));
class Vh_Controller {
    list(req, res) {
        const sql = "SELECT * FROM registro";
        Database_1.default.query(sql, (error, results) => {
            if (error)
                throw error;
            //console.log(result);
            res.json(results);
        });
    }
    getOne(req, res) {
        const { id } = req.params;
        const games = Database_1.default.query("SELECT * FROM registro WHERE id = ?", [id]);
        if (games) {
            return res.json(games);
        }
        res.status(404).json({ text: "the game not exist" });
    }
    create(req, res) {
        const { nombre, placa, valor, modelo } = req.body;
        const sql = "INSERT INTO registro (nombre,placa,valor,modelo) VALUES (?, ?, ?, ?)";
        Database_1.default.query(sql, [nombre, placa, valor, modelo], (error, results) => {
            if (error)
                throw error;
            console.log(results);
            res.json({ text: "create a tarifa" });
        });
    }
    delete(req, res) {
        const { id } = req.params;
        Database_1.default.query("DELETE FROM registro WHERE id = ?", [id]);
        res.json({ text: "delete a tarifa: " });
    }
    update(req, res) {
        //res.json({text: 'update a tarifa: ' + req.params.id});
        const { id } = req.params;
        Database_1.default.query("UPDATE registro set ? WHERE id = ?", [req.body, id]);
        res.json({ text: "actualizado a tarifa: " });
    }
}
exports.vhController = new Vh_Controller();
exports.default = exports.vhController;
