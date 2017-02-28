exports.get = async (ctx) => {

    var user = ctx.session.user || null;

    console.log(user.last_name);  
    ctx.body = ctx.render('templates/home', {user: user});
}
