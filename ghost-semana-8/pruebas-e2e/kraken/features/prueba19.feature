Feature: Configuracion de Diseño

@user1 @web
Scenario: Loguearse, entrar a configuraciones en la seccion Design, entrar a Post, cambiar el post image width a Small, darle guardar, ir a view site dar clic sobre la imagen del post de coming soon y verificar que el post image es small
  Given I navigate to page "<LOGIN>"
  And I wait for 2 seconds
  When Inicio sesión con usuario "<USERNAME1>" y clave "<PASSWORD1>"
  And I wait for 2 seconds