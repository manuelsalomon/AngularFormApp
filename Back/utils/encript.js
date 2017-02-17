const crypto = require('crypto-js');

module.exports = {
  encript: function(pass, salt){
    return crypto.HmacSHA1(pass,salt).toString();
  },
}