Feature: Escenario Eliminar Pagina

@user1 @web
Scenario: Loguearse, crear pagina, caturar url pagina, eliminar pagina, ir a pagina creada y revisar que lapagina no esta publicado V4
    Given I navigate to page "<LOGIN>"
    And I wait for 1 seconds
    When I login the application using "<USERNAME1>" as user, and password "<PASSWORD1>"
    And I wait for 2 seconds
    And I go to create a new page
    And I wait for 1 seconds
    And I create a new page with title "Titulo de prueba pagina" and content "Contenido de prueba"
    And I wait for 1 seconds
    And I delete the page and validate page
Then I evaluate the title of the post "404"

@user2 @web
Scenario: Loguearse, crear pagina, caturar url pagina, eliminar pagina, ir a pagina creada y revisar que lapagina no esta publicado V3
    Given I navigate to page "<LOGINV3>"
    And I wait for 1 seconds
    When I login the application using "<USERNAME1>" as user, and password "<PASSWORD1>"
    And I wait for 2 seconds
    And I go to create a new page
    And I wait for 1 seconds
    And I create a new page with title "Titulo de prueba pagina" and content "Contenido de prueba" V3
    And I wait for 1 seconds
    And I delete the page and validate page
Then I evaluate the title of the post "404"