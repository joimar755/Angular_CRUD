"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mysql2_1 = __importDefault(require("mysql2"));
var keys_1 = __importDefault(require("./keys"));
var pool = mysql2_1["default"].createPool(keys_1["default"].database);
pool.getConnection(function (err, conn) {
    console.log('DB is conected');
    // Connection is automatically released when query resolves
});
exports["default"] = pool;
