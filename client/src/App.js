import React from 'react'
import Personal_Info from './Personal_Info'
import Payment_Info from './Payment_info'
import Shipping_Info from './Shipping_Info'
import Summary_Info from './Summary_Info'

const serverUrl = 'http://localhost:3000/'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            viewOrder: ['personalView', 'shippingView', 'paymentView', 'submitView'],
            viewIdx:0,
            personalView: true,
            shippingView: false,
            paymentView: false,
            submitView: false,
            personal:{},
            shipping:{},
            payment:{}   
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateFormView = this.updateFormView.bind(this)
        this.handlePost = this.handlePost.bind(this)
    }
    handleSubmit(info) {
        const stateKey = info.form
        delete info.form
        this.setState({
            [stateKey]: info    
        })
    }
    updateFormView() {
        const {viewIdx, viewOrder} = this.state
        this.setState({
            viewIdx: viewIdx + 1,
            [viewOrder[viewIdx]]: false,
            [viewOrder[viewIdx + 1]]: true
        }, () => this.state.submitView && this.handlePost())
    }
    handlePost() {
        const info = JSON.stringify({
            personal: this.state.personal,
            shipping: this.state.shipping,
            payment: this.state.payment
        })
        console.log(info)
        fetch(serverUrl, {
            method: 'POST',
            body: info,
            headers:{
                'Content-Type': 'application/json'
            }
        })
    }
    render() {
        const { personal, payment, shipping, personalView, shippingView, paymentView, submitView } = this.state
        return (
            <div>
                {personalView &&
                    <Personal_Info handleSubmit={this.handleSubmit} updateFormView={this.updateFormView}/>}
                {shippingView &&
                    <Shipping_Info handleSubmit={this.handleSubmit} updateFormView={this.updateFormView}/>}
                {paymentView &&
                    <Payment_Info handleSubmit={this.handleSubmit} updateFormView={this.updateFormView}/>}
                {submitView &&
                    <Summary_Info personal={personal} payment={payment} shipping={shipping} updateFormView={this.updateFormView}/>}    
            </div>
        )
    }
}

export default App