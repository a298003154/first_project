// import App from '../App.vue';

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const user = r => require.ensure([], () => r(require('../page/user/user')), 'user')

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
