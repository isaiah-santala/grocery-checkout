import React from 'react'

class Shipping_Info extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            form:'shipping',
            line1:'', 
            line2:'', 
            city:'', 
            state:'', 
            zip:'',
            phone:''
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
        const {line1, line2, city, state, zip, phone} = this.state
        return (
        <div>
            <h1>Shipping info</h1>
            <form
            onSubmit={(event) => {
                event.preventDefault()
                this.props.handleSubmit(this.state)
                this.props.updateFormView()
            }}>
                <label> primary address
                    <input
                    name="line1"
                    value={line1}
                    onChange={this.handleChange}
                    ></input>
                </label>
                <label> alt address
                <input
                    name="line2"
                    value={line2}
                    onChange={this.handleChange}
                    ></input>
                </label>
                <label> city
                <input
                    name="city"
                    value={city}
                    onChange={this.handleChange}
                    ></input>
                </label>
                <label> state
                <input
                    name="state"
                    value={state}
                    onChange={this.handleChange}
                    ></input>
                </label>
                <label> zip
                <input
                    name="zip"
                    value={zip}
                    onChange={this.handleChange}
                    ></input>
                </label>
                <label> phone
                <input
                    name="phone"
                    value={phone}
                    onChange={this.handleChange}
                    ></input>
                </label>
                <button type="submit">next</button>
            </form>
        </div>
        )
    }
}

export default Shipping_Info