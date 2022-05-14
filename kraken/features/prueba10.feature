Feature: Escenario Crear nuevo tag sin asociar un post

@user1 @web
Scenario: Loguearse, crear tag, ir apagina del tag no carga por no tener un post asociado
    Given I navigate to page "<LOGIN>"
    And I wait for 1 seconds
    When I login the application using "<USERNAME1>" as user, and password "<PASSWORD1>"
    And I wait for 2 seconds
    And I go to create a new tag
    And I wait for 2 seconds
    And I create a new tag with name "Noticias"
    And I wait for 1 seconds
    And I go to the preview tag page
Then I evaluate the title of the post "404"