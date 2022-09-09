import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import './SignUpForm.css'


export default class signup extends Component {
      state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirm: '',
        role: '',
        organization: '',
        location: '',
        links: '',
        about: '',
        jobDescription: '',
        error: '',
        isMentor: null,
      };
    
      handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
          const formData = { ...this.state };
          console.log(formData)
          delete formData.confirm;
          delete formData.error;
          // The promise returned by the signUp service method
          // will resolve to the user object included in the
          // payload of the JSON Web Token (JWT)
          const user = await signUp(formData);
          // Update user state with user
          this.props.setUser(user);
        } catch {
          // Invalid signup
          this.setState({
            error: 'Sign Up Failed - Try Again'
          });
        }
      }
    
      handleChange = (evt) => {
        this.setState({
          [evt.target.name]: evt.target.value,
          error: ''
        });
      }
    render() {
        const disable = this.state.password !== this.state.confirm;
        
        return(
            <>
{/* <div className='wrap2'>
<div className='wrap3'> */}
    <div className='signUpDiv'>
            <div id="random-side"></div>
            <form autoComplete="off" onSubmit={this.handleSubmit} class="formSU">
        <label className='welcome'>SIGN UP</label>
         <p className='under'>Sign up to connect with guides and learn about grant opportunties</p>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 mb-6 w-full group">
        <input type="text" name="firstName" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  value={this.state.firstName} onChange={this.handleChange} placeholder=" " required />
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
    <div class="relative z-0 mb-6 w-full group">
        <input type="text" name="lastName" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  value={this.state.lastName} onChange={this.handleChange} placeholder=" " required />
        <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
    </div>
  </div>
  <div class="relative z-0 mb-6 w-full group">
      <input type="email" name="email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  value={this.state.email} onChange={this.handleChange} required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div class="relative z-0 mb-6 w-full group">
      <input type="password" name="password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  value={this.state.password} onChange={this.handleChange} required />
      <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  <div class="relative z-0 mb-6 w-full group">
      <input type="password" name="confirm" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={this.state.confirm} onChange={this.handleChange} required />
      <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 mb-6 w-full group">
        <input type="text"  name="role" id="role" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={this.state.role} onChange={this.handleChange} required />
        <label for="role" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Role</label>
    </div>
    <div class="relative z-0 mb-6 w-full group">
        <input type="text" name="organization" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={this.state.organization} onChange={this.handleChange} required />
        <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Organization</label>
    </div>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 mb-6 w-full group">
        <input type="text"  name="location" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={this.state.location} onChange={this.handleChange} required />
        <label for="text" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
    </div>
    <div class="relative z-0 mb-6 w-full group">
        <input type="text" name="about" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={this.state.about} onChange={this.handleChange} required />
        <label for="text" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">About Me</label>
    </div>
    <div class="relative z-0 mb-6 w-full group">
        <textarea name="experience" class="block py-5 px-5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={this.state.experience} onChange={this.handleChange} required />
        <label for="text" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Experience</label>
    </div>
    <div class="relative z-0 mb-6 w-full group">
        <textarea name="jobDescription" class="block py-5 px-5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={this.state.jobDescription} onChange={this.handleChange} />
        <label for="text" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Job Description</label>
    </div>
    <div class="relative z-0 mb-6 w-full group">
        <input type="text" name="links" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={this.state.links} onChange={this.handleChange} />
        <input type="text" name="links" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={this.state.links} onChange={this.handleChange} />
        <input type="text" name="links" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={this.state.links} onChange={this.handleChange} />
        <label for="text" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Links (optional)</label>
    </div>
  </div>
  <button class="mt-5 focus:outline-none justify-center text-white bg-emerald-900 hover:bg-green-800 font-medium rounded-lg text-md px-10 py-3 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type="submit" disabled={disable}>Sign Up</button>
</form>
</div>
{/* </div>
</div> */}

</>
        )
    }
}

// import "./SignUpForm.css"

// export default class signup extends Component {
    
    
    //   render() {
        //     return (
            // <>
//       <div id="wrap2">
//       <div id="wrap3">
//         <div className="form-container">
//           <form autoComplete="off" onSubmit={this.handleSubmit}>
//            <label className='login'>First Name</label>
//             <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} required />
//            <label className='login'>Last Name</label>
//             <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} required />
//             <label className='login'>Email</label>
//             <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
//             <label className='login'>Password</label>
//             <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
//             <label className='login'>Confirm</label>
//             <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
//             <label className='login'>Role</label>
//             <input type="text" name="role" value={this.state.role} onChange={this.handleChange} required />
//             <label className='login'>Organization</label>
//             <input type="text" name="organization" value={this.state.organization} onChange={this.handleChange} required />
//             <label className='login'>About</label>
//             <input type="text" name="about" value={this.state.about} onChange={this.handleChange} required />
//             <label className='login'>Experience</label>
//             <input type="text" name="experience" value={this.state.experience} onChange={this.handleChange} required />
//             <label className='login'>Location</label>
//             <input type="text" name="location" value={this.state.location} onChange={this.handleChange} required />
//             <label className='login'>LinkedIn</label>
//             <input type="text" name="linkedIn" value={this.state.linkedIn} onChange={this.handleChange} />
//             <br></br>
//             <button class="mt-5 focus:outline-none text-white bg-emerald-900 hover:bg-green-800 font-medium rounded-lg text-md px-10 py-3 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type="submit" disabled={disable}>SIGN UP</button>
//           </form>
//           <br></br>
//         <hr></hr>
//         <br></br>
//         <button type="button" class="text-green-900 hover:text-white border border-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-20 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
//           SIGN UP WITH GOOGLE
//         </button>
//         </div>
//         <p className="error-message">&nbsp;{this.state.error}</p>
//       </div>
//       <div id="random-side"></div>
//       </div>



//   </>
//     );
//   }
// }