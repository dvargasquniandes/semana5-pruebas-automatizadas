import { faker } from '@faker-js/faker';
import { utils } from '../plugins/utils_inicio_sesion';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const url = Cypress.env('url_base');

describe('Escenario de prueba 115', function () {
    before(function () {
    })
    beforeEach(function(){
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    });
    it('Datos dinámicos pseudo aleatorios, Creación de un tag con nombre muy largo y luego corregirlo', function () {
        let testData = {
            nombre: faker.random.alphaNumeric(192),
            slug: faker.lorem.word(),
            color: faker.internet.color().substring(1),
            descripcion: faker.lorem.paragraph(1),
            nombreModificado: faker.name.firstName(),
        }
        cy.log(testData);
        utils.autenticar(user.email, user.password);
        // Crear tag
        utils.crearTagNuevo(testData.nombre,testData.slug,testData.color,testData.descripcion)
        // Verificar que el tag no pueda ser creado 
        cy.get('span.error>p.response').contains("Tag names cannot be longer than 191 characters.").should("exist")
        utils.corregirNombreTag(testData.nombreModificado)
        /// Se valida que el mensaje de error no aparezca luego de la corrección
        cy.get('span.error>p.response').contains("Tag names cannot be longer than 191 characters.").should("not.exist")

    	cy.wait(1000);    
    })
})