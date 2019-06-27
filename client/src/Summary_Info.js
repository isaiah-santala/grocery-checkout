import React from 'react'

const Summary_Info = (props) => {
    const {name, email, password} = props.personal
    const {line1, line2, city, state, zip, phone} = props.shipping
    const {cardNumber, exp, cvv, billingzip} = props.payment
    return(
        <div>
            <h1>Order Summary</h1>
            <ul> 
                <li>name: {name}</li>
                <li>email: {email}</li>
                <li>password: {password}</li>
                <li>primary address: {line1}</li>
                <li>seconday address: {line2}</li>
                <li>city: {city}</li>
                <li>state: {state}</li>
                <li>zip: {zip}</li>
                <li>phone: {phone}</li>
                <li>cardNumber: {cardNumber}</li>
                <li>exp: {exp}</li>
                <li>cvv: {cvv}</li>
                <li>billingzip: {billingzip}</li>
            </ul>
        </div>
    )
}

export default Summary_Info