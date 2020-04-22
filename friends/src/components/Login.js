import React from 'react';
import { axiosWithAuth } from '../utilities/axiosWithAuth';

class Login extends React.Component {
    //Basic Constructor with state being set blank
    constructor() {
        super();
        this.state = {
            isLoading: false,
            credentials: {
                username: '',
                password: ''
            }
        }
    }

    //updates changes made to state
    handleChange = event => {
        this.setState({
             credentials: {
            ...this.state.credentials,
            [event.target.name]: event.target.value
        }})
        console.log(this.state.credentials)
    }

    handleSubmit = event => {
        //Stop Refresh
        event.preventDefault();
        this.setState({...this.state, isLoading: true});
        //grabbed post from server.js
        axiosWithAuth()
            .post('/api/login', this.state.credentials)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.payload);
                this.setState({...this.state, isLoading: false});
                this.props.history.push('/protected')
        })
        .catch(err => console.log(err))
    }

    //renders the inputs boxes for Login/ isLoading behavior
    render() {
        return (
            <div>
                <form onSubmit= {this.handleSubmit}>
                    <input name="username" placeholder="Username" onChange={this.handleChange}/>
                    <input name="password" placeholder="Password" onChange={this.handleChange}/>
                    <button>Login</button>
                </form>
                {this.state.isLoading && <div>Please Wait a moment</div>}
            </div>
        )
    }
}
export default Login;