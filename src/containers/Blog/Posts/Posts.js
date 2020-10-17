import React, {Component} from 'react'
import axios from '../../../axios'
import Post from '../../../components/Post/Post'
import './Posts.css'
import {Link, Route} from 'react-router-dom'
import FullPost from '../FullPost/FullPost'

class Posts extends Component
{
    state = {
        posts: []
    }


    componentDidMount () {
        axios.get( '/posts' )
            .then( response => {
                const posts = response.data.slice(0, 4);
                const refinedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                 this.setState({posts: refinedPosts});
            } )
            .catch(error => {
                console.log(error);
                //this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
       this.setState({selectedPostId: id});
       //this.props.history.push({pathname: '/' +id})
    }

    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
            posts = this.state.posts.map(post => {
                return (
                <Link to={this.props.match.url  + '/' + post.id} key={post.id} >
                 <Post 
                    title={post.title} 
                    key={post.id}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />
                </Link>
                )
            });
        
        return(
            <div>
            hello
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + "/:id"} component={FullPost}/>
            </div>
        )
    }
}

export default Posts