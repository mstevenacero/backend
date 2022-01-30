import abstractService from '../../services/abstractService.js';

import role from '../roles/roles.js'
import users from '../users/users.js'
import symptom from './symptoms.js';

//Relations
symptom.belongsTo(users,{                    
    foreignKey: 'id_user'
})

class SymptomService extends abstractService {

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
        this.setModel(symptom)
        
    }

}

export default SymptomService;