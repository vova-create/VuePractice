import {CatService} from "@/components/apiFunction";

export default {
    actions: {
        async getCats(ctx) {
            this.service = new CatService();
            let cats = await this.service.getImages();
            cats = cats.map((item) => ({...item, likes: false}));
            ctx.commit('showCats', cats)

        },
        async showMoreCats(ctx) {
            let cats = await this.service.getImages();
            const updatedData = cats.map((item) => ({...item, likes: false}));
            cats = [...updatedData];
            ctx.commit('upDateCats', cats)
        },

        deleteCats(ctx) {
            const cats = []
            ctx.commit('deleteCats', cats)
        }
    },
    mutations: {
        upDateCats(state, cats) {
            state.cats = [...state.cats, ...cats]
        },

        showCats(state, cats) {
            state.cats = [...cats]
        },

        deleteCats(state, cats) {
            state.cats = cats
        }

    },
    state: {
        cats: [],
        service: null,
        likes: 0,
    },
    getters: {
        allCats(state) {
            return state.cats
        },
        likes(state) {
            let count = 0
            state.cats.forEach(cat => cat.likes ? count++ : cat.likes);
            return count
        },

    }
}