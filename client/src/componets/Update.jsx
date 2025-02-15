
import { useState,useEffect } from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Update=()=>{

    const [val,setval] =useState([]);
    const navigate = useNavigate()

    const loadata=()=>{
        let api = "http://localhost:8000/employee/empDisplay";
        axios.get(api).then((res)=>{
           setval(res.data)
        })
    }

    useEffect(()=>{
        loadata()
    },[])


    const mydel=(id)=>{
      let api="http://localhost:8000/employee/empDelete";
      axios.post(api,{id:id}).then((res)=>{
        alert("data deleted sucssfully")
        loadata()
      })
    }

    const myedt=(id)=>{
      navigate(`/edit/${id}`)
    }

    let sno=0
    const ans = val.map((key)=>{
        sno++
        return(
            <>
            <tr>
                {/* <td>{sno}</td> */}
                <td>{key.empno}</td>
                <td>{key.empname}</td>
                <td>{key.empsub}</td>
                <td>{key.empcity}</td>
                <a href="">
                    <button  onClick={()=>{mydel(key._id)}}>Delete</button>
                </a>

                <a href="">
                    <button  onClick={()=>{myedt(key._id)}}>edit</button>
                </a>
            </tr>
            
            
            </>
        )
    })




    return(
        <>
        
        
        <h1>This is update page</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          {/* <th>sno</th> */}
          <th>Empno</th>
          <th>Empname</th>
          <th>EmpSubject</th>
          <th>EmpCity</th>
          
        </tr>
      </thead>
      <tbody>
      {ans}
      </tbody>
      </Table>
        </>
    )
    }
    
    export default Update;