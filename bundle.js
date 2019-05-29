// import { reject } from "any-promise";

// import console = require("console");

// var exec = require('child_process').exec; 
// var cmdStr = 'node ./node_modules/react-native/local-cli/cli.js bundle --platform android --dev false --entry-file platformDep.js --bundle-output ./android/app/src/main/assets/platform.android.bundle --assets-dest android/app/src/main/res/ --config /reactNative/react-native-multibundler/platform57.config.js';
// var cmdString = 'node run base'
// exec(cmdString, function(err,stdout,stderr){
//     if(err) {
//         console.log('get weather api error:'+stderr);
//     } else {
//         /*
//         这个stdout的内容就是上面我curl出来的这个东西：
//         {"weatherinfo":{"city":"北京","cityid":"101010100","temp":"3","WD":"西北风","WS":"3级","SD":"23%","WSE":"3","time":"21:20","isRadar":"1","Radar":"JC_RADAR_AZ9010_JB","njd":"暂无实况","qy":"1019"}}
//         */
//         // var data = JSON.parse(stdout);
//         console.log(stdout);
//     }
//  
// var exec = require('child_process').execFile;
// exec('./bundle.sh', {encoding:'utf8'}, function (err,stdout,stderr) {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(stdout)
// });

debugger
const argv = process.argv.splice(2)[0]
const fs = require('fs')
const path = require('path')
const basePath = path.join(__dirname, '/')
const readFIles = [`${basePath}tmpl/index.js`, `${basePath}tmpl/cptTemp.js`];  
console.log(basePath)
const pathFile = argv.split('/')
let exists = function () {
    return new Promise ((resolve, reject) => {
        (async function () {
            for (let p of pathFile) {
                console.log(basePath + p)
                var bs = fs.existsSync(basePath + 'uploads')
               
            }
        })()
    })
}
let readFile = function () {
    return new Promise(resolve => {
        let content = fs.readFileSync(readFIles[0]).toString()
        let repContent = content.replace(/App/g, 'banana')
        console.log(repContent)
        resolve(repContent)
    })
}
readFile()
