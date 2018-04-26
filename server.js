var proxy = require('koa2-proxy');
var question = require('./question');

// 本地静态服务器
proxy.static(__dirname);

// 本地模拟文件
// proxy.mockfile(__dirname + '/mockfile.txt');

// 解析smarty模板
// proxy.smarty({ext: '.html', data: {data: 'smarty html'}});

// 转发请求到指定host
// proxy.when('/api', function(ctx) {
//     ctx.request.host = 'www.test.com';
//     ctx.request.protocol = 'http';
// });

// // 配置代理请求结束后修改body
// proxy.when({'.html', phase: 'response'}, function(ctx) {
//     ctx.response.body += '<div>test</div>';
// });

// 请求开始时转发本地请求到网络
// proxy.on('start', function (ctx) {
//     // console.log('start: ', ctx.request.url, ctx.isLocal());
//     // ctx.request.host = 'www.koa2.com';
// });
// // 请求结束时输出状态
proxy.on('end', function (ctx) {
    if(ctx.request.url.match(/getQuestContentNew.*?contentType=2/)){
        // console.log(ctx.response.body.toString());
        ctx.response.body = question.filter(ctx.response.body);

    }
    // console.log('end: ' + ctx.response.body);
});

// 监听端口
proxy.listen({port: 8888,https: true});
