const router = require('express').Router();



router.get('/',(req,res)=>{
    res.render('index')
})

router.post("/",(req,res)=>{
    console.log(req.body);
    req.flash("error", "invalid email or password");
    return res.redirect("/")

})

module.exports=router