import abstractService from '../../services/abstractService.js';

import role from '../roles/roles.js'
import alerts_user from '../alerts_users/alerts_users.js'
import alerts_types from './alerts_types.js';

//Relations
alerts_types.belongsTo(alerts_user,{                    
    foreignKey: 'type_alert'
})

class alerts_userService extends abstractService {

    constructor(){
        super()
        const relations = {   
            attributes: { exclude: ['password'] },
            include: [
                {
                    model:alerts_user,
                    attributes:['id'],
                }
            ]
        }    

        this.setRelations(relations)
        this.setModel(alerts_types)
        
    }

}

export default alerts_userService;