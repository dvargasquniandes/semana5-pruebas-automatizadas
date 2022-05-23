# Integrantes
1. David Esteban Vargas Quevedo - d.vargasq@uniandes.edu.co
2. Oscar Fernando Alvarez - o.alvareze@uniandes.edu.co
3. Javier Orlando Estupiñan Olascuaga - j.estupinano@uniandes.edu.co
4. Andres Martin Cantor Urrego - am.cantor@uniandes.edu.co

# Funcionalidades bajo pruebas
1. Hacer login
2. Crear un post
3. Editar un post
4. Eliminar un post
5. Crear nuevo usuario
6. Crear tag
7. Editar tag
8. Eliminar tag
9. Crear un miembro
10. Crear un elemento de navegación
11. Modificar header y footer de code injection
12. Modificar diseño del Brand
13. Modificar diseño de todo el sitio
14. Modificar diseño de la pagina principal
15. Modificar diseño del Post

# Escenarios de prueba
1. Loguearse, crear post, salir del admin, y revisar que esté el post 
2. Loguearse, editar post, salir del admin y revisar que esté editado 
3. Loguearse, crear post sin publicarlo, salir del admin, y revisar que no está publicado el post 
4. Loguearse, crear post, eliminar post, salir del admin, y revisar que no esté el post 
5. Loguearse, crear una página, salir del admin, y revisar que esté la página 
6. Loguearse, editar una página, salir del admin y revisar que esté editada 
7. Loguearse, crear una página sin publicarla, salir del admin, y revisar que no está publicada
8. Loguearse, crear una página, eliminarla, salir del admin, y revisar que no esté la página 
9. Loguearse, editar un usuario
10. Loguearse, crear tag, entrar a un post y relacionar el tag con el post 
11. Loguearse, crear tag, modificarlo y ver si la modificación aparece en el listado
12. Loguearse, crear tag, borrarlo y verificar que no aparezca en el listado
13. Loguearse, crear nuevo miembro, ir al listado, modificarlo y ver que quede modificado en el listado
14. Loguearse, crear nuevo menu de navegación primaria, cerrar sesión, ir al home y verificar si el menu existe
15. Loguearse, Modificar el header en code injection y verificar si aparece en la página
16. Loguearse, entrar a configuraciones en la seccion Design, entrar a Brand, cambiar el color del boton inferior subscribe a #1afff0, darle guardar, ir a view site y verificar el color del boton inferior Subscribe
17. Loguearse, entrar a configuraciones en la seccion Design, entrar a Site-wide, cambiar el color scheme a Dark, darle guardar, ir a view site y verificar que la pagina tiene el color scheme dark
18. Loguearse, entrar a configuraciones en la seccion Design, entrar a Homepage, cambiar el Feed Layout a List, darle guardar, ir a view site y verificar que el Homepage tenga el layout en Lista
19. Loguearse, entrar a configuraciones en la seccion Design, entrar a Brand, cambiar el site description, darle guardar, ir a view site y verificar la nueva descripcion del sitio
20. Loguearse, entrar a configuraciones en la seccion Design, entrar a Post, cambiar el Email signup test a "Prueba cambio", darle guardar, ir a view site dar clic sobre la imagen del post de coming soon y verificar que el post tenga en su email text "Prueba Cambio"

# Escenarios de prueba para regresión visual
1. Loguearse, crear post, salir del admin, y revisar que esté el post 
2. Loguearse, editar post, salir del admin y revisar que esté editado 
3. Loguearse, crear post sin publicarlo, salir del admin, y revisar que no está publicado el post 
4. Loguearse, crear post, eliminar post, salir del admin, y revisar que no esté el post 
5. Loguearse, crear una página, salir del admin, y revisar que esté la página 
6. Loguearse, editar una página, salir del admin y revisar que esté editada 
7. Loguearse, crear una página sin publicarla, salir del admin, y revisar que no está publicada
8. Loguearse, crear una página, eliminarla, salir del admin, y revisar que no esté la página 
9. Loguearse, crear tag, entrar a un post y relacionar el tag con el post 
10. Loguearse, crear tag, modificarlo y ver si la modificación aparece en el listado

#### Ejecutar pruebas Cypress 🚀
1. Entrar al directorio ghost-cypress
2. Ejecutar el comando npm install
3. Ejecutar el comando npx cypress open
4. Se abrirá una ventana con las pruebas a testear
5. Clickear en la opción run all tests

#### Ejecutar pruebas kraken 🚀
1. Instalar kraken, siguiendo las instrucciones en https://thesoftwaredesignlab.github.io/AutTesingCodelabs/w5/krakenWeb/index.html
2. si se presentan problemas con las librerías globales, es mejor instalar kraken en el directorio local
3. Si se requiere, instalar los paquetes appium (node install -g appium), adb (sudo apt install adb), cucumber (npm install -S cucumber), y chromium (sudo apt install chromium-browser), Tenga en cuenta que estas recomendaciones son para una instalación fresca de Ubuntu 22.04LTS
4. Sobre la raíz del proyecto de kraken, correr kraken con el comando
kraken-node run --properties=./properties.json

