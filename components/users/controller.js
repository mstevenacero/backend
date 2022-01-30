import service from './service.js'
const Service = new service

async function add(req, res, next){
    try{
        const data = await Service.Create(req.body)
        return res.success({ data: data, message:'User create'},200)

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
            return res.success({ data: data, message:'User'},200).send('login exitoso')
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