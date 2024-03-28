import { connect } from 'mongoose'

export async function startConnection() {
    const db = await connect('mongodb://localhost/ea-restapi', (err) => {
        if (err) {
            console.log('Unable to connect to the server. Please start the server. Error:', err);
        } else {
            console.log('Connected to Server successfully!');
        }
    });
}
