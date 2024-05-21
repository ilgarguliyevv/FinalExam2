const Menu = require("../models/cardModels.js")

const getAllMenu= async (req,res) => {
    try {
        const allMenu= await Menu.find({})
        res.send(allMenu)
    } catch (error) {
        res.send(error)
    }
}

const getAllMenuById = async (req,res)=> {
    try {
        const {id}=req.params
        const getAllById= await Menu.findById({_id:id})
        res.send(getAllById)
    } catch (error) {
        res.send(error)
    }
}

const deleteMenu= async (req,res)=> {
    try {
        const {id} = req.params
        const deletedMenu= await Menu.findOneAndDelete({_id:id})
        res.send(deletedMenu)
    } catch (error) {
        res.send(error)
    }
}

const postMenu = async (req,res) => {
    try {
        const obj=req.body
        const newMenu= new Menu(obj)
        newMenu.save()
        res.send(newMenu)
    } catch (error) {
        res.send(error)
    }
}

const patchMenyu= async (req,res) => {
    try {
        const {id}=req.params
        const editedMenu= await Menu.findOneAndUptade({_id: id})
        res.send(editedMenu)
    } catch (error) {
        res.send(error)
    }
}



module.exports= {getAllMenu,deleteMenu,getAllMenuById,postMenu,patchMenyu}