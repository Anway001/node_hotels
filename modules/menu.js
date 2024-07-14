const mongoose= require('mongoose')

const menuSchema = new mongoose.Schema({
    name:{
        type :String ,
        required:true
    },
    type:{
        type:String,
        
    },
    taste:{
        type:String,
        enum:['sweet','salty','spicy','bitter']
    },
    isDrinK:{
        type: Boolean,
        default:false
    },
    cost:{
        type : Number,
        required:true
    },
    count:{
        type:Number,
        default:0
    }

})

const menu = mongoose.model('menu',menuSchema)

module.exports=menu