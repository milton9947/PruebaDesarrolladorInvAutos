--CREATE USER invautos_user WITH PASSWORD 'Inv2025$';
--GRANT ALL PRIVILEGES ON DATABASE invautos TO invautos_user;


-- Crear tabla de cargos
CREATE TABLE db1.cargo (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE NOT NULL
);


-- Crear tabla de usuarios
CREATE TABLE db1.usuario (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    edad INTEGER NOT NULL,
    cargo_id INTEGER REFERENCES db1.cargo(id),
    fecha_ingreso DATE NOT NULL
);

-- Crear tabla de mercancías
CREATE TABLE db1.mercancia (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE NOT NULL,
    cantidad INTEGER NOT NULL CHECK (cantidad > 0),
    fecha_ingreso DATE NOT NULL CHECK (fecha_ingreso <= CURRENT_DATE),
    usuario_registro_id INTEGER REFERENCES db1.usuario(id) NOT NULL,
    fecha_modificacion DATE,
    usuario_modificacion_id INTEGER REFERENCES db1.usuario(id)
);

INSERT INTO db1.cargo (nombre) VALUES
('Asesor de ventas'),
('Administrador'),
('Soporte');

INSERT INTO db1.usuario (nombre, edad, cargo_id, fecha_ingreso)
VALUES
('Carlos Pérez', 30, 1, '2022-05-01'),
('Laura Gómez', 28, 2, '2021-03-15'),
('Andrés Rojas', 35, 3, '2023-01-20');


INSERT INTO db1.mercancia (nombre, cantidad, fecha_ingreso, usuario_registro_id)
VALUES
('Filtro de aire', 50, CURRENT_DATE, 1),
('Aceite 10W40', 80, CURRENT_DATE, 2);

----------------------------------------------------------------------------------------------------

select * from db1.cargo c;
select * from db1.mercancia m;
select * from db1.usuario u;

