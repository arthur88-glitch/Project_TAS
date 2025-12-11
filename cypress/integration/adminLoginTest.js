it('should login as admin and reach admin page', () => {
  cy.visit('http://localhost/game-store-website/fr_login.php');

  // Isi email, username, dan password
  cy.get('input[name="email"]').type('admin@gmail.com'); // Isi email
  cy.get('input[name="username"]').type('admin'); // Isi username
  cy.get('input[name="password"]').type('admin'); // Isi password

  // Klik tombol submit
  cy.get('button[type="submit"]').click();

  // Verifikasi bahwa halaman admin berhasil dimuat dengan memeriksa teks "Our Product"
  cy.contains('Our Product').should('exist'); // Memeriksa teks "Our Product" muncul setelah login

  // Jika ada elemen lain yang perlu diperiksa, misalnya:
  // cy.get('.product-list').should('exist'); // Memeriksa apakah daftar produk ada
});
