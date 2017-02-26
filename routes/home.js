exports.get = async (ctx) => {
  try {
     var code = ctx.request.query.code;
  } catch(e) {}
  if (code == undefined ) {
    ctx.body = ctx.render('templates/home');
  }
  else {
    console.log(code);
    ctx.body = ctx.render('templates/home');
  }

}
