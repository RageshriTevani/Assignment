import React from "react";
const empname="Rageshri Tevani";
const empid=1001;
const empsalary=99700;
const empdept="IT";
const city="Chicago";
const compname="8th Light"


        // ==>>>  normal function  <<<==

// function Employee()
// {
//     return(
//         <>
//         <div align="center">
//             <h1>Details of an Employee</h1>
//             <p>Employee Name: <b>{empname}</b> <br/><br/>
//                 Employee Id: <b>{empid}</b> <br/><br/>
//                 Employee Salary: <b>{empsalary}</b><br/><br/>
//                 Employee Department: <b>{empdept}</b> <br/><br/>
//                 City of an Employee: <b>{city}</b>
//                 </p>
//         </div>
//         </>
//     )
// }




//     ==>  arrow function  <==
// const Employee=()=>{
//     return(
//         <>
//             <div align="center">
//                 <h1>Details of an Employee</h1>
//                 <p>Employee's Name: <b>{empname}</b><br/><br/>
//                 Employee Salary: <b>{empsalary}</b><br/><br/>
//                 Employee Department: <b>{empdept}</b> <br/><br/>                 
//                 City of an Employee: <b>{city}</b>
//                 </p>
//             </div>
//         </>
//     )
// }


const Employee=()=>{
    return(
        <>
        <div align="center">
            <h1>Details of An Employee</h1>
            <p>Name of an Employee: <b>{empname}</b> <br/> 
            Employee Id: <b>{empid}</b> <br/>
            Employee Department: <b>{empdept}</b> <br/>
            Employee Salary: <b>{empsalary}</b><br/>
            city: <b>{city}</b>
            </p>
        </div>
        </>
    )
}

const Company=()=>{
    return(
        <>
        <div align="center">
            <Employee/>
            <h1>Details of The Company</h1>
            <p>Name of a Company: <b>{compname}</b> <br/>
            city: <b>{city}</b>
            </p>
        </div>
        </>
    )
}


export default Company