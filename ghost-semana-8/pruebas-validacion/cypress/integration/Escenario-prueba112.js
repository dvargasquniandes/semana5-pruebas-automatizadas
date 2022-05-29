import { faker } from '@faker-js/faker';
import { utils } from '../plugins/utils_inicio_sesion';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const url = Cypress.env('url_base');

describe('Escenario de prueba 112', function () {
    before(function () {
    })
    beforeEach(function(){
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    });
    it('Datos dinámicos pseudo aleatorios, Creación de un tag válido', function () {
        let testData = {
            nombre: faker.lorem.sentence(3),
            slug: faker.lorem.word(),
            color: faker.internet.color().substring(1),
            descripcion: faker.lorem.paragraph(1),
            nombreModificado: faker.name.firstName(),
        }
        cy.log(testData);
        utils.autenticar(user.email, user.password);
        // Crear tag
        utils.crearTagNuevo(testData.nombre,testData.slug,testData.color,testData.descripcion)
        // Modificar tag
        utils.modificarTag(testData.slug,testData.nombreModificado)
        // Verificar tag creado
        cy.get('a[href="#/tags/"]:first').click();
        cy.wait(1000);
        cy.get('a[href="#/tags/' + testData.slug + '/"]:first').click()
    	cy.wait(1000);
        cy.get('#tag-name').should("have.value", testData.nombreModificado)
    	cy.wait(1000);    })
})