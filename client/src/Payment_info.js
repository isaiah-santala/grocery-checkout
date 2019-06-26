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
        const value = event.target.value
        const stateKey = event.target.name
        this.setState({
            [stateKey]: value
        })
    }
    render() {
        return (
        <div>
            <h1>Account info</h1>
            <form
            onSubmit={(event) => {
                event.preventDefault()
                this.props.handleSubmit(this.state)
                this.props.updateFormView(this.state.form)
            }}>
                <label> card number
                    <input
                    name="cardNumber"
                    value={this.state.cardNumber}
                    onChange={this.handleChange}
                    ></input>
                </label>
                <label> expiration date
                <input
                    name="exp"
                    value={this.state.exp}
                    onChange={this.handleChange}
                    ></input>
                </label>
                <label> cvv
                <input
                    name="cvv"
                    value={this.state.cvv}
                    onChange={this.handleChange}
                    ></input>
                </label>
                <label> billing zip
                <input
                    name="billingzip"
                    value={this.state.billingzip}
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