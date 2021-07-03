// const fs = require("fs");
// const {runPython} = require("../python/py_prog");
// const {norm_case} = require("../norm_case");
// const {getHTML} = require("../getHtml");

// const parse_book = async (link) => {
//     const all_text = await getHTML(`http://az.lib.ru${link}`)
//     let texts=[];
//
//     return new Promise(async (resolve,reject) => {
//         let result;
//         for(let element of await all_text('dd')){
//             let text=all_text(element).text()
//
//             texts.push(text);
//         }
//
//         if(texts===""){
//             texts=[all_text('pre pre').text()]
//         }
//
//         return texts;
//     })
//
// }
//
// module.exports = parse_book