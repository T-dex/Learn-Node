exports.myMiddleware=(req,res,next)=>{
    req.name="Dex";
    if(req.name==="Dex"){
      throw Error('what type of name is that')  
    }
    next();
}

exports.homePage=(req,res)=>{
    console.log(req.name);
 res.render('index')
}