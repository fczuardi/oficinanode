//copy paste do exemplo https://github.com/mckelvey/instagram-node-lib
Instagram = require('instagram-node-lib');

var istagramConfig = require('../config/instagram.config')

console.log(istagramConfig.client_id);

Instagram.set('client_id', istagramConfig.client_id);
Instagram.set('client_secret', istagramConfig.client_secret);

Instagram.tags.info({
  name: 'blue',
  complete: function(data){
    console.log(data);
  }
});