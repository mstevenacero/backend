import abstractService from '../../services/abstractService.js';

import role from '../roles/roles.js'
import symptomsPatologys from '../symptomsPatologys/symptomsPatologys.js'
import patologys from './patologys.js';

//Relations
patologys.belongsTo(symptomsPatologys,{                    
    foreignKey: 'code'
})

class patologysService extends abstractService {

    constructor(){
        super()
        const relations = {   
            attributes: { exclude: ['password'] },
            include: [
                {
                    model:symptomsPatologys,
                    attributes:['code_patology'],
                }
            ]
        }    

        this.setRelations(relations)
        this.setModel(patologys)
        
    }

}

export default patologysService;