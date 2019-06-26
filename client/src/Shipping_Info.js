import React from 'react'

class Shipping_Info extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            form:'shipping',
            line1:'',
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
                    value={this.state.name}
                    onChange={this.handleChange}
                    ></input>
                </label>
                <label> alt address
                <input
                    name="line2"
                    value={this.state.email}
                    onChange={this.handleChange}
                    ></input>
                </label>
                <label> city
                <input
                    name="city"
                    value={this.state.password}
                    onChange={this.handleChange}
                    ></input>
                </label>
                <label> state
                <input
                    name="state"
                    value={this.state.password}
                    onChange={this.handleChange}
                    ></input>
                </label>
                <label> zip
                <input
                    name="zip"
                    value={this.state.password}
                    onChange={this.handleChange}
                    ></input>
                </label>
                <label> phone
                <input
                    name="phone"
                    value={this.state.password}
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