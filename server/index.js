const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');
const render = require('koa-ejs');
const path = require('path');
const Router = require('koa-router');
const router = new Router();
const js = require('../build/assets.json').app.js
const vendorName = require('../build/vendor.json').vendor.js
import { entry, store } from '../src/entry-server';
console.log('json', JSON.stringify(store.getState()));
render(app, {
    root: path.join(__dirname, 'views'),
    viewExt: 'ejs',
    layout: '',
    cache: false,
    debug: false 
})
router.get('/', async (ctx) => {
    await ctx.render('index', {
         entry: entry(ctx.url),
         js, 
         store:JSON.stringify(store.getState()),
         vendor: `/vendor/${vendorName}` 
    });
})
router.get('/welcome', async (ctx) => {
    ctx.body = "welcome";
    return ;
    await ctx.render('index', {
         entry: entry(ctx.url),
         store:JSON.stringify(store.getState()),
         js: jsPath,
    });
})
app.use(serve(path.join(process.cwd(),'static')))
app.use(router.routes()).use(router.allowedMethods());
app.listen(4000);
