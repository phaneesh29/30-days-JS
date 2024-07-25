// task - 6
import _ from 'lodash';
const array = [1, 2, 3, 4, 5];
const max = _.max(array);
console.log(`The maximum value in the array is: ${max}`); // Output: The maximum value in the array is: 5

//task - 7

import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts/1';

axios.get(url)
    .then(response => {
        console.log('Response data:', response.data);
    })
    .catch(error => {
        // Handle any errors
        console.error('Error making the request:', error);
    });