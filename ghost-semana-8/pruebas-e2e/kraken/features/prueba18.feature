Feature: Configuracion de Diseño

@user1 @web
Scenario: Loguearse, entrar a configuraciones en la seccion Design, entrar a Homepage, cambiar el Publication cover style a None, darle guardar, ir a view site y verificar que el Homepage no tenga cover styler
  Given I navigate to page "<LOGIN>"
  And I wait for 2 seconds
  When Inicio sesión con usuario "<USERNAME1>" y clave "<PASSWORD1>"
  And I wait for 2 seconds