Feature: Escenario Crear una pagina

@user1 @web
Scenario: Loguearse, crear pagina, ir a pagina creada y revisar que esta publicado con el titulo
    Given I navigate to page "<LOGIN>"
    And I wait for 1 seconds
    When I login the application using "<USERNAME1>" as user, and password "<PASSWORD1>"
    And I wait for 2 seconds
    And I go to create a new page
    And I wait for 1 seconds
    And I create a new page with title "Titulo de prueba pagina" and content "Contenido de prueba"
    And I wait for 1 seconds
    And I go to the new page created
Then I evaluate the title of the post "Titulo de prueba pagina"