Feature: Escenario pagina sin publicar

@user1 @web
Scenario: Loguearse, crear pagina, no guardar, ir a pagina creada y revisar que la pagina no esta publicada V4
    Given I navigate to page "<LOGIN>"
    And I wait for 1 seconds
    When I login the application using "<USERNAME1>" as user, and password "<PASSWORD1>"
    And I wait for 2 seconds
    And I go to create a new page
    And I wait for 1 seconds
    And I create a new page with title "Page in draft" and content "Page in draft content" wihtout saving
    And I wait for 2 seconds
    And I go to the preview page
    And I wait for 1 seconds
Then I evaluate the title of the post "404"

@user2 @web
Scenario: Loguearse, crear pagina, no guardar, ir a pagina creada y revisar que la pagina no esta publicada V3
    Given I navigate to page "<LOGINV3>"
    And I wait for 1 seconds
    When I login the application using "<USERNAME1>" as user, and password "<PASSWORD1>"
    And I wait for 2 seconds
    And I go to create a new page
    And I wait for 1 seconds
    And I create a new page with title "Page in draft" and content "Page in draft content" wihtout saving V3
    And I wait for 2 seconds
    And I go to the preview page
    And I wait for 1 seconds
Then I evaluate the title of the post "404"