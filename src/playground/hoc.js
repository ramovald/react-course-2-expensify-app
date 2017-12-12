//Higher Order Component (HOC) - A component (HOC) that renders another component
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
   <div>
      <h1>Info</h1>
      <p>The info is: {props.info}</p>
   </div>
);

const withAdminWarning = (WrappedComponent) => {
   return (props) => (
      <div>         
         { props.isAdmin && <p>Top Secret</p>}
         <WrappedComponent {...props}/>
      </div>
   );
};

const requiredAuthentication = (WrappedComponent) => {
   return (props) => (
      <div>
         { props.isAuthenticated ? (
            <WrappedComponent {...props} />
           ) :
           (
            <p>Please Login to see the info</p> 
           ) 
         }         
      </div>
   );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requiredAuthentication(Info);


// ReactDOM.render(<AuthInfo isAdmin={true} info='These are details'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info='These are details'/>, document.getElementById('app'));