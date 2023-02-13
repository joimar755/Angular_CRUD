"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pool = require('mysql2');
const dbConn = pool.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'Joimar',
    password: '123',
    database: 'tarifa'
});
dbConn.connect((err) => {
    if (err)
        throw err;
    console.log('Connected!');
});
dbConn.query('SELECT * FROM registro', function (error, results, fields) {
    if (error)
        throw error;
    results.forEach((result) => {
        console.log(result);
    });
});
exports.default = pool;
const tarifa = {
    nombre: null,
    placa: null,
    valor: null,
    modelo: null
};
const sql = 'INSERT INTO registro SET ?';
pool.query(sql, tarifa, (error, result) => {
    if (error)
        throw error;
    console.log(result);
    res.json({ text: "create a tarifa" });
});
create(req, Request, res, Response);
{
    pool.query('INSERT INTO registro set ?', [req.body]);
    res.json({ text: 'create a tarifa' });
}
const sql_1 = 'SELECT * FROM registro';
pool.query(sql_1, (error, results, fields) => {
    if (error)
        throw error;
    //res.json(games);  
    results.forEach((result) => {
        console.log(result);
    });
});
const { nombre, placa, valor, modelo } = req.body;
const result = pool.query("INSERT INTO registro(nombre,placa,valor,modelo) VALUES (?,?,?,?)", [nombre, placa, valor, modelo]);
console.log(result);
res.json({ text: "create a tarifa" });
