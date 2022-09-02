import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import SignUpStepper from '../SignUpStepper/SignUpStepper';
import "./SignUpForm.css"

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
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
    return (
<>
      <div id="wrap2">
      <div id="wrap3">
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
          <label className='welcome'>SIGN UP</label>
          <p>Sign up to connect with guides and learn about grant opportunties</p>
            {/* <label className='login'>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required /> */}
            <label className='login'>Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label className='login'>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <label className='login'>Confirm</label>
            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            <br></br>
            <button class="mt-5 focus:outline-none text-white bg-emerald-900 hover:bg-green-800 font-medium rounded-lg text-md px-10 py-3 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type="submit" disabled={disable}>SIGN UP</button>
          </form>
          <br></br>
        <hr></hr>
        <br></br>
        <button type="button" class="text-green-900 hover:text-white border border-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-20 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
          SIGN UP WITH GOOGLE
        </button>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
      <div id="random-side"></div>
      </div>

      <SignUpStepper />


  </>
    );
  }
}