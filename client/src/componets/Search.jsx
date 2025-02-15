import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';



const Search=()=>{

    const [empno,setempno]=useState("")
    const [val,setval] =useState([])


    const handleSearch=()=>{
        let api = "http://localhost:8000/employee/empSearch";
        axios.post(api,{empno:empno}).then((res)=>{
            setval(res.data)
        
        })
    }


    // useEffect(()=>{
    //     handleSearch()
    // },[])

    const ans = val.map((key)=>{
     return(
        <>
        <tr>
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
        
        
        <h1>This is search page</h1>
        <input type="text" value={empno} onChange={(e)=>{setempno(e.target.value)}}/>
        <button  onClick={handleSearch}>Search</button>
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
    
    export default Search;