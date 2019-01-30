import React  from 'react';



 class Registration extends React.Component {

     constructor(props) {
       super(props);
       this.state = {
         registerName: '',
         registerEmail : '',
         registerPassword : ''
       }
     }

     OnNameChange = (event) => {
       this.setState({registerName : event.target.value})
     }


     OnEmailChange = (event) => {
       this.setState({registerEmail : event.target.value})
     }

     OnPasswordChange = (event) => {
       this.setState({registerPassword : event.target.value})
     }

     OnSubmitRegister = () => {
       fetch('https://sheltered-ridge-62955.herokuapp.com/register', {
         method: 'post',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify({
           name: this.state.registerName,
           email: this.state.registerEmail,
           password: this.state.registerPassword
         })
       })
       .then(response => response.json())
       .then(user => {
         if (user.id) {
            this.props.loadUser(user)
            this.props.onRouteChange('home')
         }
       })
     }



   render(){
     const {onRouteChange} = this.props;
     return (
     <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-4 center">
         <main className="pa4 black-80 relative">
          <div className="measure ">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input onChange={this.OnNameChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input onChange={this.OnEmailChange}  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input onChange={this.OnPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
              </div>

            </fieldset>
            <div className="">
              <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" onClick={this.OnSubmitRegister} value="Register" />
            </div>

          </div>
       </main>
     </article>
    );
   }

 }


export default Registration;
