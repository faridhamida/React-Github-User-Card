import React from "react";
import GitCard from "./GitCard";
import axios from "axios";


class GitUser extends React.Component {

    state ={ 
        name: [],
    }

    componentDidMount(){
        axios.get("https://api.github.com/users/faridhamida") 
        .then(res => {
            console.log(res.data)
            this.setState({
                name: res.data.name,
                image: res.data.avatar_url,
                location: res.data.location,
                bio: res.data.bio,
                following: res.data.following
            });
        })
        .catch(error => {
            console.log("wrong", error)
        })
    }

    render(){

        return(
            <div>
                <GitCard user={this.state.name} image={this.state.image} location={this.state.location} bio={this.state.bio} following={this.state.following}  />
            </div>
        );
    }
}

export default GitUser;