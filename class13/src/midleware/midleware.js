exports.midleWareGlobal = (req, res, next) => {
   if(req.body.customer) {
      console.log(`\n Vi que você postou ${req.body.customer}`)
   }

   next()
}