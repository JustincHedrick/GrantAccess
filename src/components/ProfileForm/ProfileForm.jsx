import { useState } from "react";
import React from "react";
import "./ProfileForm.css"
import * as usersApi from "../../utilities/users-api"


function ProfileForm({user}) {
    const [userUpdate, setUserUpdate] = useState({
        name: user && user.firstName ? user.firstName : '',
        name: user && user.lastName ? user.lastName : '',
        name: user && user.email ? user.email : '',
        name: user && user.password ? user.password : '',
        name: user && user.role ? user.role : '',
        name: user && user.organization ? user.organization : '',
        name: user && user.location ? user.location : '',
        name: user && user.about ? user.about : '',
        name: user && user.experience ? user.experience : '',
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
        setUserUpdate({...userUpdate, [evt.target.firstName]: evt.target.value });
    }

console.log(userUpdate);
        
        return(

            <div className="wrapper">
                <h1 className="edit-profile-h1">Edit Profile</h1>
                <form className="profile-form" onSubmit={handleSubmit} onChange={handlechange}>
                    <fieldset>
                            <label><span>First Name</span></label>
                            <input 
                            placeholder="Enter First Name"
                            type="text"
                            name="firstName"
                            value= {userUpdate.firstName}
                             />
                            <label><span>Last Name</span></label>
                            <input 
                            placeholder="Enter First Name"
                            type="text"
                            name="lastName"
                            value= {userUpdate.lastName}
                             />
                            <label><span>Email</span></label>
                            <input 
                            placeholder="Update Email"
                            type="text"
                            name="email"
                            value= {userUpdate.email}
                             />
                            <label><span>Role</span></label>
                            <input 
                            placeholder="Update Role"
                            type="text"
                            name="role"
                            value= {userUpdate.role}
                            />

                            <label><span>Organization</span></label>
                            <input 
                            placeholder="Update Organization"
                            type="text"
                            name="organization"
                            value= {userUpdate.organization}
                            />
                            <label><span>Location</span></label>
                            <input 
                            placeholder="Update Location"
                            type="text"
                            name="location"
                            value= {userUpdate.location}
                             />
                            <label><span>About</span></label>
                            <textarea 
                            placeholder="Update About"
                            type="text"
                            name="about"
                            value= {userUpdate.about}
                             />
                            
                            <label><span>Description</span></label>
                            <textarea 
                            placeholder="Update Job Description "
                            type="text"
                            name="jobDescription"
                            value= {userUpdate.jobDescription}
                             />
                            
                            <br />

                            <button className="save-btn" type="submit" onSubmit={handleSubmit} onChange={handlechange}>Save</button>
                    </fieldset>
                </form>


            </div>
            )
        }
        export default ProfileForm;