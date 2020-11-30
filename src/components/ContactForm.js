import React, {useState} from 'react';
// import TextField from '@material-ui/core/TextField';
import {db} from './firebase'
import './ContactForm.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';





function Contact(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [loader, setLoader] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true)

        db.collection('contacts').add({
            name: name,
            email: email,
            message: message,
        })
        .then(() => {
            alert('your message has been sent')
            setLoader(false)
        })
        .catch((error) => {
            alert(error.message)
            setLoader(false)
        })

        setName('')
        setEmail('')
        setMessage('')
    }
    
    return (
        
            <form className='contactForm__form' onSubmit={handleSubmit}>
                <h1>Write to Us</h1>

                <label>Name</label>
                <TextField 
                required
                value={name} onChange={(e) => setName(e.target.value)}
                label='Name' variant='filled' />

                {/* <input required placeholder='name' value={name} onChange={(e) => setName(e.target.value)}/> */}

                <label>Email</label>
                <TextField 
                required
                value={email} onChange={(e) => setEmail(e.target.value)}
                label="Email" variant="filled" />

                {/* <input required placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/> */}

                <label>Message</label>
                <TextField
                label='type here'
                variant='filled'
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                />

                <Button 
                className='button'
                // variant='outlined' type='submit'
                
                // style={{
                //     backgroundColor: loader ? 'red' : ""
                // }}
                >Submit</Button>
            </form>

      );
}

export default Contact


