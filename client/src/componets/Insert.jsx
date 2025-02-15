import { useState } from "react";
import axios from "axios"



const Insert=()=>{

    const [input,setinput] = useState({})

    const handleInput=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setinput((values)=>({...values,[name]:value}))
        console.log(input)
    }

    const handleSubmit=()=>{
        let api="https://mern-crud-yl07.onrender.com/employee/empSave";
        axios.post(api,input ).then((res)=>{
          alert("data save sucessfully")
        }) 
        
    }
    return(
        <>
        
        
        <h1>This is insert page</h1>


       Inter empno: <input type="text" name="empno" value={input.empno} onChange={handleInput}/><br/>
     Inter empname:   <input type="text" name="empname" value={input.empname} onChange={handleInput}/><br/>
        Inter empsub:   <input type="text" name="empsub" value={input.empsub} onChange={handleInput}/><br/>
      Inter empcity  <input type="text" name="empcity" value={input.empcity} onChange={handleInput}/><br/>
        <button  onClick={handleSubmit}>Submit</button>
        </>
    )
    }
    
    export default Insert;