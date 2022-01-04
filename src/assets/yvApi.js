const yunApi = {
    data() {
        return {
            greeting: '',
            n: 0,
            ans: 0,
            n2:0,
            ans2:0,
            n3:0,
            ans3:0,
            n4:0,
            ans4:0
        }
    },
    methods: {
        hello() {
            fetch('/api/greeting', {method: 'GET'})
                .then(res => {
                    return res.text()
                }).then(res => {
                this.greeting = res
            })
        },
        fib() {
            fetch(`/api/fib?n=${this.n}`, {method: 'GET'})
                .then(res => {
                return res.json()
            }).then(res => {
                this.ans = res.ans
            })
        },
        push_fib() {
            let formData = new FormData()
            formData.append('n', this.n2)
            fetch(`/api/fib`, {method: 'POST', body: formData})
                .then(
                    res => {
                        return res.json()
                    }
                ).then(
                    res => {
                        return this.ans2 = res.ans
                    }
            )
        },
        put_fib() {
            let formData = new FormData()
            formData.append('n', this.n3)
            fetch(`/api/fib`, {method: 'PUT', body: formData})
                .then(
                    res => {
                        return res.json()
                    }
                ).then(
                res => {
                    return this.ans3 = res.ans
                }
            )
        },
        delete_fib() {
            let formData = new FormData()
            formData.append('n', this.n4)
            fetch(`/api/fib`, {method: 'DELETE', body: formData})
                .then(
                    res => {
                        return res.json()
                    }
                ).then(
                res => {
                    return this.ans4 = `已刪除 n = ${res.delete} 的結果`
                }
            )
        }
    }
}

export default yunApi