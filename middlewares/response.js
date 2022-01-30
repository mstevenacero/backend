'use strict'

import _ from 'lodash';
  
export default (req,res,next) =>{

    res.success = (data,code) => {
      return res
        .status(code)
        .json(data)
    }

    res.error = (message,code) => {
      return res
        .status(code)
        .json({error : message})
    }

    res.showOne = (row,code = 200) => {
      return res
        .success(row,code);
    }

    res.showAll = (collection,code = 200) => {
      
      collection = res.filterQuery(collection)

      if (req.query.pagination == 'true'){
        let paginated = res.paginate(collection)
        
        return res.success(paginated,code)
      }
    
      return res.success({data:collection},code)
    }    

    res.paginate = (data)=>{  
  
      let page = (req.query.page ? parseInt(req.query.page) : 1)
      let per_page = (req.query.per_page ? parseInt(req.query.per_page) : 10)
    
      let from = ((page * per_page) - per_page)
      let to = (page * per_page)
    
      let paginated = data.slice(from,to)
    
      let pagination = {    
        total:data.length,        
        current_page:page,
        per_page:per_page,            
        last_page:Math.ceil(data.length / per_page),
        from:from,
        to:to
      }
      
      return {    
        data: paginated,    
        pagination:pagination
      }
    }


    res.filterQuery = (collection) => {
      let columns = []
      let filtred = collection
      
      let originalColumns = getAttributes(collection)
      
      // if params columns is defined, then is splited
      if (req.query.columns && req.query.columns.length > 0){
        columns = req.query.columns.split(',')
    
        // vefify param in original columns collection
        columns = verifyAttributes(originalColumns,columns)
      }  
      else{
        //if columns param is not defined 
        columns = originalColumns
      }
    
      if (req.query.search && req.query.search.length > 0){
    
        let _filtred = []
        filtred = []
    
        columns.map((col)=>{        
            _filtred = collection.filter((item)=>{
              
              //the search not found in object or arrays
              if (item[col] === null || item[col] === undefined){            
                return ''
              }
    
              let _item = item[col].toString().toUpperCase()
              
              return (_item.indexOf(req.query.search.toUpperCase()) != -1)
            })     
            
            if (_filtred.length > 0){
              filtred = _filtred
              return true
            }
        })
      }
    
      return filtred
    }

    req.omit = (array) => {
      const filled = _(array).omit(_.isUndefined).omit(_.isNull).value()

      return filled
    }

  
    next()
  }

// extrac columns attributes of array collection
function getAttributes(collection){

  //convert collecion in a simple array 
  let row = JSON.parse(JSON.stringify(collection));    

  //get the first element
  let _first = _.first(row)

  //get keys attributes
  return _.keys(_first,(i) => i)
}

function verifyAttributes(originalColumns,columns){
  
  return columns.filter((col) => {
    return (_.indexOf(originalColumns,col) > -1)
  })
}