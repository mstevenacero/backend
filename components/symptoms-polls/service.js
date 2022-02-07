import abstractService from '../../services/abstractService.js';

import role from '../roles/roles.js'
import users from '../users/users.js'
import symptom_poll from './symptoms_polls.js';
import symptom from '../symptoms/symptoms.js'

//Relations
symptom_poll.belongsTo(symptom,{                    
    foreignKey: 'id_symptoms'
})

class SymptomPollService extends abstractService {

    constructor(){
        super()
        const relations = {   
            attributes: { exclude: ['password'] },
            include: [
                {
                    model: symptom,
                    attributes:['id'],
                }
            ]
        }    

        this.setRelations(relations)
        this.setModel(symptom_poll)
    }

}

export default SymptomPollService;