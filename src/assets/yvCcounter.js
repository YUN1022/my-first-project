const Counter = {
    template: `<h3>這是用template</h3>
    <div>counter: {{counter}}</div>
    <button v-on:click='add'> 加1 </button> <button v-on:click='minus'>減1</button>`,
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        add() {
            this.counter ++
        },
        minus() {
            this.counter --
        }
    }
}

export default Counter