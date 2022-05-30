Feature: Administración de TAGs

@user1 @web
Scenario: Loguearse, crear tag, borrarlo y verificar que no aparezca en el listado
  Given I navigate to page "<LOGIN>"
  And I wait for 2 seconds
  When Inicio sesión con usuario "<USERNAME1>" y clave "<PASSWORD1>"
    And I wait for 2 seconds
And Voy a la opción de administrar tags
    And I wait for 1 seconds
    And Agrego un tag con el nombre "Prueba Eliminar", el slug "prueba2", el color "336699" y la descripción "Prueba de eliminación"
    And I wait for 1 seconds
And Voy a la opción de administrar tags
    And I wait for 1 seconds
    And Elimino el tag con el slug "prueba2"
    And I wait for 1 seconds
And Voy a la opción de administrar tags
    And I wait for 1 seconds
  Then Verifico si el tag con el slug "prueba2" no existe
