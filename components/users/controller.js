import service from './service.js'
import getTypeAlert from '../alerts_types/service.js'
import Alerts_users from '../alerts_users/service.js'
const alerts_users = new Alerts_users
const Service = new service
const alertaServices = new getTypeAlert

async function add(req, res, next){
console.log("reques",req.body.date_of_birth);
const dateYears= req.body.date_of_birth;
const residentAlert = req.body.residencia;
let alertSymptom = false
    if(residentAlert=='soacha'||residentAlert=='sibate'){
        console.log("entramos a ala creacion de usuario");
            const data = await Service.Create(req.body)
            const dateUser = await Service.getOne({where:{email:req.body.email}})
            console.log("entre al user",dateUser.dataValues['id']);
            const userId= dateUser.dataValues['id'];
            alertSymptom = true
            //inicio de alertas de edad//
            const type = "Zona de riesgo";
            const typeAlerts = await  alertaServices.getOne({where:{type_alert:type}});
            const descripcionAlert =typeAlerts.dataValues['description_alerta']
            console.log(typeAlerts.dataValues['description_alerta']);
            console.log("entre 2");
            let userAlertForm ={
                id_user_alert:userId,
                description_alerts:descripcionAlert,
                symptoms_user:{}
            }
            const dataAlert = await alerts_users.Create(userAlertForm)
           console.log("userAlertForm",userAlertForm)
            return res.success({ data: data,userAlertForm,alertSymptom, message:'User create'},200)
    }
    try{
        if(dateYears>60){
            console.log("entramos a ala creacion de usuario");
            const data = await Service.Create(req.body)
            const dateUser = await Service.getOne({where:{email:req.body.email}})
            console.log("entre al user",dateUser.dataValues['id']);
            const userId= dateUser.dataValues['id'];
            alertSymptom = true
            //inicio de alertas de edad//
            const type = "mayor";
            const typeAlerts = await  alertaServices.getOne({where:{type_alert:type}});
            const descripcionAlert =typeAlerts.dataValues['description_alerta']
            console.log(descripcionAlert);
            console.log("entre 2");
            let userAlertForm ={
                id_user_alert:userId,
                description_alerts:descripcionAlert,
                symptoms_user:{}
            }
            const dataAlert = await alerts_users.Create(userAlertForm)
           console.log("userAlertForm",userAlertForm)
            return res.success({ data: data,userAlertForm,alertSymptom, message:'User create'},200)

        }else{
        const data = await Service.Create(req.body)
        return res.success({ data: data, message:'User create'},200)
        }
    } catch(e){
        return res.error({e, message:'no se pudo crear'}, 500)
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
        const data = await Service.getOne({ where: { id: req.params.id } })
        return res.success({ data: data, message:'User'},200)

    } catch(e){
        return res.error(e, 500)
    }
}
async function autentication(req, res, next){

    try{
        console.log("lo que llega",req.body);
        const email = req.body.email
        const password =req.body.password
        const data = await Service.getOne({where:{email:email , password:password }})
        if(data.dataValues){
            return res.success({ data: data, message:'User'},200)
        }
        return res.status(400).send('email o contraseña no valida')
    
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
    autentication
}