import React from 'react';
import { axiosWithAuth } from '../utilities/axiosWithAuth';

class FriendsList extends React.Component{
    //basic constructor with state set to an empty array of friends
    //you know.... cause i don't have any
    constructor() {
        super();
        this.state = {
            friends: []
        }
    }

    getFriendsList = () => {
        const token = window.localStorage.getItem('token')
        //get from server.js
        axiosWithAuth().get("/api/friends")
        .then(res => {
            console.log(res);
            this.setState({ friends: res.data})
        })
        .catch(err => console.log(err))
    }

    //when this mounts. run this function
    componentDidMount() {
        this.getFriendsList();
    }

    //render time
    render() {
        return(
            <div>
            List of my totally real and not at all imaginary friends<br/><br/>
            {this.state.friends.map(friend => <div><br/>{`${friend.name}, ${friend.age} years old, ${friend.email}`} </div>)}
            </div>
        )
    }
}

export default FriendsList;