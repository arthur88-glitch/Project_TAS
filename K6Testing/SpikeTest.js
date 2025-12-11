import { check } from 'k6';
import http from 'k6/http';

export let options = {
  stages: [
    { duration: '5s', target: 10 }, // Meningkatkan pengguna menjadi 10 dalam 5 detik
    { duration: '2s', target: 100 }, // Lonjakan menjadi 100 pengguna dalam 2 detik
    { duration: '5s', target: 10 }, // Turunkan kembali pengguna menjadi 10
  ],
};

export default function () {
  let res = http.get('http://localhost/game-store-website/index.php');

  check(res, {
    'status was 200': (r) => r.status === 200,
    'body contains Game Store': (r) => r.body.includes('Game Store'),
  });
}
