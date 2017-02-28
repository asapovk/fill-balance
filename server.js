const Koa = require('koa');
const Router = require('koa-router');
const path = require('path');
const fs = require('fs');


const app = new Koa();
const router = new Router();


const handlers = fs.readdirSync(path.join(__dirname,'middlewares')).sort();

handlers.forEach( handler => require('./middlewares/' + handler).init(app));

/*

Code here ...

*/

router.get('/', require('./routes/home.js').get);
router.get('/',require('./routes/login.js').get);

app.use(router.routes());

app.keys = ['some secret hurr'];
app.listen('3000', ()=>{
    console.log('listening port 3000');
});
