import axios from 'axios';

const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
        key: "AIzaSyALJsAJfBTAzdOiiDreNfjeHaitGFdISdA"
        // key: "AIzaSyDUONNcy5lcXRM9q2cUFwdfzCcq5OoSxjo"
        // key: process.env.REACT_APP_YTC_API_KEY
    }
});

export default request;