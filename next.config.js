const fetch = require('isomorphic-unfetch');

module.exports = {
  assetPrefix: '../',
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' }
    };
    const reportJson = await fetch('http://192.168.12.118:2020/getJson')
        .then(res=> res.json()).then(res => {return res});

    reportJson.forEach((result, index) => {
        paths[`/p/${index}`] = { page: '/p/[id]', query: { id: index } };
    });
    return paths; 
  }
};