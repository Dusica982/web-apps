import React from 'react';
import PostsItem from './PostsItem';
import ApiPost from '../../shared/userposts';
import Post from "../../shared/entities";
class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    // componentDidMount() {

    // }

    render() {

        // const apiPosts = ApiPost.map((e) => {
        //     return new Post(e.title, e.body)
        // })
        // console.log(apiPosts);

        return (
            <main className="container" >
                <h1>Posts</h1>
                <>
                    <PostsItem props={this.state.posts} />
                    <PostsItem props={this.state.posts} />
                    <PostsItem props={this.state.posts} />
                    <PostsItem props={this.state.posts} />
                </>
            </main>
        );
    }
}
export default Home;