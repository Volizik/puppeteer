module.exports.getAll = (ctx, next) => {
    ctx.body = 'hello';
    console.log(213);
    next();
};
