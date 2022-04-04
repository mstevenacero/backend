import abstractService from '../../services/abstractService.js';

import patology from '../patologys/patologys.js'
import symptoms_polls from '../symptoms-polls/symptoms_polls.js'
import symptomsPatologys from './symptomsPatologys.js';


//Relations
symptomsPatologys.belongsTo(symptoms_polls,{                    
    foreignKey: 'id_symptoms_poll',
})
// foreignKey: 'code_patology'
symptomsPatologys.belongsTo(patology,{                    
    foreignKey: 'code_patology',
})

class symptomsPatologysService extends abstractService {

    constructor(){
        super()
        const relations = {   
            include: [
                {
                    model:symptoms_polls,
                    attributes:['id_symptoms','data_symptoms_poll']
                },
                {
                    model:patology,
                    attributes:['code','name_patology']
                }
            ]
        }    

        this.setRelations(relations)
        this.setModel(symptomsPatologys)
        
    }

}

export default symptomsPatologysService;