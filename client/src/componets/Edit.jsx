import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




const Edit=()=>{

    const {empid} =useParams()

    const [input,setinput] =useState({})


    const loaddata=()=>{
        let api="http://localhost:/employee/empEdit";
        axios.post(api,{id:empid}).then((res)=>{
           setinput(res.data)
           
        })
    }


    useEffect(()=>{
        loaddata()
    },[])


    const handleInput=(e)=>{
       let name = e.target.name
       let value = e.target.value
       setinput((values)=>({...values,[name]:value}))
    }

    const handleSubmit=()=>{
      let api="https://mern-crud-yl07.onrender.com/employee/empUpdate";
      axios.post(api,input).then((res)=>{
        alert("data updated sucessfully")
      })
    }

    return(
        <>
        <h1>This is edit page</h1>
        <input type="text" name="empno" value={input.empno} onChange={handleInput}/><br/>
        <input type="text" name="empname" value={input.empname} onChange={handleInput}/><br/>
        <input type="text" name="empsub" value={input.empsub} onChange={handleInput}/><br/>
        <input type="text" name="empcity" value={input.empcity} onChange={handleInput}/><br/>
        <button  onClick={handleSubmit}>Submit</button>
        
        </>
    )
}

export default Edit;