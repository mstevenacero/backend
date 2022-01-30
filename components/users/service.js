import abstractService from '../../services/abstractService.js';

import role from '../roles/roles.js'
import user from './users.js'

//Relations
user.belongsTo(role,{                    
    foreignKey: 'role_id'
})

class UserService extends abstractService {

    constructor(){
        super()
        const relations = {   
            attributes: { exclude: ['password'] },
            include: [
                {
                    model: role,
                    attributes:['id','tipo_role'],
                }
            ]
        }    

        this.setRelations(relations)
        this.setModel(user)
        
    }

}

export default UserService;