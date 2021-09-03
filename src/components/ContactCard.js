import React, { Component } from 'react'
import './ContactCard.css'
class ContactCard extends Component {
  
    render() {
        return (
            <div className='contact-card'>
                <div className='contact-image'>
                    <img src={this.props.contact.contactImage} style={{display: 'block',width: '100%'}} /> 
                </div>
                <div className='contact-data'>
                    <div className='contact-name'>
                        {this.props.contact.contactName}
                    </div>
                    <div className='contact-additional-data'>
                        <div className='contact-number'>
                            {this.props.contact.contactNumber}
                        </div>
                        <div className='contact-email'>
                            {this.props.contact.contactEmail}
                        </div>
                    </div>
                </div>
                <div className='contact-action-buttons'>
                    <button className='edit-button' onClick={() => this.props.editContact(this.props.contactId)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                    <button className='delete-button' onClick={() => this.props.deleteContact(this.props.contactId)}><i className="fa fa-trash" aria-hidden="true"></i></button>
                </div>
            </div>
        )
    }
}
export default ContactCard