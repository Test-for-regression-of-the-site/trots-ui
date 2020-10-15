// const fetch = require('isomorphic-unfetch');

// module.exports = {
//   assetPrefix: '../',
//   exportPathMap: async function(ctx) {
// 	  	console.log(ctx)
// 		const paths = {
// 			'/': { page: '/' }
// 		};
// 		const reportJson = await fetch('http://192.168.1.4:2020/getJson')
// 			.then(res=> res.json()).then(res => { return res });

// 		reportJson.forEach((item, index) => {
// 			paths[`/p/${index}`] = { page: '/p/[id]', query: { id: index } };
// 		});
// 		return paths; 
// 	}
// };

// next.config.js
module.exports = {
    hmr: false
}