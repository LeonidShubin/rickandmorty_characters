new Vue ({
    el: '#app',
    data() {
		return {
			characters: [],
            baseUrl: 'https://rickandmortyapi.com/api/character/?page=',
            loader: '',
            currentPage: 1,
		};
    },
    created() {
        this.fetchPage(this.currentPage);
    },
    methods: {
        fetchPage (page) {
            this.loader = true;
            return fetch(`${this.baseUrl}${page}`)
            .then(result => result.json())
            .then(({results}) => this.characters = results)
            .then(() => this.loader = false);
        },
    }
});