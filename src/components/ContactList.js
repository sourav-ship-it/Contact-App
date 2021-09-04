import React, { Component } from 'react'
import ContactForm from './ContactForm'
import ContactCard from './ContactCard'
import './ContactList.css'
import {connect} from 'react-redux'
import { updateList } from '../utils/actions'

class ContactList extends Component {
    state = {
        selectedIndex: null,
        contactFormModal: false
    }

    onAddorEdit = (data) => {
        if(data.contactName && data.contactNumber && data.contactEmail){
            this.setState({contactFormModal: false})
            let list = [...this.props.list]
            if(this.state.selectedIndex != -1){
                list[this.state.selectedIndex] = data
            }else{
                list.push(data)
            }

            this.props.updateList(list)
        }
    }

    renderModal() {
        if(this.state.contactFormModal){
            let contact = {
                contactName : '',
                contactNumber : '',
                contactEmail : '',
                contactImage : ''
            }
            if(this.state.selectedIndex != -1){
                contact = this.props.list[this.state.selectedIndex]
            }
            return (
            <div>
                <div className='overlay'>
                <button className='close-button' onClick={() => this.closeModal()}><i className="fa fa-times" aria-hidden="true"></i></button>
                </div>
                <ContactForm onAddorEdit={this.onAddorEdit} contact={contact}/>
            </div>
            );
        }
    }

    closeModal = () => {
        this.setState({contactFormModal: false})
    }

    displayContactForm = i => {
        this.setState({selectedIndex: i})
        this.setState({contactFormModal: true})
    }

    deleteContact = i => {
        let list = [...this.props.list]
        list.splice(i , 1)
        this.props.updateList(list)

    }

    render() {
        return (
            <div>
                {this.renderModal()}
                <div style={{background: 'white', borderRadius: '20px', padding: '30px', width: '50%', margin: 'auto', marginTop: '20px'}}>
                    <h1 style={{textAlign: 'center'}}>CONTACTS</h1>
                    <button className='add-button' onClick={() => this.displayContactForm(-1)}><i className="fa fa-plus" aria-hidden="true"></i></button>
                    {
                        this.props.list.map((item,index) => {
                            return <ContactCard editContact={this.displayContactForm} contact={item} key={index} contactId={index} deleteContact={this.deleteContact}/>
                        })
                    }
                </div>
                
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        list: state.list
    }
}
export default connect(mapStateToProps,{updateList}) (ContactList)