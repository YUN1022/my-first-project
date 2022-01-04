const YunSelect = {
    components: {
        'my-greeting': {
            template: `<p> greeting </p>`
        },
        'greeting-to-someone': {
            template: `<p> this is {{n}} times greeting to {{selectedName}} </p>
            <button v-on:click="plus_n"> greeting again </button>`,
            props: ["selectedName"],
            data(){
                return {
                    n:1
                }
            },
            methods: {
                plus_n(){
                    this.n ++
                }
            }
        }
    },
    data() {
        return {
            selected:'',
            arr: ['Tony', 'Nick', 'Micheal', 'Mill']
        }
    }
}

export default YunSelect