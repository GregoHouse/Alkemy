 
 
const db = require('../../database/models');

 

const operationsController = {
    list: (req, res) => {
        db.Operation 
        .findAll(
          {
            attributes:['id', 'date', 'concept', 'amount'],
            include: [
                {association: 'user'},
                {association: 'category'} 
            ] 
          }
        )
        .then(operations =>{
            return res.status(200).json({ 
                meta:{
                    total: operations.length,
                    status: 200,
                    url: 'http://localhost:3001/api/operations/list'
                },
                data: operations
                 
            })
        })
        .catch(error => res.send(error))     
    },
    pagesList: (req, res) => {
        db.Operation 
        .findAll(
          {
            attributes:['id', 'date', 'concept', 'amount']
          }
        )
        .then(operations =>{
           
            const page = Number.parseInt(req.query.page);
            console.log(page);
            const limit =  10;
            const startIndex = (page-1)*limit;
            const endIndex = page * limit;
            const results = {};
            
            if(endIndex < users.length){
                results.next = {
                    page: page + 1,
                    limit: limit
                }
            }
    
            if(startIndex > 0) {
                results.previus = {
                    page: page - 1,
                    limit: limit
                }
            }
            results.results = operations.slice(startIndex, endIndex);
            return res.status(200).json({ 
                meta:{
                    total: operations.length,
                    status: 200,
                    url: 'http://localhost:3001/api/operations?page='
                },
                data: results 
                 
            })
        })
        .catch(error => res.send(error))       
    },
    create: (req, res) => {
        let operationToCreate = req.body
        console.log(operationToCreate);
        db.Operation
        .create({
            date: operationToCreate.date,
            concept: operationToCreate.concept,
            amount: operationToCreate.amount,
            user_id: operationToCreate.user_id,
            category_id: operationToCreate.category_id
        })
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/operations/create'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'api/operations/create'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error)) 
    },
    update: (req,res) => {
        let operationId = req.params.id;
        let operationToUpdate = req.body
        console.log(operationToUpdate);
        console.log(operationId);
        db.Operation
        console.log('hola llegando al update')
        .update({
            date: operationToUpdate.date,
            concept: operationToUpdate.concept,
            amount: Number(operationToUpdate.amount) ,
            category_id: Number(operationToUpdate.category_id) 
            },
            {
                where: {id: operationId}
        })
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/operations/update/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'api/operations/update/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error)) 
},
destroy: (req,res) => {
    let operationId = req.params.id;
    db.Operation
    .destroy({where: {id: operationId}, force: true}) // force: true es para asegurar que se ejecute la acción
    .then(confirm => {
        let respuesta;
        if(confirm){
            respuesta ={
                meta: {
                    status: 200,
                    total: confirm.length,
                    url: 'api/operations/delete/:id'
                },
                data:confirm
            }
        }else{
            respuesta ={
                meta: {
                    status: 204,
                    total: confirm.length,
                    url: 'api/operations/delete/:id'
                },
                data:confirm
            }
        }
        res.json(respuesta);
    })    
    .catch(error => res.send(error))
}
}  
 
module.exports = operationsController; 