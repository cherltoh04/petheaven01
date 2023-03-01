import { useState,useEffect } from "react";
import '../Registration.css';
import emailjs from 'emailjs-com';



const Registration = () => {

    const [toSend, setToSend] = useState({
        from_name: '',
        last_name:'',
        email: '',
        number: '',
      });

  const [status, setStatus] = useState('');
  var templateParams = {
    name: 'James',
    notes: 'Check this out!'
};
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send("service_t4bu6ah","template_tlm63xl",templateParams)
    .then(response => {
      console.log('SUCCESS!', response);
      setToSend({
        fullName: '',
        email: '',
        role: '',
        message: ''
      });
      setStatus('SUCCESS');
    }, error => {
      console.log('FAILED...', error);
    });
}
  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setToSend(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))

};

  return (
      <>

        <section class="sectionR">
        {status && renderAlert()}

        
                <h2> Come and Join Us Today!</h2> 
                <br></br>
                <div className="form-input">

                {<form onSubmit={handleSubmit}>
                  
                <span>
                First Name: <label>*</label>
                  </span>
                        <input type="text" name='first_name'value={toSend.from_first_name} onChange={handleChange} placeholder="First Name"/>
                    <br></br>
                    <br></br>

                    <span>
                Last Name: <label>*</label>
                  </span>
                        <input type="text" name='last_name'value={toSend.from_last_name} onChange={handleChange} placeholder="Last Name"/>
                    
                    <br></br>
                    <br></br>


                    <span>
                    Phone number:<label>*</label>
                  </span>
                    <input type="text" name='number'value={toSend.number} onChange={handleChange} placeholder="Phone Number"/>
               
                    <br></br>
                    <br></br>

                    <span>
                    Email:<label>*</label>
                  </span>
                    <input type="text" name='email'value={toSend.email} onChange={handleChange} placeholder="Email"/>

                    <br></br>
                    <br></br>
                    

                    <input type="submit" name="submit-button" value="Submit"></input>
                 </form>
}
                 </div>
  
        </section>
            
    </>
    
  );

  
};

const renderAlert = () => (
  <div className="topmessage">
    <p>Thank you for showing your interest! Our friendly stuff will connect with you within the next 2 working day!</p>
  </div>
)
  
export default Registration;