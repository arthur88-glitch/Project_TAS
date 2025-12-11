describe('Pengujian Halaman Beranda', () => {
  it('halaman beranda harus dimuat dengan sukses', () => {
    cy.visit('http://localhost/game-store-website/index.php');
    cy.url().should('include', '/index.php');
    cy.get('h1').should('contain', 'Game Store');
    cy.get('nav').should('be.visible');
  });
});
