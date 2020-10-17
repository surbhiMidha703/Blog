import React, { Component } from 'react';
// import axios from 'axios';
import './Blog.css';
import Posts from './Posts/Posts'
import { Route, NavLink, Switch} from 'react-router-dom'
import NewPost from './NewPost/NewPost'

class Blog extends Component {
    render () {
        console.log('props=>  ',this.props)
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/posts" exact
                                activeClassName='my-active'
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}
                                >
                                Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => <h1>Home</h1>}/>
                <Route path="/" exact render={() => <h1>Home2</h1>}/>*/}
                {/*order is imp here in  switch */}
                <Switch>  
                    <Route path="/new-post" exact component={NewPost}/>
                    <Route path="/posts" component={Posts}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;