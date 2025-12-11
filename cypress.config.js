const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Mengatur URL dasar aplikasi Anda
    baseUrl: 'http://localhost/game-store-website',

    // Pengaturan folder untuk file tes
    specPattern: 'cypress/integration/**/*.js', // Mengarah ke folder tempat Anda menyimpan file tes

    // Pengaturan browser default
    browser: 'chrome', // Bisa disesuaikan dengan browser yang Anda pilih, misalnya chrome atau firefox

    // Pengaturan untuk timeout
    defaultCommandTimeout: 10000, // Timeout default untuk setiap perintah Cypress
    pageLoadTimeout: 60000, // Timeout untuk memuat halaman
    viewportWidth: 1280, // Lebar tampilan browser
    viewportHeight: 720, // Tinggi tampilan browser

    // Mengaktifkan atau menonaktifkan video perekaman untuk tes
    video: false, // Jika tidak ingin merekam video setiap tes berjalan, set ke false

    // Pengaturan lainnya jika diperlukan
    retries: {
      runMode: 2, // Menentukan jumlah percobaan ulang saat tes gagal dalam mode run
      openMode: 0, // Tidak ada percobaan ulang saat menguji dengan antarmuka Cypress
    },

    // Pengaturan untuk menyesuaikan viewport (ukuran layar yang digunakan untuk pengujian)
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
