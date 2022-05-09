Feature: Administración de TAGs

@user1 @web
Scenario: Loguearse, crear tag, modificarlo y ver si la modificación aparece en el listado
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 2 seconds
  When Inicio sesión con usuario "<USERNAME1>" y clave "<PASSWORD1>"
    And I wait for 2 seconds
And Voy a la opción de administrar tags
    And I wait for 1 seconds
    And Agrego un tag con el nombre "Prueba1", el slug "prueba1", el color "336699" y la descripción "Prueba"
    And I wait for 1 seconds
And Voy a la opción de administrar tags
    And I wait for 1 seconds
    And Edito el tag con el slug "prueba1" y cambio el nombre a "Prueba1 Modificado"
    And I wait for 1 seconds
And Voy a la opción de administrar tags
  Then Verifico si el tag con el slug "prueba1" tiene el nombre modificado "Prueba1 Modificado"
