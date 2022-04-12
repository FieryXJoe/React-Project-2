import { useState } from "react";

const Modal = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
  
  const clearForm = (event) => {
    setFirstName('');
    setLastName('');
    setEmail('');
  }
  const [isErrorVisible, setErrorVisible] = useState(false);

  const validateForm = (event) => {
    if(firstName != "" && firstName.length >= 2)
        if(lastName != "" && lastName.length >= 2)
        {
            const regex = "[a-z0-9]+@[a-z]+\.[a-z]{2,3}";
            if(email.match(regex))
            {
                setErrorVisible(false);
                clearForm();
                props.dismissModal();
            }
            else
                setErrorVisible(true);
                
        }
        else
            setErrorVisible(true);
    else
        setErrorVisible(true);
  }
    return (
        <>
            <label className="form-label">First Name</label><br />
            <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
            <br /><br /><label className="form-label">Last Name</label><br />
            <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
            <br /><br /><label className="form-label">Email</label><br />
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            <br />
            {isErrorVisible && <label className="form-label" style={{color:"red",fontSize:"20px"}}>Form failed validation</label>}
            <br />
            <button onClick = {validateForm} className="button">
                Submit
            </button>
            <button style = {{marginLeft:'20px'}} onClick = {clearForm} className="button">
                Clear
            </button>

        </>
    )
}

export default Modal;