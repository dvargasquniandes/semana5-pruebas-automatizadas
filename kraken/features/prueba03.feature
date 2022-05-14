Feature: Escenario Post sin publicarlo

@user1 @web
Scenario: Loguearse, crear post, editar post , no guardar, ir a pagina creada y revisar que el post no esta publicado
    Given I navigate to page "<LOGIN>"
    And I wait for 1 seconds
    When I login the application using "<USERNAME1>" as user, and password "<PASSWORD1>"
    And I wait for 2 seconds
    And I go to create a new post
    And I wait for 1 seconds
    And I create a new post with title "Post in draft" and content "Post in draft content" wihtout saving
    And I wait for 2 seconds
    And I go to the preview page
    And I wait for 1 seconds
Then I evaluate the title of the post "404"