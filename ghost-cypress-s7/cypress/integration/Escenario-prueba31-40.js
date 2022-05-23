import { faker } from '@faker-js/faker';
import { PagesUtils } from '../plugins/pages';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const url = Cypress.env('url_base');

describe('Escenario de prueba 31 a 40', function () {
    before(function () {
        cy.fixture('crear_pagina.json').then((TestData) => {
            this.data = TestData
        });
    })
    beforeEach(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
        PagesUtils.autenticar(user)
    })
    it('Crear una página con datos precargados', function () {
        this.data.forEach((data) => {
            cy.visit(`${url}/ghost/#/pages`);
            // Crear página
            PagesUtils.crearPagina(data.titulo, data.descripcion, data.excerpt);
            PagesUtils.publicarPagina()
            
            // Verificar página creada
            cy.get('button[title="Settings"]').click()
            cy.get('input[name="post-setting-slug"]')
            .invoke('val')
            .then(sometext => {
                cy.visit(`${url}/${sometext}`)
                if (data.titulo) cy.get("h1").should("have.text", data.titulo)
                if (data.descripcion) cy.get("p").should("have.text", data.descripcion)
            });
            cy.wait(1000)
        });
    })
})


