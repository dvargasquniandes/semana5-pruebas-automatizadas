function autenticar(user) {
    cy.get('input[name="identification"]').type(user.email)
    cy.get('input[name="password"]').type(user.password)
    cy.get('button[type="submit"]').click()
    cy.wait(1000)
}

function crearPost(nombre, descripcion) {
    cy.get('a[title="New post"]').click()
    cy.get('textarea[placeholder="Post Title"]').type(nombre)
    cy.get('div[class="koenig-editor__editor __mobiledoc-editor __has-no-content"]').type(descripcion)
    cy.wait(1000)
}

function editarPost(nombre) {
    cy.get('li').contains("Posts").first().click()
    cy.get('li[class="gh-list-row gh-posts-list-item"]').first().click()
    cy.get('textarea[placeholder="Post Title"]').clear().type(nombre)
    cy.wait(1000)
}

function eliminarPost() {
    cy.get('button[class="post-settings"]').click()
    cy.get('button[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]').click()
    cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').contains("Delete").click()
    cy.wait(1000)
}

function publicarPost() {
    cy.get('div[class="gh-publishmenu ember-view"]').click()
    cy.get('button[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]').click()
    cy.wait(1000)
}

function crearPagina(nombre, descripcion) {
    cy.get('li').contains("Pages").first().click()
    cy.get('a').contains("New page").click()
    cy.get('textarea[placeholder="Page Title"]').type(nombre)
    cy.get('div[class="koenig-editor__editor __mobiledoc-editor __has-no-content"]').type(descripcion)
    cy.wait(1000)
}

function crearTag(nombre, descripcion) {
    cy.get('li').contains("Tags").first().click()
    cy.get('a').contains("New tag").click()
    cy.get('#tag-name').type(nombre)
    cy.get('#tag-description').type(descripcion)
    cy.get('button').contains("Save").click()
    cy.wait(1000)
}

function editarPagina(nombre) {
    cy.get('li').contains("Pages").first().click()
    cy.get('li[class="gh-list-row gh-posts-list-item"]').first().click()
    cy.get('textarea[placeholder="Page Title"]').clear().type(nombre)
    cy.get('div[class="gh-publishmenu ember-view"]').click()
    cy.get('button[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]').click()
    cy.wait(1000)
}

function eliminarPagina() {
    cy.get('button[class="post-settings"]').click()
    cy.get('button[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]').click()
    cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').contains("Delete").click()
}

function publicarPagina() {
    cy.get('div[class="gh-publishmenu ember-view"]').click()
    cy.get('button[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]').click()
    cy.wait(1000)
}

export const utils = {
    autenticar,
    crearPagina,
    crearPost,
    crearTag,
    editarPagina,
    editarPost,
    eliminarPagina,
    eliminarPost,
    publicarPagina,
    publicarPost,
}