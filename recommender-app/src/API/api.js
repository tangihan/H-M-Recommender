import axios from "axios";

axios.defaults.trailingSlash = true;

const BASE_URL = "http://127.0.0.1:8000/neo_app/";
const USERNAME = process.env.REACT_APP_USERNAME;
const PASSWORD = process.env.REACT_APP_PASSWORD;
const HEADERS = {
  "Content-Type": "application/json"
}

const teenagerId = "aab727ccd3536905e818f95951e4c62b671f3360caeb360895a1a7b2e9f58c18";
const adultId = "a7216d1eb962c46cba416345cc007d2e3a70cfa1fd89ec3e3fd9ce2e007cc113";

const getRecommendationBySeason = (seasonName) => {      

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


const getStoreCatalog = (gender) => {      

  var data = JSON.stringify({
      "neo4j-username": USERNAME,
      "neo4j-password": PASSWORD,
      "gender": `${gender === "Ladies" ? "F" : "M" }`
  });

  var config = {
    method: "post",
    url: `${BASE_URL}store-catalog`,
    data: data,
    headers: HEADERS
  };
  
  return axios(config);

};

const getRecommendationByProduct = (articleId, generationName) => {      

  var data = JSON.stringify({
      "neo4j-username": USERNAME,
      "neo4j-password": PASSWORD,
      "customerId": `'${generationName === "Teenagers" ? teenagerId : adultId}'`,
      "articleId": articleId, 
  });

  var config = {
    method: "post",
    url: `${BASE_URL}recommendation/product`,
    data: data,
    headers: HEADERS
  };
  
  return axios(config);

};


const getRecommendationByProductColdStart = (productName) => {      

  var data = JSON.stringify({
      "neo4j-username": USERNAME,
      "neo4j-password": PASSWORD,
      "productName": `'${productName}'`
  });

  var config = {
    method: "post",
    url: `${BASE_URL}recommendation/product/coldstart`,
    data: data,
    headers: HEADERS
  };
  
  return axios(config);

};


const getRecommendationByProperty = (articleId) => {      
  
  var data = JSON.stringify({
      "neo4j-username": USERNAME,
      "neo4j-password": PASSWORD,
      "articleId": articleId
  });

  var config = {
    method: "post",
    url: `${BASE_URL}recommendation/property`,
    data: data,
    headers: HEADERS
  };
  
  return axios(config);

};

const getRecommendationByGeneration = (generationName, seasonName) => {      

  var data = JSON.stringify({
      "neo4j-username": USERNAME,
      "neo4j-password": PASSWORD,
      "generationName":  `'${generationName}'`,
      "customerId": `'${generationName === "Teenagers" ? teenagerId : adultId}'`, 
      "todayDate":`'${seasonName === "Winter" ? "2020-19-01" : "2020-06-01"}'`
  });

  var config = {
    method: "post",
    url: `${BASE_URL}recommendation/generation`,
    data: data,
    headers: HEADERS
  };
  
  return axios(config);

};

export {
  getRecommendationBySeason,
  getStoreCatalog,
  getRecommendationByProduct,
  getRecommendationByProductColdStart,
  // getRecommendationByProperty, 
  getRecommendationByGeneration
};