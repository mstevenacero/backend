import abstractService from '../../services/abstractService.js';

import role from '../roles/roles.js'
import users from '../users/users.js'
import lineTimes from './lineTimes.js';

//Relations
lineTimes.belongsTo(users,{                    
    foreignKey: 'user_id'
})

class lineTimesService extends abstractService {

    constructor(){
        super()
        const relations = {   
            attributes: { exclude: ['password'] },
            include: [
                {
                    model:users,
                    attributes:['id'],
                }
            ]
        }    

        this.setRelations(relations)
        this.setModel(lineTimes)
        
    }

}

export default lineTimesService;