import React from 'react';
import { useState } from 'react'





function Crud()
{

const [eid, setEmpId] = useState();
const [ename, setName] = useState();
const [email, setEmpmail] = useState();
const [esalary, setEmpsalary] = useState();
const [option, setOption] = useState();

const onSubmithandler= (e) => {
    console.log(option+ "asdasdasdsad")
var url='http://localhost:8080/'
    if (option ==1)
    {
    url = url+'create'
    }
   else if (option == 2)
    {
    url = url+'add'
    }
    if (option ==3)
    {
    url = url+'update'
    }
    if (option == 4)
    {
    url = url+'delete'
    }

    var data=
    {
        "id": eid,
        "name": ename,
        "salary" : esalary,
        "email":email
        }
    
    
    const requestoptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    fetch(url, requestoptions)
        .then(response => console.log(response))
    e.preventDefault();
}



    return <div className="crud">
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                                <form className="form-group"  onSubmit={e => {onSubmithandler(e) }}>
                                            <div className="form-group">
                                                <label >Id</label>
                                                <input type="number"  className="form-control" value = {eid} name="eid"  placeholder="Enter id" onChange={e => setEmpId(e.target.value)} />
                                            </div>

                                            <div className="form-group">
                                                <label >Name</label>
                                                <input className="form-control" value = {ename} name="ename" type="text" placeholder="Enter name" onChange={e => setName(e.target.value)} />
                                            </div>

                                            <div className="form-group">
                                                <label >Email address</label>
                                                <input type="email" className="form-control" value = {email} name="email" placeholder="Enter email" onChange={e => setEmpmail(e.target.value)} />
                                            </div>
                                            
                                            <div className="form-group">
                                                <label f>salary</label>
                                                <input type="number" className="form-control" value = {esalary} name="esalary" placeholder="enter salary" onChange={e => setEmpsalary(e.target.value)} />
                                            </div>



                                            <div className="form-group">
                                            <select value={option} onChange={e => setOption(e.target.value)} class="form-select" aria-label="Default select example">
                                                <option >Open this select menu</option>
                                                <option value="1">create</option>
                                                <option value="2">add</option>
                                                <option value="3">update</option>
                                                <option value="4">delete</option>
                                                </select>
                                            </div>
                                            <input type='submit' value='submit'/>
                                     
                                </form>
                </div>
            </div>
            
        </div>
            </div>

       

}
export default Crud