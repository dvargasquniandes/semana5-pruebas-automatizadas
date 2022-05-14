const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require("chai").expect;

When('Inicio sesión con usuario {kraken-string} y clave {kraken-string}', async function (email, password){
	let element = await this.driver.$('#ember7');
	await element.setValue(email);
	element = await this.driver.$('#ember9');
	await element.setValue(password);
	element = await this.driver.$('#ember11');
	return await element.click();
});

When('Voy a la opción de administrar tags', async function(){
	let element = await this.driver.$('a[href="#/tags/"]');
	return await element.click();
});

When('Voy a la opción de administrar miembros', async function(){
	let element = await this.driver.$('a[href="#/members/"]');
	return await element.click();
});

When('Voy a la opción de administrar configuración', async function(){
	let element = await this.driver.$('a[href="#/settings/"]');
	return await element.click();
});

When('Voy a la opción de administrar navegación', async function(){
	let element = await this.driver.$('a[href="#/settings/navigation/"]');
	return await element.click();
});

When('Voy a la opción de administrar code injection', async function(){
	let element = await this.driver.$('a[href="#/settings/code-injection/"]');
	return await element.click();
});

When('Agrego un tag con el nombre {string}, el slug {string}, el color {string} y la descripción {string}', async function(nombreTag, slug, color, descripcion){
	let element = await this.driver.$('a[href="#/tags/new/"]');
	await element.click();
	element = await this.driver.$('#tag-name');
	await element.setValue(nombreTag);
	element = await this.driver.$('#tag-slug');
	element.click();
	await new Promise(r=> setTimeout(r, 1000));
	await element.setValue(slug);
	element = await this.driver.$('[name="accent-color"]');
	await element.setValue(color);
	element = await this.driver.$('#tag-description');
	await element.setValue(descripcion);
	element = await this.driver.$('section.view-actions>button.gh-btn');
	return await element.click();
	
});

When('Edito el tag con el slug {string} y cambio el nombre a {string}', async function(slug, nuevoNombre){
	let element = await this.driver.$('a[href="#/tags/' + slug + '/"]');
	await element.click();
	element = await this.driver.$('#tag-name');
	await element.setValue(nuevoNombre);
	element = await this.driver.$('section.view-actions>button.gh-btn');
	return await element.click();
});

When('Elimino el tag con el slug {string}', async function(slug){
	let element = await this.driver.$('a[href="#/tags/' + slug + '/"]');
	await element.click();
	element = await this.driver.$('button.gh-btn-red');
	await element.click();
	await new Promise(r=> setTimeout(r, 500));
	element = await this.driver.$('.modal-footer>button.gh-btn-red');
	return await element.click();
});

Then('Verifico si el tag con el slug {string} tiene el nombre modificado {string}', async function(slug, nombreTag){
	let element = await this.driver.$('a[href="#/tags/' + slug + '/"]');
	await element.click();
	await new Promise(r=> setTimeout(r, 500));
	let valor = await this.driver.$('#tag-name').getValue();

	expect(valor).to.equal(nombreTag);
});

Then('Verifico si el tag con el slug {string} no existe', async function(slug){
	let elements = await this.driver.$$('a[href="#/tags/' + slug + '/"]');
	expect(elements.length).to.equal(0);
});

When('Agrego un miembro con el nombre {string} y el correo {string}', async function(nombre, correo){
	let element = await this.driver.$('a[href="#/members/new/"]');
	await element.click();
	element = await this.driver.$('#member-name');
	await element.setValue(nombre);
	element = await this.driver.$('#member-email');
	element.click();
	await new Promise(r=> setTimeout(r, 1000));
	await element.setValue(correo);
	element = await this.driver.$('button.gh-btn-primary');
	return await element.click();
});

Then('Verifico si el miembro con el correo {string} existe', async function(correo){
	let elements = await this.driver.$$('=' + correo);
	expect(elements.length).to.equal(0);
});

