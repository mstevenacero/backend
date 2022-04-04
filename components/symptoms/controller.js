import service from './service.js'
import Alerts_users from '../alerts_users/service.js'
import symptomsService from '../symptoms-polls/service.js'
import alertsTypesService from '../alerts_types/service.js'
import patologys from '../patologys/service.js'
import symptomsPatologysService from '../symptomsPatologys/service.js'
const alertaServices = new alertsTypesService
const Service = new service
const symptomsUser = new symptomsService
const alerts_users = new Alerts_users
const patologyS = new patologys
const symptomsPatologys = new symptomsPatologysService



async function add(req, res, next) {
     
    let alertSymptom = false
    console.log("body del request2 ", req.body?.flag)
    if(req.body?.flag=='No conocido'){
        alertSymptom = false
        console.log("no se conose flag");
        const data = await Service.Create(req.body)
        return res.success({ data: data, alertSymptom, message: 'User create' }, 200)

    }
    let reqData = req.body.data_symptoms.data
    let flagTmp = req?.body?.data_symptoms?.data[0]['flag']
    let i = 0;
    let k = 1;
    let numero = 0
    let petion = false
    const type = "sintomatologia";
    const typeAlerts = await alertaServices.getOne({ where: { type_alert: type } });
    const symtomsReturn = req.body.data_symptoms
    try{
        const dataPatology = await patologyS.getOne({ where: { name_patology: flagTmp } })
        let codePatology = dataPatology.dataValues['code'];
        const dataSymptonPatology = await symptomsPatologys.showAll({ where: { code_patology: codePatology } });
        let dataPorcentaje = dataSymptonPatology.length*0.50
        let dataSyn = req.body.data_symptoms.data.length
        if (flagTmp) {
            reqData.map((item,index )=> {
                
                if (item['flag'] != flagTmp) {
                    let count = i + 1
                    if (count <= dataPorcentaje) {
                        console.log("no tiene ninguna patologia");
                    }
                } if (item['flag'] == flagTmp) {
                    numero =index+1
                    console.log("entre",numero );
                    if(numero >= dataSyn){
                    console.log("entramos cara");                       
                            petion = true
                    }
    
                }
            })
        }
        if (petion = true && numero >= dataPorcentaje) {
            if (k = dataSymptonPatology.length) {
                alertSymptom = true
                console.log("tienes la patologia de", flagTmp);
                let userAlertForm = {
                    id_user_alert: req.body.id_user,
                    description_alerts: typeAlerts.description_alerta,
                    symptoms_user: symtomsReturn
                }
                const dataAlert = await alerts_users.Create(userAlertForm)
                const data = await Service.Create(req.body)
                return res.success({ data: data, alertSymptom, userAlertForm, message: 'User create' }, 200)   
            }
        }else {
            alertSymptom = false
            console.log(req.body);
            console.log("segundo envio");
            const data = await Service.Create(req.body)
            return res.success({ data: data, alertSymptom, message: 'User create' }, 200)
        }


    }catch (e) {
        return res.error(e, 500)
    }

}

async function list(req, res, next) {
    try {
        const data = await Service.showAll()
        return res.success({ data: data, message: 'List users' }, 200)
    } catch (e) {
        return res.error(e, 500)
    }
}

async function show(req, res, next) {
    try {
        const data = await Service.getOne({ where: { flag: req.params.flag } })
        return res.success({ data: data, message: 'User' }, 200)

    } catch (e) {
        return res.error(e, 500)
    }
}
async function symptomsUsers(req, res, next) {
    console.log("req",req.params);

    try {
        const data = await Service.showAll({ where:{id_user:req.params.id_user}})
        return res.success({ data: data, message:'User'},200)
        


    } catch (e) {
        return res.error(e, 500)
    }
}

async function update(req, res, next) {
    try {
        const data = await Service.Update({ where: { id: req.params.id } }, req.body)
        return res.success({ data: data, message: 'User updated' }, 200)
    } catch (e) {
        return res.error(e, 500)
    }
}

export default {
    add,
    list,
    update,
    show,
    symptomsUsers
}