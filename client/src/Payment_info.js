import React from 'react'

class Payment_Info extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            form:'payment',
            cardNumber:'',
            exp:'',
            cvv:'',
            billingzip:''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const {value, name} = event.target
        this.setState({
            [name]: value
        })
    }
    render() {
        const {cardNumber, exp, cvv, billingzip} = this.state
        return (
        <div>
            <h1>Account info</h1>
            <form
            onSubmit={(event) => {
                event.preventDefault()
                this.props.handleSubmit(this.state)
            }}>
                <label> card number
                    <input
                    name="cardNumber"
                    value={cardNumber}
                    onChange={this.handleChange}
                    ></input>
                </label>
                <label> expiration date
                <input
                    name="exp"
                    value={exp}
                    onChange={this.handleChange}
                    ></input>
                </label>
                <label> cvv
                <input
                    name="cvv"
                    value={cvv}
                    onChange={this.handleChange}
                    ></input>
                </label>
                <label> billing zip
                <input
                    name="billingzip"
                    value={billingzip}
                    onChange={this.handleChange}
                    ></input>
                </label>
                <button type="submit">submit</button>
            </form>
        </div>
        )
    }
}

export default Payment_Info