import { faker } from '@faker-js/faker';
import { utils } from '../plugins/utils_inicio_sesion';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const url = Cypress.env('url_base');

describe('Escenario de prueba 116', function () {
    before(function () {
    })
    beforeEach(function(){
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    });
    it('Datos dinámicos pseudo aleatorios, Creación de un tag con color inválido', function () {
        let testData = {
            nombre: faker.random.alphaNumeric(192),
            slug: faker.lorem.word(),
            color: faker.random.alphaNumeric(5) + "Z", /// Se hace aleatorio los 5 primeros caracteres y se forza el último a Z para garantizar que sea inválido
            descripcion: faker.lorem.paragraph(1),
            nombreModificado: faker.name.firstName(),
        }
        cy.log(testData);
        utils.autenticar(user.email, user.password);
        // Crear tag
        utils.crearTagNuevo(testData.nombre,testData.slug,testData.color,testData.descripcion)
        // Verificar que el tag no pueda ser creado 
        cy.get('div.form-group.error').should("exist")
    	cy.wait(1000);    
    })
})