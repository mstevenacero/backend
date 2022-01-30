import abstractService from '../../services/abstractService.js';

import role from './roles.js'
import user from '../users/users.js'

//Relations
role.hasMany(user,{                    
    foreignKey: 'role_id'
})

class UserService extends abstractService {

    constructor(){
        super()
        const relations = {   
            include: [
                {
                    model: user,
                    attributes:['id','tipo_role'],
                }
            ]
        }    

        this.setRelations(relations)
        this.setModel(role)
        
    }

}

export default UserService;