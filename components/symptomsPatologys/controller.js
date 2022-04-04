import service from './service.js'
const Service = new service



async function add(req, res, next){
    
    try{
        const data = await Service.Create(req.body)
        return res.success({ data: data,alertSymptom ,message:'User create'},200)

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
        const data = await Service.getOne({ where: {id:req.params.id} })
        return res.success({ data: data, message:'User'},200)

    } catch(e){
        return res.error(e, 500)
    }
}
async function listPatologySymtons(req, res, next){
console.log("llegamos aca ");

    try{
        console.log("lo que llega",req.params.code_patology);
        const data = await Service.showAll({where:{code_patology:req.params.code_patology }})
        return res.success({ data: data, message:'patology lisy'},200)
       
    
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
    listPatologySymtons
}