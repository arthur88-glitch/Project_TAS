import { check } from 'k6';
import http from 'k6/http';

export let options = {
  stages: [
    { duration: '10s', target: 1 }, // Mulai dengan 1 pengguna
    { duration: '10s', target: 1 }, // Pertahankan 1 pengguna selama 10 detik
  ],
};

export default function () {
  let res = http.get('http://localhost/game-store-website/index.php');

  check(res, {
    'status was 200': (r) => r.status === 200,
    'body contains Game Store': (r) => r.body.includes('Game Store'),
  });
}
