import jwt from 'jsonwebtoken';
let sign = jwt.sign;

import { config } from '../../config/index.js';
//const UserService = require('../../services/userService')
import ld from 'lodash';
let concat = ld.concat;

function jwtSign(user){

    const payLoad = setPayload(user)

    const token = sign(
        payLoad,
        config.authJwtSecret, { expiresIn: config.expiresIn }
    );

    return token
}

function setScopes(user){

    const rolePermissions = user.role.role_permissions.map((item)=>{
        return item.permission.name
    })
    
    const userPermissions = user.user_permissions.map((item)=>{
        return item.permission.name
    })
    
    const payLoad = concat(rolePermissions,userPermissions)   

    return payLoad
}

function setPayload(user){

    const payLoad = {
        sub: user.id,         
        email: user.email,
        name:user.name,
        //role_name: user.role.name,   
        //role_id: user.role_id,                
        //scopes:setScopes(user),
    }

    return payLoad
}


export {
    jwtSign,
    setScopes,
    setPayload
};