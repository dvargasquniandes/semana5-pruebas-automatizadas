import { faker } from '@faker-js/faker';

const user = {
    email: "ghost-author@example.com",
    password: "Colombia1234*",
};

const id = faker.datatype.uuid();
const url = Cypress.env('url_base');

describe('Escenario de prueba 2', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    })
    it('Loguearse, editar post, salir del admin y revisar que esté editado', function () {
        // Login
        cy.get('input[name="identification"]').type(user.email)
        cy.get('input[name="password"]').type(user.password)
        cy.get('button[type="submit"]').click()
        cy.wait(1000)

        // Editar post
        cy.get('li').contains("Posts").first().click()
        cy.get('li[class="gh-list-row gh-posts-list-item"]').first().click()
        cy.get('textarea[placeholder="Post Title"]').clear().type(`Post editado - ${id}`)
        cy.get('div[class="gh-publishmenu ember-view"]').click()
        cy.get('button[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]').click()
        cy.wait(1000)

        // Verificar post editado
        cy.get('button[class="post-settings"]').click()
        cy.get('input[name="post-setting-slug"]')
            .invoke('val')
            .then(sometext => {
                cy.visit(`${url}/${sometext}`)
                cy.get(".post-full-title").should("have.text", `Post editado - ${id}`)
            });
    })
})


