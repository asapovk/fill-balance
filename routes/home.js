exports.get = async (ctx) => {

    var user = ctx.session.user || null;

    ctx.body = ctx.render('templates/home', {user: user});
}
