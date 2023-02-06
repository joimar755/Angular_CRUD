CREATE DATABASE tarifa;

CREATE TABLE IF NOT EXISTS registro(
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50),
    placa VARCHAR(50),
    valor INT NOT NULL, 
    modelo INT NOT NULL,
    PRIMARY KEY (id)
);

RENAME TABLE registro TO registros;

describe registro;