import React, { Component } from "react";

const empname="Rageshri Tevani";
const empid="1007";
const empsalary=99500;
const compname="Tops Technology";

class Employee extends Component
{
    render()
    {
        return(
            <>
                <h1 align="center">Basic Data of An Employee</h1>
                <p align="center">name of an employeee is <b>{empname}</b><br/> 
                id of an employee <b>{empid}</b><br/>
                salary of an employee <b>{empsalary}</b><br/>
                </p>
            </>
        )
    }
}

class Company extends Employee
{
    render()
    {
        return(
            <>
            <Employee/>
                <h1 align="center">Basic Data of Company</h1>
                <p align="center">name of a company is <b>{compname}</b><br/></p>
            </>
        )
    }
}

export default Company