Feature: Escenario Eliminar Post

@user1 @web
Scenario: Loguearse, crear post, editar post , capturar pagina, eliminar pagina, ir a pagina creada y revisar que el post no esta publicado
    Given I navigate to page "<LOGIN>"
    And I wait for 1 seconds
    When I login the application using "<USERNAME1>" as user, and password "<PASSWORD1>"
    And I wait for 2 seconds
    And I go to create a new post
    And I wait for 1 seconds
    And I create a new post with title "Titulo de prueba" and content "Contenido de prueba"
    And I wait for 1 seconds
    And I delete the page and validate page
Then I evaluate the title of the post "404"