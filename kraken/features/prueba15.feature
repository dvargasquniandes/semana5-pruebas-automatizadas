Feature: Administración de Code Injection

@user1 @web
Scenario: Loguearse, Modificar el header en code injection y verificar si aparece en la página
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 2 seconds
  When Inicio sesión con usuario "<USERNAME1>" y clave "<PASSWORD1>"
    And I wait for 2 seconds
And Voy a la opción de administrar configuración
    And I wait for 1 seconds
And Voy a la opción de administrar code injection
    And I wait for 1 seconds
    And Agrego un tag de rastreo en el header con la clase "code-injection-header" y otro en el footer con la clase "code-injection-footer"
    And I wait for 1 seconds
    And I navigate to page "http://localhost:2368"
    And I wait for 1 seconds
  Then Verifico si el el tag de rastreo en el header con la clase "code-injection-header" y otro en el footer con la clase "code-injection-footer" existen

