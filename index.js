const PORT = 8000;

const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const app = express();

const URL = "https://search.rakuten.co.jp/search/mall/%E3%82%AD%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89/";
const data = [];

axios(URL).then((response) => {
    const htmlParser = response.data;
    // console.log(htmlParser);

    const $ = cheerio.load(htmlParser);
    $(".searchresultitem", htmlParser).each(function () {
        const title = $(this).find('title').text();
        console.log(title);
    })
});

app.listen(PORT, console.log('server.running!'));