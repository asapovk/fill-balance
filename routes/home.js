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
    await rp(options).then(respose => {console.log(respose.user_id)});
    var user_id = respose.user_id;
    ctx.body = ctx.render('templates/home',{userId: respose.user_id });
  }

}
