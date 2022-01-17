import {CatService} from "@/components/apiFunction";
export default {
    actions: {
       async getCats(ctx){
           this.service = new CatService();
           let cats = await this.service.getImages();
           cats = cats.map((item) => ({...item, likes:false}));
           ctx.commit('upDateCats', cats)
        },
        async showMoreCats(ctx) {
            let cats = await this.service.getImages();
            const updatedData = cats.map((item) => ({...item, likes: false}));
            cats = [ ...updatedData];
            ctx.commit('upDateCats', cats)
        },
    },
    mutations: {
        upDateCats(state, cats){
            state.cats = [...state.cats, ...cats]
        },
    },
    state: {
        cats:[],
        service:null,
    },
    getters: {
        allCats(state){
            return state.cats
        }
    }
}