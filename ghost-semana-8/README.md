# Entrega semana 8

## Inventario de pruebas manuales

Los dos inventarios de pruebas de las pruebas exploratorias manuales se encuentran en los archivos:

### Versión 3
[Inventario de pruebas manuales versión 3.xlsx](inventario-pruebas-manuales-version-3.xlsx)
### Versión 4
[Inventario de pruebas manuales versión 4.xlsx](inventario-pruebas-manuales-version-4.xlsx)

## Estrategia de pruebas

La estrategia de pruebas se encuentra en el archivo [Estrategia de pruebas](estrategia-pruebas.pdf)

### Ejecutar pruebas
Antes de ejecutar cualquier prueba, ubiquese en la raíz del proyecto y ejecute el comando:
```
npm install
``` 

### Ejecutar pruebas de validación 🚀
1. Ingrese a la carpeta pruebas-validacion
2. Ejecute el comando
```
cypress open
``` 
o en su defecto, ejecute el comando 
```
npx cypress open
``` 

### Ejecutar pruebas de reconocimiento 🚀

1. Pruebas de reconocimiento con RIPuppet:
- Ingrese a la carpeta pruebas-reconocimiento/RIPuppetCoursera
- Ejecute 
>npm install
De ser necesario, verifique que tenga nodejs y python instalado en su sistema,siga las instrucciones de la siguiente URL para garantizar que tenga todas las librerías necesarias para correr RIPuppet

https://github.com/TheSoftwareDesignLab/RIPuppetCoursera

- Corra las pruebas con el comando
>node index.js http://ec2-54-145-214-45.compute-1.amazonaws.com:2369 true

2. Pruebas de reconocimiento con monkey-cypress:
- Ingrese a la carpeta pruebas-reconocimiento/monkey-cypress
- Ejecute 
>npm install
De ser necesario, verifique que tenga nodejs instalado en su sistema, siga las instrucciones de la siguiente URL para garantizar que tenga todas las librerías necesarias para correr RIPuppet

https://github.com/TheSoftwareDesignLab/monkey-cypress

- Corra las pruebas con el comando
>node index.js http://ec2-54-145-214-45.compute-1.amazonaws.com:2369 true

El archivo monkey-config.json ya tiene la URL del proyecto actualizada, por lo que solo basta con correr el siguiente comando para ejecutar las pruebas:

>cypress run --config-file ./monkey-config.json
### Ejecutar pruebas de e2e 🚀

### Ejecutar pruebas vrt 🚀


## Video
El video de entrega de la semana 8 se puede encontrar en

https://youtu.be/phn0wYBXd24 