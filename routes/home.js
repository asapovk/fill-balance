var rp = require('request-promise');


exports.get = async (ctx) => {
  try {
     var code = ctx.request.query.code;
  } catch(e) {}
  if (code == undefined ) {
    ctx.body = ctx.render('templates/home');
  }
  else {
    console.log(code);
    var options = {
      method: 'GET',
      uri: 'https://oauth.vk.com/access_token',
      qs: {
        client_id: '5895475',
        client_secret: 'CWWUwXFXOOw1UCJXIjef',
        redirect_uri: 'http://oknojapan.com:3000/',
        code: code
      },
      json: true
    }
    await rp(options).then(response => {
      var options2 = {
        method: 'GET',
        uri: 'https://api.vk.com/method/users.get',
        qs: {
          user_ids: response.user_id,
          fields: 'bdate',
          v: '5.62'
        },
        json: true
      }
     return rp(options2);
    }).then(response => {console.log(response)});

     try {
          var user_id = respose.user_id;
      } catch(e) {}
    ctx.body = ctx.render('templates/home',{userId: user_id });
  }

}
