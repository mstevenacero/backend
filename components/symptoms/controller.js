import service from './service.js'
import Alerts_users from '../alerts_users/service.js'
import symptomsService from '../symptoms-polls/service.js'
import alertsTypesService from '../alerts_types/service.js'
const alertaServices = new alertsTypesService
const Service = new service
const symptomsUser= new symptomsService
const alerts_users = new Alerts_users



async function add(req, res, next){
    //falta traer en tipo de alerta con su debida descripcion 
    
    console.log("body del request2 ",req.body.data_symptoms)
    console.log("body del request ",req.body.id_user_symptoms)
    const dataSymptons = await symptomsUser.getOne({where:{id_symptoms :req.body.id_user_symptoms}})
    const type = "sintomatologia";
    const typeAlerts = await  alertaServices.getOne({where:{type_alert:type}});
    console.log("SINTOMAS DEL ID ", dataSymptons['dataValues'].data_symptoms_poll['symptons']);
    const symtomsReturn = req.body.data_symptoms
    const dataUserSymptoms =req.body.data_symptoms['data'].length;
    const dataTmpSymptoms = dataSymptons['dataValues'].data_symptoms_poll['symptons'].length
    let alertSymptom = false

    try{
        console.log("userst",dataUserSymptoms);
        console.log("tropm",dataTmpSymptoms);
        console.log("false",alertSymptom);
        dataUserSymptoms>=dataTmpSymptoms?alertSymptom = true:alertSymptom=false
        console.log("cambios",alertSymptom);
        if(alertSymptom == true){
            console.log("entre");
            let userAlertForm ={
                id_user_alert:req.body.id_user,
                description_alerts:typeAlerts.description_alerta,
                symptoms_user:symtomsReturn
            }
           console.log("userAlertForm",userAlertForm)
            const dataAlert = await alerts_users.Create(userAlertForm)
            const data = await Service.Create(req.body)
            return res.success({ data: data,alertSymptom ,userAlertForm,message:'User create'},200)
           
        }else{
        const data = await Service.Create(req.body)
        return res.success({ data: data,alertSymptom ,message:'User create'},200)
    }

    } catch(e){
        return res.error(e, 500)
    }
}

async function list(req, res, next){
    try{
        const data = await Service.showAll()
        return res.success({data: data,message:'List users'},200)
    } catch(e){
        return res.error(e, 500)
    }
}

async function show(req, res, next){
    try{
        const data = await Service.getOne({ where: { flag:req.params.flag} })
        return res.success({ data: data, message:'User'},200)

    } catch(e){
        return res.error(e, 500)
    }
}
async function symptomsUsers(req, res, next){

    try{
        console.log("lo que llega",req.body);
        const flag = req.body.flag
        const data = await Service.getOne({where:{flag:flag }})
            return res.success({ data: data, message:'Symptoms'},200).send('login exitoso')
       
    
    }catch(e){
        return res.error(e, 500)
    }    
}

async function update(req, res, next){
    try{
        const data = await Service.Update({ where: { id: req.params.id } },  req.body)
        return res.success({data: data, message:'User updated' },200)
    } catch(e){
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