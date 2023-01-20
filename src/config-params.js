import { Rate}  from 'k6/metrics';

// any url can set here
const baseUrl = 'http://localhost/myapp';

const formFailRate = new Rate('failed form fetches');
const submitFailRate = new Rate('failed form submits');

const options = {
    vus: 1,
    iterations: 1,
    duration: '10s',
    thresholds: {
      'failed form submits': ['rate<0.1'],
      'failed form fetches': ['rate<0.1'],
      'http_req_duration': ['p(95)<400']
    }
};

export default {
    baseUrl,
    formFailRate,
    submitFailRate,
    options
}