import { faker } from '@faker-js/faker';

const user = {
    email: "ghost-author@example.com",
    password: "Colombia1234*",
};

const id = faker.datatype.uuid();
const url = Cypress.env('url_base');

describe('Escenario de prueba 5', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    })
    it('Loguearse, crear una página, salir del admin, y revisar que esté la página', function () {
        // Login
        cy.get('input[name="identification"]').type(user.email)
        cy.get('input[name="password"]').type(user.password)
        cy.get('button[type="submit"]').click()
        cy.wait(1000)

        // Crear página
        cy.get('li').contains("Pages").first().click()
        cy.get('a').contains("New page").click()
        cy.get('textarea[placeholder="Page Title"]').type(`Escenario de prueba 5 - ${id}`)
        cy.get('div[class="koenig-editor__editor __mobiledoc-editor __has-no-content"]').type("Este es un test para el escenario de prueba 5")
        cy.get('div[class="gh-publishmenu ember-view"]').click()
        cy.get('button[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]').click()
        cy.wait(1000)

        // Verificar página creada
        cy.get('button[class="post-settings"]').click()
        cy.get('input[name="post-setting-slug"]')
            .invoke('val')
            .then(sometext => {
                cy.visit(`${url}/${sometext}`)
                cy.get(".post-full-title").should("have.text", `Escenario de prueba 5 - ${id}`)
            });
    })
})


