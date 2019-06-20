import React from 'react';
import SinglePost from './SinglePost';
import AuthorsOtherPosts from './AuthorsOtherPosts';
import { fetchPost } from '../../shared/Fetch/postService';
import { fetchAuthor } from '../../shared/Fetch/authorService';
import { fetchSingleAuthorPosts } from '../../shared/Fetch/postService';


class SinglePostAuthorBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: null,
            post: null,
            authorPosts: []
        };
    }

    componentDidMount() {
        fetchPost(this.props.match.params.postId)
            .then((singlePost) => {
                this.setState({ post: singlePost })
            })
        fetchAuthor(this.props.match.params.postId)
            .then((apiAuthor) => {
                this.setState({ author: apiAuthor })
            })
        fetchSingleAuthorPosts(this.props.match.params.postId)
            .then((apiAuthorPosts) => {
                this.setState({ authorPosts: apiAuthorPosts })
            })
    }
    render() {

        if (this.state.post === null || this.state.author === null) {
            return <p>Loading Posts</p>
        }


        return (
            <main>
                <div className="container">
                    <SinglePost authorPosts={this.state.authorPosts} authorName={this.state.author} authorsSinglePost={this.state.post} />
                    <AuthorsOtherPosts authorPosts={this.state.authorPosts} authorName={this.state.author} authorsOtherPosts={this.state.post} />
                </div>
            </main >
        )
    }
}

export default SinglePostAuthorBox;