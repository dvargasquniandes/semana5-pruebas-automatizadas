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
#### Ejecutar pruebas e2e pruebas Cypress
1. Entrar al directorio ghost-cypress
2. Ejecutar el comando npm install
3. Ejecutar el comando npx cypress open
4. Se abrirá una ventana con las pruebas a testear
5. Clickear en la opción run all tests

#### Ejecutar pruebas e2e kraken
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

Ejecución de la comparación de las pruebas de cypress con resemble
Para ejecutar el programa en resemble, se deben haber ejecutado las pruebas en las 2 versiones de ghost bajo prueba, se debe ingresar a la carpeta donde se encuentra el script de resemble:

cd /ghost-semana8/pruebas-vrt/resemble-cypress/

El script de generación está hecho en node, así que si no se han instalado las dependencias, se deben instalar con

npm install resemblejs

El script de generación del reporte NO realiza la prueba, solo la comparación de resultados y la generación del archivo de reporte, por lo que no se necesitan dependencias adicionales.

para ejecutar el reporte, se debe ejecutar con el comando:

node index.js

El reporte consolida las imágenes en la carpeta

resemble-cypress/results/{fecha}/

{fecha} indica la fecha de ejecución de la prueba en formato ISO, dentro se encuentra un archivo index.html que contiene una tabla con todas las pruebas ejecutadas y 3 columnas, en la primera está el screenshot en la versión 3.42.0, la segunda columna el screenshot del mismo paso en la versión 4.47.1 y en la tercera columna presenta la comparación realizada con resemble. Se puede dar clic en cada imágen para ampliarla si es necesario.

Como se indicó, el archivo index.html contiene el reporte unificado de TODAS LAS PRUEBAS EJECUTADAS en una misma tabla, separando con headers cada escenario y un paso por cada fila.

En la entrega se suben 2 reportes ya generados, así:

results/2022-05-16T01.00.39.627Z/index.html Contiene una ejecución completa de todos los escenarios de prueba con Cypress (para verificar el funcionamiento completo) results/2022-05-16T01.08.38.201Z/index.html Contiene la comparación solo con los 10 escenarios de prueba elegidos para la semana (Entrega)

El reporte ordena alfabéticamente los escenarios de prueba, como el número del escenario no tiene relleno de ceros, se puede presentar en un orden no numérico.

(Nota, la hora del servidor de ejecución no está configurada con el TimeZone de Colombia, por lo que la hora real de ejecución es en la noche del Domingo)

Se cargaron en Jira los Issues detectados en la comparación en la siguiente URL (Los permisos de acceso se concedieron la primera semana del curso con el usuario pruebas_miso@outlook.com clave PruebasMiso)

https://oalvareze.atlassian.net/jira/software/c/projects/PAG/issues

Ejecución de la comparación de las pruebas de kraken con resemble
Para el proceso de comparación de las pruebas con Kraken se deben realizar los mismos pasos que se expresaron anteriormente para el caso de resemble con cypress, solamente que en vez de hacer cd a resemble-cypress se hace al directorio resemble-kraken

Ejecutar pruebas Backstop.js 🚀
Para hacer uso de las herramientas de Backstop, debe descargar la CLI. Abra una terminal y ejecute el siguiente comando: npm install -g backstopjs
Ahora, en la misma terminal, ubíquese en el directorio donde ubicará el nuevo directorio del proyecto y luego Ejecute el comando backstop init
En la misma terminal donde ejecutó el anterior comando, ejecute el siguiente comando backstop approve (Esto guardará los resultados de la prueba más reciente como la referencia)
Ahora ejecute nuevamente el comando backstop test para comparar las imágenes que se obtienen en esta prueba con las que obtuvo previamente.
Cada vez que ejecute el comando backstop test, se modificará el archivo index.html que contiene el reporte, ubicado en el directorio html_report para mostrar las nuevas imágenes y sus diferencias. Este reporte muestra cada uno de los escenarios configurados para la prueba


## Video
El video de entrega de la semana 8 se puede encontrar en

https://youtu.be/9mMmjuUWjf4
