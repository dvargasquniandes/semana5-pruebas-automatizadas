Feature: Configuracion de Diseño

@user1 @web
Scenario: Loguearse, entrar a configuraciones en la seccion Design, entrar a Site-wide, cambiar el color del boton headeer subscribe a #632f8e, darle guardar, ir a view site y verificar el color del boton superior Subscribe
  Given I navigate to page "<LOGIN>"
  And I wait for 2 seconds
  When Inicio sesión con usuario "<USERNAME1>" y clave "<PASSWORD1>"
  And I wait for 2 seconds