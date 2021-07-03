const axios = require('axios');
const cheerio = require('cheerio');
const iconv = require("iconv-lite");

// const getHTML = async (url,charset="windows-1251") => {
//     url = encodeURI(url);
//     // request(url, function (err, res, data) {
//     //     if (err) throw err;
//     //     return cheerio.load(data,
//     //         { decodeEntities: false })
//     //     // console.log(data);
//     //     // console.log(res.statusCode);
//     // });
//     // const data = await axios.get(url)
//     const data = await axios.get(
//         url,
//         {
//             responseType: 'arraybuffer',
//             responseEncoding: 'binary',
//         })
//         .then(response => iconv.decode(Buffer.from(response.data), charset))
//     return cheerio.load(data,
//         { decodeEntities: false })
// }
//
// module.exports.getHTML = getHTML;