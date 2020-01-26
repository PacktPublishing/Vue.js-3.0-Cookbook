describe('Checking Vue-CLI Example Routes', () => {
  it('Visiting the Home Page', () => {
    cy.visit('/');

    cy.contains('h1', 'Welcome to Your Vue.js App');

    cy.contains('a[href="#/"]', 'Home');
    cy.contains('a[href="#/about"]', 'About');
  });

  it('Visit the About Page', () => {
    cy.get('a[href="#/about"]').click();

    cy.contains('h1', 'This is an about page');

    cy.contains('a[href="#/"]', 'Home');
    cy.contains('a[href="#/about"]', 'About');
  });

  it('Return to Home page', () => {
    cy.get('a[href="#/"]').click();

    cy.contains('h1', 'Welcome to Your Vue.js App');
  });
});
