const boom = require('@hapi/boom')

function checkRoles(...roles) {
    return (req, res, next) => {
        const user = req.user;
        console.log(user)
        if(roles.includes(req.user.role)) {
            next()
        }else{
            next(boom.forbidden());
        }
    }
}

module.exports = { checkRoles }