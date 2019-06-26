import React from 'react'
import Summary from './Summary'

const Summary_info = (props) => {
    const {personal, payment, shipping} = props
    return(
        <div>
            <h1>Order Summary</h1>
            <ul> 
                <li>name: {personal.name}</li>
                <li>email: {personal.email}</li>
                <li>password: {personal.password}</li>
                <li>primary address: {shipping.line1}</li>
                <li>seconday address: {shipping.line2}</li>
                <li>city: {shipping.city}</li>
                <li>state: {shipping.state}</li>
                <li>zip: {shipping.zip}</li>
                <li>phone: {shipping.phone}</li>
                <li>cardNumber: {payment.cardNumber}</li>
                <li>exp: {payment.exp}</li>
                <li>cvv: {payment.cvv}</li>
                <li>billingzip: {payment.billingzip}</li>
            </ul>
        </div>
    )
}

export default Summary_info