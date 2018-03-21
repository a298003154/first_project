import './css/common.css';
import layer from './components/layer/layer';

const App = function() {
    console.log(layer);
    const app = document.getElementById('app');
    app.innerHTML = layer.tpl;
}
new App();