import axios from 'axios';
const API_URL = 'http://localhost:8080/api/users/';
class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'signin', {
                username: user.username,
                password: user.password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                return response.data;
            });
    }
    logout() {
        localStorage.removeItem('user');
    }
    register(user) {
        return axios.post(API_URL + 'signup', {
            users_name: user.username,
            users_email: user.email,
            users_password: user.password
        });
    }
}
export default new AuthService();