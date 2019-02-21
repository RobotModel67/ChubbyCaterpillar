export default {
    template: `
        <div>
            <h1>Counter {{counter}}</h1>
            <button @click="increment">Increment</button>
            <button @click="decrement">Decrement</button>
            </div>
        `,
        data() {
            return {counter: 1}
        },
        methods: {
            increment() {
                this.counter++;
            },
            decrement() {
                this.counter--;
            }
        },
};