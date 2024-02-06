const jwt = require("jsonwebtoken");
const { jwtKey, issuerWho } = require("../Configs/environtment");
const { checkTokenValidating } = require("../Models/auth.model");

const isLogin = async (req, res, next) => {
    const bearer = req.header("Authorization")
    if(!bearer) 
        return res.status(401).json({
            msg: "Please log in first"
        });
    const token = bearer.split(" ")[1];
    // const data = await checkTokenValidating(token);
    // if (data.rowCount > 0) {
    //     return res.status(400).json({
    //         msg: "Invalid log, please log in again"
    //     });
    // };
    jwt.verify(token, jwtKey, {issuerWho}, (error, decode) => {
        if(error)
        switch (error.name) {
            case "TokenExpiredError" :
                return res.status(401).json({
                    msg: "Access ended, please re-log in"
                });
            case "NotBeforeError" :
                returnres.status(401).json({
                    msg: "Access hasn`t started yet. Access on time"
                })
        };
        req.userInfo = decode;
        // console.log(decode);
        next();
    });
};

const isHeadOfficeOnly = (req, res, next) => {
    const {id, user_type} = req.userInfo;
    if(user_type !== 'Head Office')
    return res.status(403).json({
        msg: "Access Denied"
    });
    next();
};

const isHeadOfficeAndAdmin = (req, res, next) => {
    const {id, user_type} = req.userInfo;
    if(user_type !== 'Head Office' || user_type !== 'Admin')
    return res.status(403).json({
        msg: "Access Denied"
    });
    next();
};

module.exports = {isLogin, isHeadOfficeOnly, isHeadOfficeAndAdmin}
