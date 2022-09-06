module.exports = (req, res, next) =>{
    const { pass } = req.query

    if(!pass || pass !== "banana"){
        return res.status(400).json("errado");
    }

    next();
}

//localhost:3000/produtos?pass=123
//localhost:3000/produtos?pass=banana