var fs = require('fs');
// const resjson= require('./datafolder/TiffanyContent/store18file_TheSuccessExperience_search.json');
// const resjson= require('./datafolder/LeonContent/store5file.json');
// const resjson= require('./datafolder/TiffanyContent/grab5file.json');
// let xcv = [];
const resjson= require('./datafolder/TimesHigherEducation/store19file.json');
// const resjson= require('./datafolder/LeonContent/store1file.json');
resjson.data.forEach((x)=>{
    sd = x["name"];
    fs.appendFile("superData.txt", String(sd)+"\n", function(err) {
        if (err) {
            console.log(err);
        }
});
    // xcv.push();
});
// console.log(xcv);


