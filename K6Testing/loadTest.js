import { check } from 'k6';
import http from 'k6/http';

export let options = {
  stages: [
    { duration: '10s', target: 20 }, // Meningkatkan pengguna menjadi 20 dalam 10 detik
    { duration: '30s', target: 20 }, // Pertahankan 20 pengguna selama 30 detik
    { duration: '10s', target: 0 }, // Turunkan ke 0 setelah pengujian
  ],
};

export default function () {
  let res = http.get('http://localhost/game-store-website/index.php');

  check(res, {
    'status was 200': (r) => r.status === 200,
    'body contains Game Store': (r) => r.body.includes('Game Store'),
  });
}
