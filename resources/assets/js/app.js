// const { default: axios } = require("axios");

import axios from "axios";

function getPosts() {
    return axios.get("/posts");
}

async function fire() {
    let response = await getPosts();

    console.log(response.data[1]);
}

fire();
