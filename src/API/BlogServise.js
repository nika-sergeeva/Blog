import axios from "axios"

export default class BlogServise{
    static async fetchAll(limit = 10, page=1){
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params:{
                _limit: limit,
                _page: page,
            }
        })
        return res
    }
}