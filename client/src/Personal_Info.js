import React from 'react'

class Personal_Info extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            form:'personal',
            name:'',
            email:'',
            password:''
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
        const {name, email, password} = this.state
        return (
        <div>
            <h1>Account info</h1>
            <form
            onSubmit={(event) => {
                event.preventDefault()
                this.props.handleSubmit(this.state)
                this.props.updateFormView()
            }}>
                <label> name
                    <input
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    ></input>
                </label>
                <label> email
                <input
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    ></input>
                </label>
                <label> password
                <input
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    ></input>
                </label>
                <button type="submit">next</button>
            </form>
        </div>
        )
    }
}

export default Personal_Info