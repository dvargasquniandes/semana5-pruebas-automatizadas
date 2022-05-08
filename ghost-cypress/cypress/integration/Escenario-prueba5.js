import { faker } from '@faker-js/faker';
import { utils } from '../plugins/utils';

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
        utils.autenticar(user)

        // Crear página
        utils.crearPagina(`Escenario de prueba 5 - ${id}`, "Este es un test para el escenario de prueba 5");
        utils.publicarPagina()

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


