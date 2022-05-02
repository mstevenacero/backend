import service from './service.js'
import fs from 'fs';



import getTypeAlert from '../alerts_types/service.js'
import Alerts_users from '../alerts_users/service.js'
const alerts_users = new Alerts_users
const Service = new service
const alertaServices = new getTypeAlert
async function add(req, res, next) {
    let rawdata = fs.readFileSync('./residences/residences.json');
    let student = JSON.parse(rawdata);
    //console.log("data estudents", student);
    console.log("reques", req.body.date_of_birth);
    const dateYears = req.body.date_of_birth;
    const lifeAlone = req.body.life_alone

    console.log("vive solo", lifeAlone);
    ///////////funtions dateyears
    /////////
    ////////////////
    let hoy = new Date()
    let fechaNacimiento = new Date(dateYears)
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
    let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
    if (
        diferenciaMeses < 0 ||
        (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
    ) {
        edad--
    }
    console.log("edada", edad);
    const residentAlert = req.body.residencia;
    console.log(residentAlert);
    let resTmp = false
    const dataResident = student.map(item=>{
        //console.log("ietm",item.Ubicacion);
        if(item.Ubicacion === residentAlert){
             return resTmp = true
        }else{
            console.log("estado de alerta",false);
        }
    })
    console.log(resTmp);
    let alertSymptom = false
    if (edad < 14 && lifeAlone == 'Si' && resTmp !== true || edad < 14 && lifeAlone == 'Si' && resTmp !== true || edad > 60 && lifeAlone == 'Si' && resTmp !== true || edad > 60 && lifeAlone == 'Si' && resTmp !== true) {
        console.log("entramos al primer caso");
        const data = await Service.Create(req.body)
        const dateUser = await Service.getOne({ where: { email: req.body.email } })
        console.log("entre al user", dateUser.dataValues['id']);
        const userId = dateUser.dataValues['id'];
        alertSymptom = true
        //inicio de alertas de edad//
        const type = "edad y vive solo";
        const typeAlerts = await alertaServices.getOne({ where: { type_alert: type } });
        const descripcionAlert = typeAlerts.dataValues['description_alerta']
        console.log(descripcionAlert);
        let userAlertForm = {
            id_user_alert: userId,
            description_alerts: descripcionAlert,
            symptoms_user: {}
        }
        const dataAlert = await alerts_users.Create(userAlertForm)
        console.log("userAlertForm", userAlertForm)
        return res.success({ data: data, userAlertForm, alertSymptom, message: 'User create' }, 200)

    }
    if (edad < 14 && resTmp == true && lifeAlone == "No") {
        console.log("entramos al segundo caso");
        const data = await Service.Create(req.body)
        const dateUser = await Service.getOne({ where: { email: req.body.email } })
        console.log("entre al user", dateUser.dataValues['id']);
        const userId = dateUser.dataValues['id'];
        alertSymptom = true
        //inicio de alertas de edad//
        const type = "menor y Zona de riesgo";
        const typeAlerts = await alertaServices.getOne({ where: { type_alert: type } });
        const descripcionAlert = typeAlerts.dataValues['description_alerta']
        console.log(descripcionAlert);
        let userAlertForm = {
            id_user_alert: userId,
            description_alerts: descripcionAlert,
            symptoms_user: {}
        }
        const dataAlert = await alerts_users.Create(userAlertForm)
        console.log("userAlertForm", userAlertForm)
        return res.success({ data: data, userAlertForm, alertSymptom, message: 'User create' }, 200)

    }
    if (edad > 60 && resTmp == true && lifeAlone == "No" ) {
        console.log("entramos al tercer caso");
        const data = await Service.Create(req.body)
        const dateUser = await Service.getOne({ where: { email: req.body.email } })
        console.log("entre al user", dateUser.dataValues['id']);
        const userId = dateUser.dataValues['id'];
        alertSymptom = true
        //inicio de alertas de edad//
        const type = "mayor y Zona de riesgo";

        const typeAlerts = await alertaServices.getOne({ where: { type_alert: type } });
        const descripcionAlert = typeAlerts.dataValues['description_alerta']
        console.log(descripcionAlert);
        let userAlertForm = {
            id_user_alert: userId,
            description_alerts: descripcionAlert,
            symptoms_user: {}
        }
        const dataAlert = await alerts_users.Create(userAlertForm)
        console.log("userAlertForm", userAlertForm)
        return res.success({ data: data, userAlertForm, alertSymptom, message: 'User create' }, 200)

    }
    if (lifeAlone == "Si" && resTmp == true ) {
        console.log("entramos al cuarto caso");
        const data = await Service.Create(req.body)
        const dateUser = await Service.getOne({ where: { email: req.body.email } })
        console.log("entre al user", dateUser.dataValues['id']);
        const userId = dateUser.dataValues['id'];
        alertSymptom = true
        //inicio de alertas de edad//
        const type = "solo y Zona de riesgo";
        const typeAlerts = await alertaServices.getOne({ where: { type_alert: type } });
        const descripcionAlert = typeAlerts.dataValues['description_alerta']
        console.log(descripcionAlert);
        let userAlertForm = {
            id_user_alert: userId,
            description_alerts: descripcionAlert,
            symptoms_user: {}
        }
        const dataAlert = await alerts_users.Create(userAlertForm)
        console.log("userAlertForm", userAlertForm)
        return res.success({ data: data, userAlertForm, alertSymptom, message: 'User create' }, 200)

    }
    if (edad > 60 && lifeAlone == "Si" && resTmp == true) {
        console.log("entramos al penultimo caso");
        const data = await Service.Create(req.body)
        const dateUser = await Service.getOne({ where: { email: req.body.email } })
        console.log("entre al user", dateUser.dataValues['id']);
        const userId = dateUser.dataValues['id'];
        alertSymptom = true
        //inicio de alertas de edad//
        const type = "mayor,solo y Zona de riesgo";
        const typeAlerts = await alertaServices.getOne({ where: { type_alert: type } });
        const descripcionAlert = typeAlerts.dataValues['description_alerta']
        console.log(descripcionAlert);
        let userAlertForm = {
            id_user_alert: userId,
            description_alerts: descripcionAlert,
            symptoms_user: {}
        }
        const dataAlert = await alerts_users.Create(userAlertForm)
        console.log("userAlertForm", userAlertForm)
        return res.success({ data: data, userAlertForm, alertSymptom, message: 'User create' }, 200)

    }
    if (edad < 14 && lifeAlone == "Si" && resTmp == true ) {
        console.log("entramos al ultimo caso");
        const data = await Service.Create(req.body)
        const dateUser = await Service.getOne({ where: { email: req.body.email } })
        console.log("entre al user", dateUser.dataValues['id']);
        const userId = dateUser.dataValues['id'];
        alertSymptom = true
        //inicio de alertas de edad//
        const type = "menor,solo y Zona de riesgo";
        const typeAlerts = await alertaServices.getOne({ where: { type_alert: type } });
        const descripcionAlert = typeAlerts.dataValues['description_alerta']
        console.log(descripcionAlert);
        let userAlertForm = {
            id_user_alert: userId,
            description_alerts: descripcionAlert,
            symptoms_user: {}
        }
        const dataAlert = await alerts_users.Create(userAlertForm)
        console.log("userAlertForm", userAlertForm)
        return res.success({ data: data, userAlertForm, alertSymptom, message: 'User create' }, 200)

    }
    if (lifeAlone == "Si") {
        console.log("entramos al quinto caso");
        const data = await Service.Create(req.body)
        const dateUser = await Service.getOne({ where: { email: req.body.email } })
        console.log("entre al user", dateUser.dataValues['id']);
        const userId = dateUser.dataValues['id'];
        alertSymptom = true
        //inicio de alertas de edad//
        const type = "solo";
        const typeAlerts = await alertaServices.getOne({ where: { type_alert: type } });
        const descripcionAlert = typeAlerts.dataValues['description_alerta']
        console.log(descripcionAlert);
        let userAlertForm = {
            id_user_alert: userId,
            description_alerts: descripcionAlert,
            symptoms_user: {}
        }
        const dataAlert = await alerts_users.Create(userAlertForm)
        console.log("userAlertForm", userAlertForm)
        return res.success({ data: data, userAlertForm, alertSymptom, message: 'User create' }, 200)

    }
    if (resTmp == true) {
        console.log("entramos al sexto caso");
        const data = await Service.Create(req.body)
        const dateUser = await Service.getOne({ where: { email: req.body.email } })
        console.log("entre al user", dateUser.dataValues['id']);
        const userId = dateUser.dataValues['id'];
        alertSymptom = true
        //inicio de alertas de edad//
        const type = "Zona de riesgo";
        const typeAlerts = await alertaServices.getOne({ where: { type_alert: type } });
        const descripcionAlert = typeAlerts.dataValues['description_alerta']
        console.log(typeAlerts.dataValues['description_alerta']);
        console.log("entre 2");
        let userAlertForm = {
            id_user_alert: userId,
            description_alerts: descripcionAlert,
            symptoms_user: {}
        }
        const dataAlert = await alerts_users.Create(userAlertForm)
        console.log("userAlertForm", userAlertForm)
        return res.success({ data: data, userAlertForm, alertSymptom, message: 'User create' }, 200)
    }
    try {
        if (edad > 60) {
            console.log("entramos al septimo caso");
            const data = await Service.Create(req.body)
            const dateUser = await Service.getOne({ where: { email: req.body.email } })
            console.log("entre al user", dateUser.dataValues['id']);
            const userId = dateUser.dataValues['id'];
            alertSymptom = true
            //inicio de alertas de edad//
            const type = "mayor";
            const typeAlerts = await alertaServices.getOne({ where: { type_alert: type } });
            const descripcionAlert = typeAlerts.dataValues['description_alerta']
            console.log(descripcionAlert);
            console.log("entre 2");
            let userAlertForm = {
                id_user_alert: userId,
                description_alerts: descripcionAlert,
                symptoms_user: {}
            }
            const dataAlert = await alerts_users.Create(userAlertForm)
            console.log("userAlertForm", userAlertForm)
            return res.success({ data: data, userAlertForm, alertSymptom, message: 'User create' }, 200)

        }
        if (edad < 14) {
            console.log("entramos al octavo caso");
            const data = await Service.Create(req.body)
            const dateUser = await Service.getOne({ where: { email: req.body.email } })
            console.log("entre al user", dateUser.dataValues['id']);
            const userId = dateUser.dataValues['id'];
            alertSymptom = true
            //inicio de alertas de edad//
            const type = "menor";
            const typeAlerts = await alertaServices.getOne({ where: { type_alert: type } });
            const descripcionAlert = typeAlerts.dataValues['description_alerta']
            console.log(descripcionAlert);
            console.log("entre 2");
            let userAlertForm = {
                id_user_alert: userId,
                description_alerts: descripcionAlert,
                symptoms_user: {}
            }
            const dataAlert = await alerts_users.Create(userAlertForm)
            console.log("userAlertForm", userAlertForm)
            return res.success({ data: data, userAlertForm, alertSymptom, message: 'User create' }, 200)

        } else {
            const data = await Service.Create(req.body)
            return res.success({ data: data, message: 'User create' }, 200)
        }
    } catch (e) {
        return res.error({ e, message: 'no se pudo crear' }, 500)
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
        const data = await Service.getOne({ where: { id: req.params.id } })
        return res.success({ data: data, message: 'User' }, 200)

    } catch (e) {
        return res.error(e, 500)
    }
}
async function autentication(req, res, next) {

    try {
        console.log("lo que llega", req.body);
        const email = req.body.email
        const password = req.body.password
        const data = await Service.getOne({ where: { email: email, password: password } })
        if (data.dataValues) {
            return res.success({ data: data, message: 'User' }, 200)
        }
        return res.status(400).send('email o contraseña no valida')

    } catch (e) {
        return res.error(e, 500)
    }
}

async function update(req, res, next) {
    try {
        const data = await Service.Update({ where: { email: req.params.email } }, req.body)
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
    autentication
}