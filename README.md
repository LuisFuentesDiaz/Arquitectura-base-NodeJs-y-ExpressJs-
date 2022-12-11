# ARQUITECTURA
Este es una aquitectura base de un proyecto en NodeJs
Esta desarrollada con los conceptos de una Clean Architecture
# BASE DE DATOS
La base de datos está montada en MYSQL y sus datos son:

        username: "root"
        password: ""
        database: "prueba"
        host: "localhost"

# INSTALACION
una vez clonado el proyecto y creada la BD solo falta la sentencia "npm install"

# ARRANCAR!
el comando para arrancar el server es "npm run dev"

# PROBAR LOS ENDPOINTS
para crear un usuario se debe acceder a la ruta : Post "localhost:3000/auth/signin"
los cuales pedira los siguientes datos Ej:
 {
    "rut": "19473669k",
    "nombres": "luis felipe",
    "apellidos": "fuentes diaz",
    "correo": "admin@gmail.cl",
    "password": "admin123"
}

para logearse se debe acceder a la siguiente ruta: "localhost:3000/auth/login"
la cual pedira los siguientes datos ej:
{
    "correo": "admin@gmail.cl",
    "password": "admin123"
}

si todo es correcto retornara un estado y un token.

para ver el listado de usuarios se debe acceder por la siguiente ruta: "localhost:3000/users" (solo con token)
