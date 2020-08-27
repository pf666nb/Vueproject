const fs = require('fs');

module.exports ={

    devServer:{

        before(app,serve){
            app.get('/api/goods/home',(req,res)=>{

                fs.readFile('./server/db/home.json','utf-8',(err,data)=>{

                    if(!err){

                        res.json(JSON.parse(data));
                    }
                })
            })


        }
    }


}