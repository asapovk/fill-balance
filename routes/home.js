exports.get = async (ctx) => {

    var user = ctx.session.user || null;

    console.log(ctx.session.user);  
    ctx.body = ctx.render('templates/home', {user: user});
}
