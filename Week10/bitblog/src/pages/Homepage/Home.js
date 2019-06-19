import React from 'react';
import PostsItem from './PostsItem';
// import ApiPost from '../../shared/userposts';
// import Post from "../../shared/entities/Post";
class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        // fetchPo
    }

    render() {
        return (
            <main className="container" >
                <h1>Posts</h1>

                {
                    this.state.posts.map((post) => {
                        return <PostsItem post={post} />
                    })
                }
            </main>
        );
    }
}
export default Home;