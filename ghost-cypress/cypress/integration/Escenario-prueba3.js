import { faker } from '@faker-js/faker';

const user = {
    email: "ghost-author@example.com",
    password: "Colombia1234*",
};

const id = faker.datatype.uuid();
const url = Cypress.env('url_base');

describe('Escenario de prueba 3', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    })
    it('Loguearse, crear post sin publicarlo, salir del admin, y revisar que no está publicado el post', function () {
        // Login
        cy.get('input[name="identification"]').type(user.email)
        cy.get('input[name="password"]').type(user.password)
        cy.get('button[type="submit"]').click()
        cy.wait(1000)

        // Crear post sin publicar
        cy.get('a[title="New post"]').click()
        cy.get('textarea[placeholder="Post Title"]').type(`Escenario de prueba 3 - ${id}`)
        cy.get('div[class="koenig-editor__editor __mobiledoc-editor __has-no-content"]').type("Este es un test para el escenario de prueba 3")
        cy.wait(1000)

        // Verificar que el post no está publicado
        cy.get('button[class="post-settings"]').click()
        cy.get('input[name="post-setting-slug"]')
            .invoke('val')
            .then(sometext => {
                cy.request({ url: `${url}/${sometext}`, failOnStatusCode: false }).its('status').should('equal', 404)
            });

        // Verificar que está en el listado de posts
        cy.visit(`${url}/ghost/#/posts`)
        cy.get('li[class="gh-list-row gh-posts-list-item"]').contains(`Escenario de prueba 3 - ${id}`).click()
        cy.get('textarea[placeholder="Post Title"]').should("have.value", `Escenario de prueba 3 - ${id}`)
    })
})


