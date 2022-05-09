Feature: Administrar Miembros

@user1 @web
Scenario: Loguearse, crear nuevo miembro, ir al listado, modificarlo y ver que quede modificado en el listado
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 2 seconds
  When Inicio sesión con usuario "<USERNAME1>" y clave "<PASSWORD1>"
    And I wait for 2 seconds
    And Voy a la opción de administrar miembros
    And I wait for 1 seconds
    And Agrego un miembro con el nombre "Prueba Miembro" y el correo "prueba_miembro@test.com"
    And I wait for 1 seconds
    And Voy a la opción de administrar miembros
    And I wait for 3 seconds
  Then Verifico si el miembro con el correo "prueba_miembro@test.com" existe

