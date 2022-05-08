# Funcionalidades bajo pruebas
1. Hacer login
2. Crear un post
3. Editar un post
4. Eliminar un post
5. Crear nuevo usuario
6. Crear tag
7. Editar tag
8. Eliminar tag

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
11. Loguearse, editar tag, entrar a un post y relacionar el tag con el post 
12. Loguearse, eliminar tag, entrar a un post y ver que se eliminó 

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