import service from './service.js'
const Service = new service


async function add(req, res, next) {
    try {
        const data = await Service.Create(req.body)
        return res.success({ data: data, alertSymptom, message: 'User create' }, 200)

    } catch (e) {
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

    console.log(re);

    try {
        console.log("lo que llega", req.body);
        const id = req.body.id
        const data = await Service.getOne({ where: { id: id } })
        return res.success({ data: data, message: 'Symptoms' }, 200).send('login exitoso')


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
async function getUsers(req, res, next) {
    console.log("peticion");
    //tener encuenta los params  para los get // de los servicios 
    try {
        const data = await Service.showAll({ where: { id_user_alert: req.params.id_user_alert } }, req.body)
        return res.success({ data: data, message: 'List users' }, 200)
    } catch (e) {
        return res.error(e, 500)
    }
}

export default {
    add,
    list,
    update,
    show,
    symptomsUsers,
    getUsers
}