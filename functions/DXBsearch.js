// var fs = require('fs');
const fetch = require("node-fetch");
const axios = require("axios");
// fetch('http://localhost:9000/events',{"method":"GET"}).then((x)=>{
//     x.json().then((y)=>{
//         console.log(y['events']);
//     });
// });
axios.get('http://localhost:9000/events').then((x)=>{
    // console.log(x['data']);
    console.log(x['data']['events']);
    // x['data'].then((y)=>{
    //     console.log(y['events']);
    // });
});