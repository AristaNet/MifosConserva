/**
 * Specify the server HOST
 */
const HOST = 'http://127.0.0.1:8000/api';

/**
 * It contains the list of endpoints to connect to the server
 */
export const endpoints = {
    clients: `${ HOST }/clients`,
    login: `${ HOST }/login`
};