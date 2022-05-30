Feature: Configuracion de Diseño

@user1 @web
Scenario: Loguearse, entrar a configuraciones en la seccion Design, entrar a Brand, cambiar el color del boton inferior subscribe a #cdff1a, darle guardar, ir a view site y verificar el color del boton inferior Subscribe
  Given I navigate to page "<LOGIN>"
  And I wait for 2 seconds
  When Inicio sesión con usuario "<USERNAME1>" y clave "<PASSWORD1>"
    And I wait for 2 seconds