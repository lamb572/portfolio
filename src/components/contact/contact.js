import React from 'react';
import './contact.css';

function Contact({id}) {
    return (
        <div className="section" id={id}>
            <p>
                If you wish to contact me please use my  
                 <a className="intextlink" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lukemb/" title="LinkedIn"> LinkedIn </a>
                 account.
            </p>
            
        </div>
    );
  }
  
  export default Contact;