Si la instalación se realizó localmente, usar 

/node_modules/kraken-node/bin/kraken-node run --properties=./properties.json
5. Dependiendo de la instalación local de ghost, deberá cambiar el usaurio y contraseña en el archivo properties.json, se asume siempre que el despliegue de ghost es local por el puerto estándar, por lo que no se tiene una variable de configuración para la url ya que los tiempos de espera estan ligados a ejecución en localhost

El resultado de la ejecución de las pruebas de Kraken está en /kraken/reports
 

# Semana 6

Para las actividades de la semana 6 se implementaron 2 instancias de Ghost en AWS, así:

Ghost 4.47.1 en http://ec2-54-145-214-45.compute-1.amazonaws.com:2369
Ghost 3.42.0 en http://ec2-52-200-112-117.compute-1.amazonaws.com:2369

## Descripción de las funcionalidades de GHOST que se incluyen en las pruebas de esta semana.

El siguiente es el listado de los 10 escenarios de prueba elegidos para las pruebas de regresión visual, se usan los mismos números de escenarios de la semana anterior para mantener el orden

#### En Kraken

1. Loguearse, crear post, salir del admin, y revisar que esté el post 
2. Loguearse, editar post, salir del admin y revisar que esté editado 
3. Loguearse, crear post sin publicarlo, salir del admin, y revisar que no está publicado el post 
4. Loguearse, crear post, eliminar post, salir del admin, y revisar que no esté el post 
10. Loguearse, crear tag, entrar al listado de tags y verificar que este presente 

#### En Cypress

5. Loguearse, crear una página, salir del admin, y revisar que esté la página 
6. Loguearse, editar una página, salir del admin y revisar que esté editada 
7. Loguearse, crear una página sin publicarla, salir del admin, y revisar que no está publicada
8. Loguearse, crear una página, eliminarla, salir del admin, y revisar que no esté la página 
12. Loguearse, crear tag, borrarlo y verificar que no aparezca en el listado

### Notas de ejecución de las pruebas en la semana 6 en Cypress

- Para las pruebas de Cypress, se debe primero correr en la versión actual (4.47.1) asegurandose que el archivo cypress.env.json contenga las siguientes entradas (se recomienda colocar a las entradas de la versión 3.42.0 un nombre diferente ya que json no permite comentarios):

    - "url_base": "http://ec2-54-145-214-45.compute-1.amazonaws.com:2369",
    - "ghost_version": "ghost-4.47.1",

- Luego de ejecutar las 5 pruebas de manera manual (una a una) en cypress contra Ghost 4.47.1, se debe cambiar las variables de entorno para que apunte a la versión 3.42.0, asegurandose que el archivo cypress.env.json  contenga las entradas:

    - "url_base": "http://ec2-52-200-112-117.compute-1.amazonaws.com:2369",
    - "ghost_version": "ghost-3.42.0",

- Los screenshots quedan en ghost-cypress/cypress/screenshots en una carpeta para cada escenario de prueba (Ej. ghost-cypress/cypress/screenshots/Escenario-prueba4.js), adentro se encuentran dos carpetas marcadas con la versión correspondiente a la variable de entorno "ghost_version" de cypress, haciendo que la ejecución de la prueba en cada versión tenga una carpeta según cada versión. Las pruebas ejecutadas son idénticas en las dos versiones, se intentó unificar los pasos y los selectores. La generación de las imágenes de cada paso se hace con un incremental, haciendo que en cada carpeta de versión de cada escenario se tenga un archivo llamado imagen_X.png, siendo X un incremental a partir de cero, ésto hace que las imágenes estén alineadas siempre que la prueba sea exitosa en ambas versiones.

#### Ejecución de la comparación de las pruebas de cypress con resemble

Para ejecutar el programa en resemble, se deben haber ejecutado las pruebas en las 2 versiones de ghost bajo prueba, se debe ingresar a la carpeta donde se encuentra el script de resemble:

cd resemble-cypress/

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

results/2022-05-16T01.00.39.627Z/index.html  Contiene una ejecución completa de todos los escenarios de prueba con Cypress (para verificar el funcionamiento completo)
results/2022-05-16T01.08.38.201Z/index.html  Contiene la comparación solo con los 10 escenarios de prueba elegidos para la semana (Entrega)

El reporte ordena alfabéticamente los escenarios de prueba, como el número del escenario no tiene relleno de ceros, se puede presentar en un orden no numérico.

(Nota, la hora del servidor de ejecución no está configurada con el TimeZone de Colombia, por lo que la hora real de ejecución es en la noche del Domingo)

