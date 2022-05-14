import { faker } from '@faker-js/faker';
import { utils } from '../plugins/utils';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const id = faker.datatype.uuid();
const url = Cypress.env('url_base');

describe('Escenario de prueba 1', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    })
    it('Loguearse, crear post, salir del admin, y revisar que esté el post', function () {
        // Login
        utils.autenticar(user)

        // Crear post
        utils.crearPost(`Escenario de prueba 1 - ${id}`, "Este es un test para el escenario de prueba 1")
        utils.publicarPost()

        // Verificar post creado
        cy.get('button[class="post-settings"]').click()
        cy.get('input[name="post-setting-slug"]')
            .invoke('val')
            .then(sometext => {
                cy.visit(`${url}/${sometext}`)
                cy.get(".post-full-title").should("have.text", `Escenario de prueba 1 - ${id}`)
            });
    })
})


