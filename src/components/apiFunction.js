import axios from "axios";

export class  CatService {
    API_URL = 'https://api.thecatapi.com/v1';

    getImages(page = 1, limit = 10, sort = 'DESC') {
        const url = this.buildUrl(this.API_URL, 'images', `search?limit=${limit}&page=${page}&order=${sort}`);
        return axios.get(url).then(res => res.data);
    }
    buildUrl(...chunks) {
        return chunks.join('/');
    }
}

