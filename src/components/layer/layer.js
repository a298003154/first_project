import tpl from './layer.html';
import './layer.less';

function layer() {
    console.log(tpl)
    return {
        name: 'layer',
        tpl: tpl
    }
}
export default layer();
