import React, { Component } from 'react'
import './ContactForm.css'

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactName : props.contact.contactName,
            contactNumber : props.contact.contactNumber,
            contactEmail : props.contact.contactEmail,
            contactImage : props.contact.contactImage
        }
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.onAddorEdit(this.state)
    }

    handleImageUpload = e => {
        const imageFile = e.target.files[0];
        let reader = new FileReader();
        let image  =  '';
        reader.readAsDataURL(imageFile);
        reader.onload = () => {
            image = reader.result;
            this.setState({
                contactImage: image
            })    
        };
    }

    render() {
        return (
            <form className='contact-form' onSubmit = {this.handleSubmit} autoComplete="off">
                <input type="text" name="contactName" placeholder="Contact Name" value={this.state.contactName} onChange = {this.handleInputChange} /><br/>
                <input type="text" name="contactNumber" placeholder="Contact Phone Number" value={this.state.contactNumber} onChange = {this.handleInputChange} /><br/>
                <input type="text" name="contactEmail" placeholder="Contact Email Id" value={this.state.contactEmail} onChange = {this.handleInputChange} /><br/>
                <p style={{padding:'10px 0', margin: '0'}}>Upload a Photo</p>
                <input type="file" onChange = {this.handleImageUpload} /><br/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}
export default ContactForm