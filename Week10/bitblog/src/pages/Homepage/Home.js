import React from 'react';
import PostsItem from './PostsItem';
import { fetchPosts } from '../../shared/Fetch/postService'

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        fetchPosts()
            .then((posts) => {
                this.setState({ posts })
            })
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