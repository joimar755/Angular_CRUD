CREATE DATABASE tarifa;

CREATE Table registro(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    placa VARCHAR(50),
    valor INT NOT NULL
);

RENAME TABLE registro TO registro;

describe registro;