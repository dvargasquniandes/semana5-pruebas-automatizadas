import { faker } from '@faker-js/faker';
import { utils } from '../plugins/utils';

const user = {
    email: "o.alvareze@uniandes.edu.co",
    password: "123123123123",
};

const id = faker.datatype.uuid();
const url = Cypress.env('url_base');

describe('Escenario de prueba 11', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    })
    it('Loguearse, crear tag, modificarlo y ver si la modificación aparece en el listado', function () {
        // Login
        utils.autenticar(user)

        // Crear tag
        utils.crearTagNuevo('Prueba Eliminar','prueba-eliminar','336699','prueba')

        // Modificar tag
        utils.eliminarTag('prueba-eliminar')

        // Verificar tag creado
	cy.get('a[href="#/tags/"]:first').click();
	cy.wait(1000);
        cy.get('a[href="#/tags/prueba-eliminar/"]').should("not.exist")
    })
})


