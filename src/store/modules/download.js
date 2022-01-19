export default {
    actions: {
        upLoadImage(ctx) {
            let selectImage = ''
            const formData = new FormData();
            formData.append('file', selectImage);
            // formData.append('sub_id', '');
            fetch('https://api.thecatapi.com/v1/images/upload', {
                method: 'POST',
                headers: {
                    'X-Api-Key': '22c0ba0d-4041-42d9-998f-14020ea3d1d8'
                },
                body: formData
            })
            ctx.commit('upDateImage', selectImage)
        },

    },
    mutations: {
        upDatedImage(state, selectImage) {
            state.selectedImage = selectImage
        },

    },
    state: {
        selectedImage: ''
    },
    getters: {
        selectedImage(state) {
            return state.selectedImage
        },
    },

}