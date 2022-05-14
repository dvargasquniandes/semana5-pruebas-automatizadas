Feature: Administración de menús de navegación

@user1 @web
Scenario: Loguearse, crear nuevo menu de navegación primaria, cerrar sesión, ir al home y verificar si el menu existe
  Given I navigate to page "<LOGIN>"
  	And I wait for 2 seconds
  When Inicio sesión con usuario "<USERNAME1>" y clave "<PASSWORD1>"
    	And I wait for 2 seconds
	And Voy a la opción de administrar configuración
    	And I wait for 1 seconds
	And Voy a la opción de administrar navegación
    	And I wait for 1 seconds
    	And Agrego un item de navegación con el nombre "Prueba 1" a la url "http://pruebas.com/Prueba1"
    	And I wait for 1 seconds
    	And I navigate to page "<URL>"
    	And I wait for 1 seconds
  Then Verifico si el menu de navegación con la url "http://pruebas.com/Prueba1" existe