Se cargaron en Jira los Issues detectados en la comparación en la siguiente URL (Los permisos de acceso se concedieron la primera semana del curso con el usuario pruebas_miso@outlook.com clave PruebasMiso)

https://oalvareze.atlassian.net/jira/software/c/projects/PAG/issues

#### Ejecución de la comparación de las pruebas de kraken con resemble

Para el proceso de comparación de las pruebas con Kraken se deben realizar los mismos pasos que se expresaron anteriormente para el caso de resemble con cypress, solamente que en vez de hacer cd a resemble-cypress se hace al directorio resemble-kraken

#### Ejecutar pruebas Backstop.js 🚀
1. Para hacer uso de las herramientas de Backstop, debe descargar la CLI. Abra una terminal y ejecute el siguiente comando: npm install -g backstopjs
2. Ahora, en la misma terminal, ubíquese en el directorio donde ubicará el nuevo directorio del proyecto y luego Ejecute el comando backstop init
3. En la misma terminal donde ejecutó el anterior comando, ejecute el siguiente comando backstop approve (Esto guardará los resultados de la prueba más reciente como la referencia)
4. Ahora ejecute nuevamente el comando backstop test para comparar las imágenes que se obtienen en esta prueba con las que obtuvo previamente.
5. Cada vez que ejecute el comando backstop test, se modificará el archivo index.html que contiene el reporte, ubicado en el directorio html_report para mostrar las nuevas imágenes y sus diferencias. Este reporte muestra cada uno de los escenarios configurados para la prueba

# Semana 7

### Lote de pruebas del 31 al 60

#### Estrategias de datos
31-40 pool de datos a-priori: Se generó un conjunto de datos de 10 registros con mockaroo y se modificó manualmente para tener 10 escenarios de pruebas diferentes, se guardó el archivo en [/ghost-cypress-s7/cypress/fixtures/crear_pagina.json](/ghost-cypress-s7/cypress/fixtures/crear_pagina.json), para poder ejecutar los 10 escenarios se hizo un loop en el archivo [](/ghost-cypress-s7/cypress/integration/Escenario-prueba31-40.js) y éste realiza la creación de las páginas

41-50 pool de datos (pseudo) aleatorio dinámico: Se realiza integración con mockaroo y se descargan los datos por medio de API

51-60 escenario aleatorio con datos al vuelo usando fakerJS


### Lote de pruebas del 91 al 120

Todas las pruebas de la semana 7 se encuentran en [/ghost-cypress-s7](/ghost-cypress-s7/)

#### Estrategias de datos

91-100 pool de datos a-priori: (Pruebas negativas) Se generó un conjunto de datos de 10 registros con mockaroo (email y password) y se modificó manualmente para tener 10 escenarios de pruebas diferentes, incluyendo el texto del resultado esperado para validar que cada escenario genere el error correspondiente, se guardó el archivo en [/ghost-cypress-s7/cypress/fixtures/inicio_sesion_negativo.json](/ghost-cypress-s7/cypress/fixtures/inicio_sesion_negativo.json), para poder ejecutar los 10 escenarios se hizo un loop en el archivo [](/ghost-cypress-s7/cypress/integration/Escenario-prueba91-100.js) y éste realiza la validación según el resultado esperado de cada prueba (por lo mismo, no se generan de manera independiente los scripts de prueba del 92 al 100)

101-110 pool de datos (pseudo) aleatorio dinámico: (Pruebas negativas y positivas) Se realiza integración con mockaroo y se descargan los datos por medio de API (en mokaroo se generaron 6 esquemas, cada uno con su API, según las necesidades de las diferentes pruebas, algunos se re-usaron)

111-120 escenario aleatorio con datos al vuelo: (Pruebas negativas y positivas) Mismos escenarios de prueba del conjunto 101-110, pero generados al vuelo con kakerjs


El detalle del informe se encuentra en el archivo:

[Informe Semana 7.xlsx](Informe%20Semana%207.xlsx)

#### Ejecutar pruebas en cypress 🚀

Luego de descargar los archivos, se debe situar sobre /ghost-cypress-s7 y ejecutar el comando 
```
cypress open
```

Cuando abra cypress, si no aparece seleccionado el proyecto, debe buscarlo en la carpeta /ghost-cypress-s7

Se recomienda ejecutar las pruebas una a una ya que hay algunas que fallan por errores de ghost (es decir, la prueba está bien estructurada y falla cypress, se deben mantener para volver a correrlas cuando el error en cypress sea corregido, de hecho ésto generó issues registrados en Jira)

#### Issues reportados en Jira

El link de acceso a Jira es https://oalvareze.atlassian.net/jira/software/c/projects/PAG/issues

Usuario: pruebas_miso@outlook.com 
clave: PruebasMiso

