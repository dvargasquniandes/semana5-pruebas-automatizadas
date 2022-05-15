Feature: Escenario Crear nuevo usuario(Escenario no posible en la version probada ya que envia un email y no es posible colocar un password)

@user1 @web
Scenario: Loguearse, crear usuario, salir del sistema, loguearse con el nuevo usuario V4
    Given I navigate to page "<LOGIN>"
    And I wait for 1 seconds
    When I login the application using "<USERNAME1>" as user, and password "<PASSWORD1>"
    And I wait for 2 seconds
    And I go to create a new member

@user2 @web
Scenario: Loguearse, crear usuario, salir del sistema, loguearse con el nuevo usuario V3 no soportada por version