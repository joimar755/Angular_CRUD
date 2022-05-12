"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var indexRout_1 = __importDefault(require("./routes/indexRout"));
var vhRout_1 = __importDefault(require("./routes/vhRout"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = (0, express_1["default"])();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        this.app.set('port', process.env.PORT || 3000),
            this.app.use((0, morgan_1["default"])('dev'));
        this.app.use((0, cors_1["default"])());
        this.app.use(express_1["default"].json());
        this.app.use(express_1["default"].urlencoded({ extended: false }));
    };
    Server.prototype.routes = function () {
        this.app.use('/', indexRout_1["default"]);
        this.app.use('/api/vh', vhRout_1["default"]);
    };
    Server.prototype.start = function () {
        this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    };
    return Server;
}());
var server = new Server();
server.start();
