import { utils } from '../plugins/utils_inicio_sesion';
import { faker } from '@faker-js/faker';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const id = faker.datatype.uuid();
const url = Cypress.env('url_base');
const ghostVersion = Cypress.env('ghost_version');

describe('Escenario de prueba 1', function () {
    before(function () {
        const respuestaMockaroo = cy.request("GET","https://api.mockaroo.com/api/53fdfd50?count=10&key=7324d5b0")
            .then((respuesta) =>{
                this.data = respuesta.body;
            });
    })
    
    it('Set pseudo-aleatorio por API, post function', function () {
        this.data.forEach((testUser) => {
            cy.clearCookies();
            cy.visit(`${url}/ghost/`);
            utils.autenticar(user.email, user.password)
            utils.crearPostBad(testUser.titulo, testUser.contenido)
            utils.publicarPost()
            cy.contains('failed: Title cannot be longer than 255 characters.')
        })
    })

})