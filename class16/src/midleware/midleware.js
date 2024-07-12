exports.midleWareGlobal = (req, res, next) => {
   res.locals.localVariable = 'Este é o valor da variável local';
   next();  

};