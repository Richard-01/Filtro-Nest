# NEST.JS


<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Descripcion

Crear un estudiante, como no pidieron datos para el estudiante solo hice 3 nombre, identificacion y edad.

## Uso

Recuerda cambiar los url de la base de datos por una tuya donde tengas acceso y al final de la url de mongo, colocar el nombre de la collection.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Endpoints

- [x] **Crear:** *Method -->* **POST** http://localhost:3000/students
<br>
**data:**{
  "name": "editar",
  "identification": "editar",
  "age": 23
}

- [x] **Leer todos:** *Method -->* **GET** http://localhost:3000/students
- [x] **Leer por ID:** *Method -->* **GET** http://localhost:3000/students/:id
- [x] **Actualizar:** *Method -->* **PUT** http://localhost:3000/students/:id
- [x] **Eliminar:** *Method -->* **DELETE** http://localhost:3000/students/:id
