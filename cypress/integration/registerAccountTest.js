it('should register a new user', () => {
  cy.visit('http://localhost/game-store-website/signup.php'); // Akses halaman signup

  // Isi email, username, dan password
  cy.get('input[name="email"]').type('user1@example.com'); // Isi email
  cy.get('input[name="username"]').type('user1'); // Isi username
  cy.get('input[name="password"]').type('password123'); // Isi password

  // Klik tombol submit
  cy.get('button[type="submit"]').click();

  // Verifikasi bahwa setelah registrasi, pengguna diarahkan ke halaman yang benar
  cy.contains('Email atau Username sudah terdaftar!').should('exist');
});
