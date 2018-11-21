import React, { Component } from 'react';

class SignUp extends Component {
  render() {
    return (
    <div className="ui middle aligned center aligned grid">
        <form class="ui form large">
          <div class="field">
            <label htmlFor="email">Email</label>
            <input type="text" name="" placeholder="Email Address"/>
          </div>
          <div className="fields">
            <div class="field">
              <label>First Name</label>
              <input type="text" name="first-name" placeholder="First Name"/>
            </div>
            <div class="field">
              <label>Last Name</label>
              <input type="text" name="last-name" placeholder="Last Name"/>
            </div>
          </div>
          <div class="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="Input Password"/>
          </div>
          <div class="field">
            <label>Confirm Password</label>
            <input type="password" name="confirm-password" placeholder="Repeat Password"/>
          </div>
          <div class="field">
            <div class="ui checkbox">
              <input type="checkbox" tabindex="0" class="hidden"/>
              <label>I agree to the Terms and Conditions</label>
            </div>
          </div>
          <button class="ui button" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
export default SignUp;