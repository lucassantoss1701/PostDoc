import axios from 'axios'

const EMPLOYEE_API_BASE_URL = "http://localhost:8081/api/v1/postits"
const EMPLOYEE_API_BASE_URL2 = "http://localhost:8081/api/v1/postit"

class PostitService{

    getPostits(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createPostit(postit){
        return axios.post(EMPLOYEE_API_BASE_URL, postit);
    }

    getPostitById(postitId){
        return axios.get(EMPLOYEE_API_BASE_URL +'/'+ postitId);
    }

    updatePostit(postit, postitId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + postitId, postit);
    }

    deletePostit(postitId){
        return axios.delete(EMPLOYEE_API_BASE_URL +'/'+ postitId);
    }
}

export default new PostitService();