exports.get = async (ctx) => {

    var user = ctx.session.user || null;

    console.log(user);  
    ctx.body = ctx.render('templates/home', {user: user});
}
