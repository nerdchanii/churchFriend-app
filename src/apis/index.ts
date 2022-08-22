import Apis from './Apis';
import Caller from './Caller';
import Auth from './Auth';

const caller = new Caller('http://localhost:3000');

export const authApi = new Auth(caller);
