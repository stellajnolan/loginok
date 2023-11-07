function NotFoundHandler(req,res,next){
    res.json({
        status:404
    })
}





function ErrorHandler(err,req,res,next){
    res.json({
        status:500
    })
}




module.exports={
    NotFoundHandler,
    ErrorHandler
}