# Descripción del Proyecto

En este proyecto lo que hicimos fue reutilizar una actividad pasada donde usamos una base de datos como back-end para poder guardar datos de lo que trata nuestro proyecto los programas que utilizamos fueron los siguientes:

## Back-end

- Docker 
- Postman
- Dbeaver
- API en Visual Studio Code 

## Front-end

- API en Visual Studio Code
- Framework Next.js

Mi proyecto se basa en un recordatorio de citas medicas, pero para esta actividad lo que implementé fueron dos pantallas hechas con el framework de Next.js que simulen un formulario donde pueda agregar los datos en los campos de:

- Nombre de Medicamento
- Gramos
- Precio
- Marca

Y un Dashboard donde al presionar el boton para guardar los datos anterior puestos en formulario aparezcan ahí.
Por ultimo realiza una tercera pantalla algo un poco más interactiva para saber el precio del medicamento más caro y más barato del que están registrados.

# Instrucciones de Intalación y Ejecución

## Back-end

En Docker creé una imagen tal como la siguiente:

![Texto alternativo](/src\docker.jpg)

Donde se ve el estado de nuestra base y nos dice si todo esta correcto



Ya tenía una base de datos antigua que edité para este proyecto la tabla final fue la siguiente:

```sql 
CREATE TABLE Medicina(

    id_numMedicina   INTEGER         NOT NULL     AUTO_INCREMENT,
    nombre          VARCHAR(150)     NOT NULL,
    gramos          INTEGER(150)     NOT NULL,
    precio          INTEGER(150)     NOT NULL,
    marca           VARCHAR(150)     NOT NULL,
    PRIMARY KEY(id_numMedicina)

);
```
Para resumidas cuentas en la API lo que hice fue llamar a los componentes Controllers y Model de "Medicina" de la siguiente manera:

![Texto alternativo](/src\controllers.jpg)

Luego nos vamos a Postman y vemos si funciona el Post y Get:

## Get

![Texto alternativo](/src\postmanget.jpg)

## Post

![Texto alternativo](/src\postpost.jpg)
