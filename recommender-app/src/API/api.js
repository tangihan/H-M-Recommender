import axios from "axios";

axios.defaults.trailingSlash = true;

const BASE_URL = "http://127.0.0.1:8000/neo_app/";
const USERNAME = "neo4j";
const PASSWORD = "easycake108";
const HEADERS = {
  "Content-Type": "application/json"
}

const getRecommendationBySeason= (seasonName) => {      

    var data = JSON.stringify({
        "neo4j-username": USERNAME,
        "neo4j-password": PASSWORD,
        "seasonName": `'${seasonName}'`
    });

    var config = {
      method: "post",
      url: `${BASE_URL}recommendation/season`,
      data: data,
      headers: HEADERS
    };
    
    return axios(config);

};

export {
  getRecommendationBySeason
};