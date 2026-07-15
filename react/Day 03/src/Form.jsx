import React, { useState } from 'react'

export default function Form({ addUser }) {
    const [user, setUser] = useState({
        name: "",
        email: "",
        contact: "",
        message: ""
    })
    const [error, setError] = useState(null);

    function changeHandler(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    function validation() {
        const obj = {};
        if (!user.name.trim()) obj.nameError = "Name is required";
        if (!user.email.trim()) obj.emailError = "Email is required";
        if (!user.contact.trim()) obj.contactError = "Contact is required";
        if (!user.message.trim()) obj.messageError = "Message is required";
        setError(obj)

        return Object.keys(obj).length === 0


    }

    function submitHandler(e) {
        e.preventDefault();
        if (validation()) {
            addUser(user)
            setError(null);
            setUser({});
        }
    }



    return (
        <div className="card">
            <h2>Update Profile</h2>
            <form onSubmit={submitHandler}>
                <div className="row">
                    <div className="form-group">
                        <label>Name</label>
                        <input name="name" onChange={changeHandler} type="text" placeholder="Enter your name" />
                        {error && <p className="text-danger my-2">{error.nameError}</p>}
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input name="email" type="email" onChange={changeHandler} placeholder="Enter your email" />
                        {error && <p className="text-danger my-2">{error.emailError}</p>}

                    </div>
                </div>

                <div className="row">
                    <div className="form-group">
                        <label>Mobile Number</label>
                        <input type="tel" name="contact" onChange={changeHandler} placeholder="Enter mobile number" />
                        {error && <p className="text-danger my-2">{error.contactError}</p>}

                    </div>

                </div>

                <div className="form-group">
                    <label>Message</label>
                    <textarea
                        name="message"
                        onChange={changeHandler}
                        rows="4"
                        placeholder="Write your message..."
                    ></textarea>
                    {error && <p className="text-danger my-2">{error.messageError}</p>}

                </div>

                <button className="btn" type='submit'>Submit</button>
            </form>


        </div>
    )
}