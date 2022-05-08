import { faker } from '@faker-js/faker';

const user = {
    email: "ghost-author@example.com",
    password: "Colombia1234*",
};

const id = faker.datatype.uuid();
const url = Cypress.env('url_base');

describe('Escenario de prueba 10', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    })
    it('Loguearse, crear tag', function () {
        // Login
        cy.get('input[name="identification"]').type(user.email)
        cy.get('input[name="password"]').type(user.password)
        cy.get('button[type="submit"]').click()
        cy.wait(1000)

        // Crear página
        cy.get('li').contains("Tags").first().click()
        cy.get('a').contains("New tag").click()
        cy.get('#tag-name').type(`Tag - ${id}`)
        cy.get('#tag-description').type(faker.lorem.paragraph())
        cy.get('button').contains("Save").click()

        // Verificar que el tag se creó
        cy.get('li').contains("Tags").first().click()
        cy.get('li[class="gh-list-row gh-tags-list-item ember-view"]').contains(`Tag - ${id}`).should("exist")
    })
})


