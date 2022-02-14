import abstractService from '../../services/abstractService.js';

import role from '../roles/roles.js'
import users from '../users/users.js'
import alerts_users from './alerts_users.js';

//Relations
alerts_users.belongsTo(users,{                    
    foreignKey: 'id_user_alert'
})

class alertsUserService extends abstractService {

    constructor(){
        super()
        const relations = {   
            attributes: { exclude: ['password'] },
            include: [
                {
                    model: users,
                    attributes:['id'],
                }
            ]
        }    

        this.setRelations(relations)
        this.setModel(alerts_users)
        
    }

}

export default alertsUserService;