When('Agrego un item de navegación con el nombre {string} a la url {string}', async function(nombre, url){
	let element = await this.driver.$('#settings-navigation>div.gh-blognav-item>div>span.gh-blognav-label>input');
	await element.setValue(nombre);
	element = await this.driver.$('#settings-navigation>div.gh-blognav-item>div>span.gh-blognav-url>input');
	await element.setValue(url);
	element = await this.driver.$('button.gh-btn-primary');
	return await element.click();
});

Then('Verifico si el menu de navegación con la url {string} existe', async function(url){
	let elements = await this.driver.$$('a[href="' + url + '"]');
	expect(elements.length).to.equal(1);
});

When('Agrego un tag de rastreo en el header con la clase {string} y otro en el footer con la clase {string}', async function(header, footer){
	let element = await this.driver.$('#ghost-head>div>div>textarea');
	await element.setValue('<hr class="' + header + '"></hr>');
	element = await this.driver.$('#ghost-foot>div>div>textarea');
	await element.setValue('<hr class="' + footer + '"></hr>');
	element = await this.driver.$('button.gh-btn-primary');
	return await element.click();
});

Then('Verifico si el el tag de rastreo en el header con la clase {string} y otro en el footer con la clase {string} existen', async function(header, footer){
	let elements = await this.driver.$$('hr.' + header);
	expect(elements.length).to.equal(1);
	elements = await this.driver.$$('hr.' + footer);
	expect(elements.length).to.equal(1);
});

// Javier Steps

When('I login the application using {kraken-string} as user, and password {kraken-string}', async function (user, pass) {
    let username = await this.driver.$('input[name="identification"]');
    await username.setValue(user);
    let password = await this.driver.$('input[name="password"]');
    await password.setValue(pass);
    let sumitButton = await this.driver.$('button[type="submit"]');
    return await sumitButton.click();
});

When('I go to create a new post', async function () {
    let link = await this.driver.$('a[href="#/editor/post/"]');
    return await link.click();
});

When('I go to create a new page', async function () {
    let linkPages = await this.driver.$('a[href="#/pages/"]');
    await  linkPages.click();
    let link = await this.driver.$('a[href="#/editor/page/"]');
    return await link.click();
});

When('I go to create a new member', async function () {
    let linkPages = await this.driver.$('a[href="#/members/"]');
    await  linkPages.click();
    let link = await this.driver.$('a[href="#/members/new/"]');
    return await link.click();
});

When('I go to create a new tag', async function () {
    let linkPages = await this.driver.$('a[href="#/tags/"]');
    await  linkPages.click();
    let link = await this.driver.$('a[href="#/tags/new/"]');
    return await link.click();
});

When('I create a new post with title {string} and content {string}', async function (title, content) {
    let textarea = await this.driver.$('textarea[placeholder="Post title"]');
    await textarea.setValue(title);
    let parrafo = await this.driver.$('div[data-placeholder="Begin writing your post..."]');
    await parrafo.addValue(content);
    let publish = await this.driver.$('.gh-publishmenu');
    await publish.click();
    let publishButton = await this.driver.$('button[class="gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view"]');
    await publishButton.click();
    let publishButtonFinal = await this.driver.$('button[class="gh-btn gh-btn-black gh-btn-icon ember-view"]');
    await publishButtonFinal.click();
    let closeMessage = await this.driver.$('.gh-notification-close');
    await closeMessage.click();
});

When('I create a new page with title {string} and content {string}', async function (title, content) {
    let textarea = await this.driver.$('textarea[placeholder="Page title"]');
    await textarea.setValue(title);
    let parrafo = await this.driver.$('div[data-placeholder="Begin writing your page..."]');
    await parrafo.addValue(content);
    let publish = await this.driver.$('.gh-publishmenu');
    await publish.click();
    let publishButton = await this.driver.$('button[class="gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view"]');
    await publishButton.click();
    let closeMessage = await this.driver.$('.gh-notification-close');
    await closeMessage.click();
});

