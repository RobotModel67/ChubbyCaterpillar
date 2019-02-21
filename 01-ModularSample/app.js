import Counter from './counter.js';

const app = new Vue({
    el: '#app',
    components: {
        Counter
    }, 
    template: `<counter></counter>`
});