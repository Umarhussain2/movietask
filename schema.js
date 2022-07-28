const mongoose=require('mongoose')
var firstschema= new mongoose.Schema(
    {
        Moviename:{type:String},
        Rating:{type:Number},
       Cast:{type:Array},
       Genre:{type:String}
    },
   
    {
        collection:"mom"
    }
    

);
module.exports=mongoose.model('firstmodel',firstschema)
