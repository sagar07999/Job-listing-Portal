const axios = require('axios');

async function testRegister() {
    try {
        const res = await axios.post('http://localhost:5001/api/auth/register', {
            name: 'Test Setup',
            email: 'test' + Date.now() + '@test.com',
            password: 'password123',
            role: 'seeker'
        });
        console.log('Success:', res.data);
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}

testRegister();
