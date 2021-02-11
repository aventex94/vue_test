class User{
    axios
    baseUrl
    constructor(axios){
        this.axios = axios;
        this.baseUrl = process.env.VUE_APP_BASEURL;
    }
    getAll(){
        return this.axios.get(this.baseUrl);
    }
}