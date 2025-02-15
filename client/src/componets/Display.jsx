import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';



const Display=()=>{

    const [val,setval] =useState([]);

    const loadata=()=>{
        let api = "http://localhost:8000/employee/empDisplay";
        axios.get(api).then((res)=>{
           setval(res.data)
           console(res.data)
        })
    }

    useEffect(()=>{
        loadata()
    },[])

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
            </tr>
            
            
            </>
        )
    })
    return(
        <>
        
        
        <h1>This is display page</h1>
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
    
    export default Display;