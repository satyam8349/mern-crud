const empModel = require("../Models/empModels")



const empSave=async(req,res)=>{
 const {empno,empname,empsub,empcity} = req.body;

 const data = await empModel.create({
    empno:empno,
    empname:empname,
    empsub:empsub,
    empcity:empcity
 })

 res.send(data)
}

const empDisplay=async(req,res)=>{
    const data = await empModel.find()
    res.send(data)
}


// const empSearch=async(req,res)=>{

//     const {empno} = req.body;
//     const data = await empModel.find({empno:empno});
//     res.send(data);

// }



const empSearch = async (req, res) => {
    try {
        const { empno } = req.body;
        if (!empno) return res.status(400).json({ error: "Employee number is required" });

        const data = await empModel.find({ empno });
        if (!data.length) return res.status(404).json({ message: "No employee found" });

        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const empDelete=async(req,res)=>{
   const myid = req.body.id
   const data =await empModel.findByIdAndDelete(myid)
   res.send("data deleted")
}

const empEdit=async(req,res)=>{
    const myid = req.body.id;
    const data = await empModel.findById(myid)
    res.send(data)
}

const empUpdate=async(req,res)=>{
  const {_id,empno,empname,empsub,empcity} = req.body;

  const data = await empModel.findByIdAndUpdate(_id,{
    empno:empno,
    empname:empname,
    empsub:empsub,
    empcity:empcity
  })
  res.send(data)
}


module.exports={
    empSave,
    empDisplay,
    empSearch,
    empDelete,
    empEdit,
    empUpdate
}