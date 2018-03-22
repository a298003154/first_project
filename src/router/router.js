// import App from '../App.vue';

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')

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
    ]
}