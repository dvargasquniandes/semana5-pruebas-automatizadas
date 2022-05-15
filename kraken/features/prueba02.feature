Feature: Escenario Editar Post

@user1 @web
Scenario: Loguearse, crear post, editar post , ir a pagina creada y revisar que el post editado V4
    Given I navigate to page "<LOGIN>"
    And I wait for 1 seconds
    When I login the application using "<USERNAME1>" as user, and password "<PASSWORD1>"
    And I wait for 2 seconds
    And I go to create a new post
    And I wait for 1 seconds
    And I create a new post with title "Titulo de prueba" and content "Contenido de prueba"
    And I wait for 1 seconds
    And I edit post with title "Edited Title" and content "Content Edited"
    And I wait for 1 seconds
    And I go to the new page created
Then I evaluate the title of the post "Edited Title"

@user2 @web
Scenario: Loguearse, crear post, editar post , ir a pagina creada y revisar que el post editado V3
    Given I navigate to page "<LOGINV3>"
    And I wait for 1 seconds
    When I login the application using "<USERNAME1>" as user, and password "<PASSWORD1>"
    And I wait for 2 seconds
    And I go to create a new post
    And I wait for 1 seconds
    And I create a new post with title "Titulo de prueba" and content "Contenido de prueba" V3
    And I wait for 6 seconds
    And I edit a post with title "Edited Title" and content "Content Edited" V3
    And I wait for 1 seconds
    And I go to the new page created
Then I evaluate the title of the post "Edited Title"