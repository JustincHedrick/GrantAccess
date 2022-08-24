import { useState } from "react";
import React from "react";
import "./ProfileForm.css"
import * as usersApi from "../../utilities/users-api"


function ProfileForm({user}) {
    const [userUpdate, setUserUpdate] = useState({
        name: user && user.name ? user.name : '',
        // bio: user && user.bio ? user.bio : '',
    });

    const[submitting, setSubmitting] = useState(false);

     async function handleSubmit(evt) {
        evt.preventDefault();
        // alert('form');
        setSubmitting(true);
        
        const profile = await usersApi.updateProfile(userUpdate)
        console.log(profile)
        // when submitted data is loading
        setTimeout(() => {
        }, [])
    }
    
    
    function handlechange(evt) {
        setUserUpdate({...userUpdate, [evt.target.name]: evt.target.value });
    }

console.log(userUpdate);
        
        return(

            <div className="wrapper">
                <h1 className="edit-profile-h1">Edit Profile</h1>
                <form className="profile-form" onSubmit={handleSubmit} onChange={handlechange}>
                    <fieldset>
                            <label><span>Name</span></label>
                            <input 
                            placeholder="Enter Username"
                            type="text"
                            name="name"
                            value= {userUpdate.name}
                             />
                            
                            <br />
                            {/* <label>Bio</label>
                            <textarea 
                            placeholder="Tell us about yourself"
                            name="bio" 
                            required
                            /> */}
                            <button className="save-btn" type="submit" onSubmit={handleSubmit} onChange={handlechange}>Save</button>
                    </fieldset>
                </form>


            </div>
            )
        }
        export default ProfileForm;