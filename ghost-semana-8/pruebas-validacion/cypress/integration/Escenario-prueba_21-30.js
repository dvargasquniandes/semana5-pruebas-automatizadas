import { utils } from '../plugins/utils_inicio_sesion';
import { faker } from '@faker-js/faker';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const url = Cypress.env('url_base');
const ghostVersion = Cypress.env('ghost_version');

describe('Escenario de prueba Faker', function () {


    it('Loguearse, crear post, salir del admin, y revisar que esté el post', function () {
        for(var val in Array.from(Array(10).keys())) {
            cy.clearCookies();
            cy.visit(`${url}/ghost/`);
            // Login
            utils.autenticar(user.email, user.password)

            const id = faker.datatype.uuid();

            const title = faker.lorem.lines(5);

            const content = faker.lorem.lines(10);

            // Crear post
            utils.crearPost(title, content)
            utils.publicarPost()

            // Verificar post creado
            cy.get('button[title="Settings"]').click()
            cy.get('input[name="post-setting-slug"]')
                .invoke('val')
                .then(sometext => {
                    cy.visit(`${url}/${sometext}`)
                    cy.get("h1").should("have.text", title)
                });
        }
    })
    

})