When('I create a new tag with name {string}', async function (name) {
    let tagName = await this.driver.$('input[id="tag-name"]');
    await tagName.setValue(name);
    let publishButton = await this.driver.$('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]');
    return await publishButton.click();
});

When('I edit post with title {string} and content {string}', async function (title, content) {
    let textarea = await this.driver.$('textarea[placeholder="Post title"]');
    await textarea.setValue(title);
    let parrafo = await this.driver.$('div[data-placeholder="Begin writing your post..."]');
    await parrafo.setValue(content);
    let update = await this.driver.$('.gh-publishmenu');
    await update.click();
    let updateButton = await this.driver.$('button[class="gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view"]');
    await updateButton.click();
    let closeMessage = await this.driver.$('.gh-notification-close');
    await closeMessage.click();
});

When('I edit page with title {string} and content {string}', async function (title, content) {
    let textarea = await this.driver.$('textarea[placeholder="Page title"]');
    await textarea.setValue(title);
    let parrafo = await this.driver.$('div[data-placeholder="Begin writing your page..."]');
    await parrafo.setValue(content);
    let update = await this.driver.$('.gh-publishmenu');
    await update.click();
    let updateButton = await this.driver.$('button[class="gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view"]');
    await updateButton.click();
    let closeMessage = await this.driver.$('.gh-notification-close');
    await closeMessage.click();
});

When('I create a new post with title {string} and content {string} wihtout saving', async function (title, content) {
    let textarea = await this.driver.$('textarea[placeholder="Post title"]');
    await textarea.setValue(title);
    let parrafo = await this.driver.$('div[data-placeholder="Begin writing your post..."]');
    await parrafo.addValue(content);
});

When('I create a new page with title {string} and content {string} wihtout saving', async function (title, content) {
    let textarea = await this.driver.$('textarea[placeholder="Page title"]');
    await textarea.setValue(title);
    let parrafo = await this.driver.$('div[data-placeholder="Begin writing your page..."]');
    await parrafo.addValue(content);
});

When('I go to the new page created', async function () {
    let settingsD = await this.driver.$('button[title="Settings"]');
    await settingsD.click();
    let linkPost = await this.driver.$('a[class="post-view-link"]');
    await this.driver.url(await linkPost.getAttribute('href'));
});

When('I delete the page and validate page', async function () {
    let settingsD = await this.driver.$('button[title="Settings"]');
    await settingsD.click();
    await new Promise(r=> setTimeout(r, 300));
    let linkPost = await this.driver.$('a[class="post-view-link"]');
    let textLink = await linkPost.getAttribute('href');
    let buttomDelete = await this.driver.$('button[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]');
    buttomDelete.click();
    await new Promise(r=> setTimeout(r, 300));
    let confirmDelete =  await this.driver.$('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]');
    confirmDelete.click();
    await new Promise(r=> setTimeout(r, 300));
    await this.driver.url(await textLink);
});

When('I go to the preview page', async function () {
    let settingsD = await this.driver.$('button[title="Settings"]');
    await settingsD.click();
    let textLink =  await this.driver.$('p[class="ghost-url-preview description ember-view"]').getHTML(false);
    await new Promise(r=> setTimeout(r, 300));
    await this.driver.newWindow('http://' + textLink, {
        windowName: 'name post',
        windowFeature: 'width=420,height=230,resizable,scrollbars=yes,status=1',
    });
});

When('I go to the preview tag page', async function () {
    let textLink =  await this.driver.$('p[class="ghost-url-preview description ember-view"]').getHTML(false);
    await new Promise(r=> setTimeout(r, 300));
    await this.driver.newWindow('http://' + textLink, {
        windowName: 'name post',
        windowFeature: 'width=420,height=230,resizable,scrollbars=yes,status=1',
    });
});

Then('I evaluate the title of the post {string}', async function (title) {
    let tituloPagina = await this.driver.$('h1').getHTML(false);
    expect(title).to.equal(tituloPagina);
});