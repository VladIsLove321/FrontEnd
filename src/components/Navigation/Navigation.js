import React  from 'react';
import './Navigation.css';


 const Navigation = ({onRouteChange, isSignedIn}) => {
      if (isSignedIn) {
       return (
      <nav className='NavPosition'>
        <p className='f3 link dim black underline pa3 pointer' onClick={() => onRouteChange('signout')}>Sign out</p>
      </nav>
    );
    }
    else {
      return (
      <nav className='NavPosition'>
        <p className='f3 link dim black underline pa3 pointer' onClick={() => onRouteChange('signin')}>Sign in</p>
        <p className='f3 link dim black underline pa3 pointer' onClick={() => onRouteChange('register')}>Register</p>
      </nav>
    );
    }
 }


export default Navigation;
