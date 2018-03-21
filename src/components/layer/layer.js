import tpl from './layer.html';

function layer() {
    console.log(tpl)
    return {
        name: 'layer',
        tpl: tpl
    }
}
export default layer;
