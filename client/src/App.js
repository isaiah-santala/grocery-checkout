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
            viewOrder: ['/personal', '/shipping', '/payment', '/submit'],
            viewIdx:0,
            currentView:'/personal',
            personal:{},
            shipping:{},
            payment:{}   
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handlePost = this.handlePost.bind(this)
        this.updateView = this.updateView.bind(this)
    }
    handleSubmit(userData) {
        const formName = userData.form
        delete userData.form
        this.setState({   
            [formName]: userData
        }, () => this.updateView())
    }
    updateView() {
        const {viewOrder, viewIdx} = this.state
        this.setState({
            viewIdx: viewIdx + 1,
            currentView: viewOrder[viewIdx + 1] ,
        }, () => this.state.currentView === '/submit' && this.handlePost())
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
        const { personal, payment, shipping, currentView } = this.state
        return (
            <div>
                {currentView === '/personal' &&
                    <Personal_Info handleSubmit={this.handleSubmit} />}
                {currentView === '/shipping'&&
                    <Shipping_Info handleSubmit={this.handleSubmit} />}
                {currentView === '/payment' &&
                    <Payment_Info handleSubmit={this.handleSubmit} />}
                {currentView === '/submit' &&
                    <Summary_Info personal={personal} payment={payment} shipping={shipping} />}    
            </div>
        )
    }
}

export default App