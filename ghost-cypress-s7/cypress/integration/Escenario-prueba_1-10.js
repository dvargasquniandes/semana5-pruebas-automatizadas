import { utils } from '../plugins/utils_inicio_sesion';
import { faker } from '@faker-js/faker';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const id = faker.datatype.uuid();
const url = Cypress.env('url_base');
const ghostVersion = Cypress.env('ghost_version');

describe('Escenario de prueba 1 al 10 de los post', function () {
    beforeEach(function () {
        cy.fixture('crear_post.json').then((TestData) =>
        {
            this.datapositive = TestData.positivo.filter(element => {
                return element !== undefined || element !== null;
            });
            this.datanegative = TestData.negativo.filter(element => {
                return element !== undefined || element !== null;
            });
        })
    })
    
    
    it('Set a-priori, post function, enfoque negativo', function () {
        this.datanegative.forEach((testData) => {
            if(testData.activo){
                cy.clearCookies();
                cy.visit(`${url}/ghost/`);
                utils.autenticar(user.email, user.password)
                utils.crearPostBad(testData.titulo, testData.contenido)
                utils.publicarPost()
                cy.contains(testData.resultado_esperado)
            } else{
                cy.contains('Post')
            }
        })
    })

    it('Set a-priori, post function, enfoque positivo', function () {
        this.datapositive.forEach((testData) => {
            if(testData.activo){
                cy.clearCookies();
                cy.visit(`${url}/ghost/`);
                utils.autenticar(user.email, user.password)
                utils.crearPost(testData.titulo, testData.contenido)
                utils.publicarPost()
                cy.contains(testData.resultado_esperado)
            } else{
                cy.contains('Post')
            }
        })
    })

})