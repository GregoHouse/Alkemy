 
const db = require('../../database/models');
 

const typesController = {
    list: (req, res) => {
        db.Type
        .findAll(
          {
            attributes:['name','id']
              
          }
        )
        .then(types =>{
            return res.status(200).json({ 
                meta:{
                    total: types.length,
                    status: 200,
                    url: 'http://localhost:3001/api/types/list'
                },
                data: types
                 
            })
        })
        .catch(error => res.send(error))     
    } 
}
 
module.exports = typesController;