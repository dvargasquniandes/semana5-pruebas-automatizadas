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

### Ejecutar pruebas de e2e 🚀
#### Ejecutar pruebas e2e pruebas Cypress 🚀
1. Entrar al directorio ghost-cypress
2. Ejecutar el comando npm install
3. Ejecutar el comando npx cypress open
4. Se abrirá una ventana con las pruebas a testear
5. Clickear en la opción run all tests

#### Ejecutar pruebas e2e kraken 🚀
1. Instalar kraken, siguiendo las instrucciones en https://thesoftwaredesignlab.github.io/AutTesingCodelabs/w5/krakenWeb/index.html
2. si se presentan problemas con las librerías globales, es mejor instalar kraken en el directorio local
3. Si se requiere, instalar los paquetes appium (node install -g appium), adb (sudo apt install adb), cucumber (npm install -S cucumber), y chromium (sudo apt install chromium-browser), Tenga en cuenta que estas recomendaciones son para una instalación fresca de Ubuntu 22.04LTS
4. Sobre la raíz del proyecto de kraken, correr kraken con el comando
kraken-node run --properties=./properties.json

Si la instalación se realizó localmente, usar 

/node_modules/kraken-node/bin/kraken-node run --properties=./properties.json
5. Dependiendo de la instalación local de ghost, deberá cambiar el usaurio y contraseña en el archivo properties.json, se asume siempre que el despliegue de ghost es local por el puerto estándar, por lo que no se tiene una variable de configuración para la url ya que los tiempos de espera estan ligados a ejecución en localhost

El resultado de la ejecución de las pruebas de Kraken está en /kraken/reports
### Ejecutar pruebas vrt 🚀
