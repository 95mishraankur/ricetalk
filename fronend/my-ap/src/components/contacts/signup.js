
import React,{useState} from 'react'

import { useDispatch } from "react-redux";
import { addContact } from "../../actions/contactAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";
 
const Form = () =>
 {       let history = useHistory();
    const dispatch = useDispatch()
      const [ user, setUser] = useState({name:'',email:'',phone:'',profation:''})
     
      let name, value
      const setstate= async (e)=>
      {
         e.preventDefault()
         const {name,phone,email,profation}=user
         const new_contact = {
            id: shortid.generate(),
            name: name,
            phone: phone,
            email: email,
            profation:profation
          };
          dispatch(addContact(new_contact));
          history.push("/");
           
           const res= await fetch('/register', {
           method:"POST",
           headers:{
            "Content-Type":"application/json"
           },
           body:JSON.stringify({name,email,phone,profation})
           })
      
      
        const data=await res.json();
        if(data.status===422|| !data)
        {
          window.alert("invalid")
          console.log('invalid')
        }
        else {
          window.alert('success')
        }
       }
       const handleIp=(e)=>
       {
         name=e.target.name;
         value=e.target.value;
         setUser({...user,[name]:value})
       }

      return (
          <>
        <div className="card">
          <div className="card-header">Add a Contact</div>
          <div className="card-body">
            <form method='POST'>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                  name="name"
                  value={user.name}
                  onChange={handleIp}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your E-mail Address"
                  name='email'
                  value={user.email}
                  onChange={handleIp}
                />
                </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Phone Number"
                  value={user.phone}
                  name='phone'
                  onChange={handleIp}
                />
              </div>
             
                <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your profation"
                  name='profation'
                  value={user.profation}
                  onChange={handleIp}
                />
              </div>
              <button className="btn" onClick={(e)=>setstate(e)}>
                Create Contact
              </button>
            </form>
          </div>
        </div>
        
        
        </>
      );
    };
    
    export default Form;

