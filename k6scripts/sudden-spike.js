import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    stages: [
        { duration: '2m', target: 50 },    // Ramp-up to 10 users over 1 minute
        { duration: '2m', target: 50 },    // Spike to 50 users in 1 minute
        { duration: '5m', target: 50 },    // Stay at 50 users for 5 minutes
    ],
};

export default function () {
    http.get('https://demo-petservice-eastus.azurewebsites.net/petstorepetservice/v2/pet/info');
    sleep(1);
}
