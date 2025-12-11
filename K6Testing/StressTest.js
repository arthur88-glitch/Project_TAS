import { check } from 'k6';
import http from 'k6/http';

export let options = {
  stages: [
    { duration: '10s', target: 50 }, // Meningkatkan jumlah pengguna menjadi 50 dalam 10 detik
    { duration: '30s', target: 50 }, // Pertahankan 50 pengguna selama 30 detik
    { duration: '10s', target: 100 }, // Meningkatkan jumlah pengguna menjadi 100 dalam 10 detik
    { duration: '30s', target: 100 }, // Pertahankan 100 pengguna selama 30 detik
    { duration: '10s', target: 200 }, // Meningkatkan jumlah pengguna menjadi 200 dalam 10 detik
    { duration: '30s', target: 200 }, // Pertahankan 200 pengguna selama 30 detik
    { duration: '10s', target: 0 }, // Turunkan ke 0 setelah pengujian
  ],
};

export default function () {
  let res = http.get('http://localhost/game-store-website/index.php');

  check(res, {
    'status was 200': (r) => r.status === 200,
    'body contains Game Store': (r) => r.body !== null && r.body.includes('Game Store'),
  });
}
