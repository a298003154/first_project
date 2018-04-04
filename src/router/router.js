// import App from '../App.vue';
const home = require('../components/home/home');
const user = require('../components/user/user');
// const home = r => require.ensure([], () => r(require('../components/home/home')), 'home')
// const user = r => require.ensure([], () => r(require('../components/user/user')), 'user')

export default {
    routerMode: 'hash',
    routes: [
        {
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            component: home
        },
        {
            path: '/user',
            component: user
        },
    ]
}
