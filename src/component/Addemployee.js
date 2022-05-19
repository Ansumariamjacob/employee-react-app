import React, { useState } from 'react'
import Header from './Header'

const Addemployee = () => {
    var [empid,setId]=useState("")
    var [empname,setName]=useState("")
    var [description,setDes]=useState("")
    var [salary,setSalary]=useState("")
    var [company,setCName]=useState("")
    var [dob,setDob]=useState("")
    var [email,setEmail]=useState("")
    const subData=()=>{
      const  data={"empid":empid,"empname":empname,"description":description,"salary":salary,"company":company,"dob":dob,"email":email}
      console.log(data)}
      
    
  return (
    <div>
        <Header/>
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Employee id</label>
                    <input onChange={(e)=>{setId(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Employee name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">description</label>
                    <input onChange={(e)=>{setDes(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">salary</label>
                    <input onChange={(e)=>{setSalary(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Company name</label>
                    <input onChange={(e)=>{setCName(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">D.O.B</label>
                    <input onChange={(e)=>{setDob(e.target.value)}} type="date" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Email</label>
                    <input onChange={(e)=>{setEmail(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button   class="btn btn-info">CLEAR</button>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={subData} class="btn btn-success">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Addemployee