import service from './service.js'
const Service = new service



async function add(req, res, next){
    console.log("body",req.body);
    
    try{
        const data = await Service.Create(req.body)
        return res.success({ data: data,message:'User create'},200)

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

    let user_id = req.params.user_id
    try{
        const data = await Service.showAll({ where: {user_id:user_id} })     
        return res.success({ data: data, message:'User'},200)

    } catch(e){
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
    show
}