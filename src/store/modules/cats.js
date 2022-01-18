import {CatService} from "@/components/apiFunction";
export default {
    actions: {
       async getCats(ctx){
           this.service = new CatService();
           let cats = await this.service.getImages();
           cats = cats.map((item) => ({...item, likes:false}));
           ctx.commit('showCats', cats)

        },
        async showMoreCats(ctx) {
            let cats = await this.service.getImages();
            const updatedData = cats.map((item) => ({...item, likes: false}));
            cats = [ ...updatedData];
            ctx.commit('upDateCats', cats)
        },
        countLike(ctx, arr){
            let likes = 0;
            arr.forEach(cat => cat.likes ? likes++ : cat);
            ctx.commit('totalLikes', likes)
        }

    },
    mutations: {
        upDateCats(state, cats){
            state.cats = [...state.cats, ...cats]
        },

        showCats(state, cats){
            state.cats = [...cats]
        },
         totalLikes(state, likes){
            state.likes = likes
         }
    },
    state: {
        cats:[],
        service:null,
        likes:0,
        thumbsUp: 'https://cdn-icons.flaticon.com/png/512/2475/premium/2475607.png?token=exp=1642523262~hmac=507e536de29845c7ef155ed887750383',
        thumbsDown: 'https://cdn-icons.flaticon.com/png/512/2609/premium/2609170.png?token=exp=1642523292~hmac=5cae637fda7330d3d6491a7c25f88636'
    },
    getters: {
        allCats(state){
            return state.cats
        },
        likes(state){
            return state.likes
        },
        thumbsUp(state){
            return state.thumbsUp
        },


    }
}