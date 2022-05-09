# Integrantes
1. David Esteban Vargas Quevedo - d.vargasq@uniandes.edu.co
2. Oscar Fernando Alvarez - o.alvareze@uniandes.edu.co

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

# Escenarios de prueba
1. Loguearse, crear post, salir del admin, y revisar que esté el post 
2. Loguearse, editar post, salir del admin y revisar que esté editado 
3. Loguearse, crear post sin publicarlo, salir del admin, y revisar que no está publicado el post 
4. Loguearse, crear post, eliminar post, salir del admin, y revisar que no esté el post 
5. Loguearse, crear una página, salir del admin, y revisar que esté la página 
6. Loguearse, editar una página, salir del admin y revisar que esté editada 
7. Loguearse, crear una página sin publicarla, salir del admin, y revisar que no está publicada
8. Loguearse, crear una página, eliminarla, salir del admin, y revisar que no esté la página 
9. Loguearse, crear nuevo usuario, salir y loguearse con el nuevo usuario 
10. Loguearse, crear tag, entrar a un post y relacionar el tag con el post 
11. Loguearse, crear tag, modificarlo y ver si la modificación aparece en el listado
12. Loguearse, crear tag, borrarlo y verificar que no aparezca en el listado
13. Loguearse, crear nuevo miembro, ir al listado, modificarlo y ver que quede modificado en el listado
14. Loguearse, crear nuevo menu de navegación primaria, cerrar sesión, ir al home y verificar si el menu existe
15. Loguearse, Modificar el header en code injection y verificar si aparece en la página

#### Ejecutar Ghost 🚀
1. Tener instalado Node 12.22.1
2. Entrar al directorio ghost/current
3. Ejecutar el comando npm install
4. Pararse en la carpeta ghost (salir un nivel de directorio)
5. Ejecutar el comando ghost start
6. Al levantar la app le debe salir el puerto en el cual se levantó, "http://localhost:2368", si no coincide, cambie el puerto en el archivo cypress.env.json para que las pruebas de cypress se ejecuten correctamente

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
 

