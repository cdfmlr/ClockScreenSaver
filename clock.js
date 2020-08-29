new Vue({
    el: '#app',
    data() {
        return {
            current: new Date()
        }
    },
    methods: {
        getTime: function () {
            this.current = new Date();
        }
    },
    computed: {
        hours: function () {
            let hours = this.current.getHours()
            return ("0" + hours).slice(-2);
        },
        minutes: function () {
            let minutes = this.current.getMinutes()
            return ("0" + minutes).slice(-2);
        }
    },
    mounted() {
        setInterval(this.getTime, 1000);
    },
})