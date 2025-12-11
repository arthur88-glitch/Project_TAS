it('should login successfully and reach the Game Store page', () => {
  cy.visit('http://localhost/game-store-website/fr_login.php'); // Akses halaman login

  // Isi email, username, dan password
  cy.get('input[name="email"]').type('caca@gmail.com'); // Isi email
  cy.get('input[name="username"]').type('caca'); // Isi username
  cy.get('input[name="password"]').type('caca'); // Isi password

  // Klik tombol submit
  cy.get('button[type="submit"]').click();

  // Verifikasi bahwa halaman Game Store muncul setelah login
  cy.url().should('include', '/index.php'); // Pastikan URL mengarah ke halaman beranda

  // Verifikasi bahwa teks "Welcome caca" muncul
  cy.contains('Welcome caca').should('exist'); // Memeriksa apakah teks 'Welcome caca' ada di halaman

  // Verifikasi bahwa tombol "Start Exploring" ada di halaman
  cy.contains('Start Exploring').should('exist'); // Memeriksa tombol "Start Exploring" setelah login
});
