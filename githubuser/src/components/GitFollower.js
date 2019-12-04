import React from "react";
import GitCard from "./GitCard";
import axios from "axios";


class GitFollower extends React.Component {

    state = {
        followers: [],
    }

    componentDidMount() {
        axios.get("https://api.github.com/users/faridhamida/followers")
            .then(res => {
                console.log(res.data)
                this.setState({
                   followers: res.data,
                });
            })
            .catch(error => {
                console.log("wrong", error)
            })
    }

    render() {

        return (
            <div>
                {this.state.followers.map(follower => (
                    <GitCard
                        key={follower.id}
                        user={follower.login}
                        image={follower.avatar_url}
                        location={follower.location}
                        bio={follower.bio}
                        login={follower.login}
                    />
                ))}
                        
            </div>
        );
    }
}

export default GitFollower;