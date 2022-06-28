 
 
const db = require('../../database/models');
 

const categoriesController = {
    list: (req, res) => {
        db.Category 
        .findAll(
          {
            attributes:['name','id' , 'type_id'],
            include: [
                {association: 'type'} 
            ]  
          }
        )
        .then(categories =>{
            return res.status(200).json({ 
                meta:{
                    total: categories.length,
                    status: 200,
                    url: 'http://localhost:3001/api/categories/list'
                },
                data: categories
                 
            })
        })
        .catch(error => res.send(error))     
    } 
}
 
module.exports = categoriesController;