import axios from 'axios';

//axios is used for making requests  

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});
//it is used to append the url. for every item containing google.com/ , we can save it as default and then continue

export default instance;