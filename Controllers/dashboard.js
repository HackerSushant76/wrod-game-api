const { Dash } = require("../Models/dashboard.model")

const addData = async(req,res)=>{
    const {name,score} = req.body
    const data = new Dash({name,score})
    await data.save()
    res.send("success")
}

const getData = async(req,res)=>{
    const data = await Dash.find()
    res.send(data)
}

module.exports = {
    addData,getData
}