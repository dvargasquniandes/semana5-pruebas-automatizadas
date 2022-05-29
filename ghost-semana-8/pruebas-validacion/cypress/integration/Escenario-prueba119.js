import { faker } from '@faker-js/faker';
import { utils } from '../plugins/utils_inicio_sesion';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const url = Cypress.env('url_base');

describe('Escenario de prueba 119', function () {
    before(function () {
    })
    beforeEach(function(){
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    });
    it('Datos dinámicos pseudo aleatorios, Creación de un tag repetido', function () {
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
    	cy.wait(1000);    
        utils.crearTagNuevo(testData.nombre,testData.slug,testData.color,testData.descripcion)
        // Verificar que el tag  pueda ser creado porque el sistema automáticamente corrige el slug
        cy.get('div.form-group.error').should("not.exist")
    	cy.wait(1000);    
    })
})