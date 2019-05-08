import React, { Component, Fragment } from 'react';

import './App.css';

import Header from './components/Header/index';
import Post from './components/Post/index';

import logo1 from './assets/user01.jpg';
import logo2 from './assets/user02.jpg';
import logo3 from './assets/user03.jpg';

export default class App extends Component {
  state = {
    posts: [
      {
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Interdum posuere lorem ipsum dolor sit. Eu volutpat odio facilisis mauris. Justo eget magna fermentum iaculis eu non diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Interdum posuere lorem ipsum dolor sit. Eu volutpat odio facilisis mauris. Justo eget magna fermentum iaculis eu non diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Interdum posuere lorem ipsum dolor sit. Eu volutpat odio facilisis mauris. Justo eget magna fermentum iaculis eu non diam.',
        img: logo1,
        name: 'Henrique Augusto',
        time: 'há 20min',
      },
      {
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Interdum posuere lorem ipsum dolor sit. Eu volutpat odio facilisis mauris. Justo eget magna fermentum iaculis eu non diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Interdum posuere lorem ipsum dolor sit. Eu volutpat odio facilisis mauris. Justo eget magna fermentum iaculis eu non diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Interdum posuere lorem ipsum dolor sit. Eu volutpat odio facilisis mauris. Justo eget magna fermentum iaculis eu non diam.',
        img: logo2,
        name: 'Bob Marley',
        time: 'há 10min',
      },
      {
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Interdum posuere lorem ipsum dolor sit. Eu volutpat odio facilisis mauris. Justo eget magna fermentum iaculis eu non diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Interdum posuere lorem ipsum dolor sit. Eu volutpat odio facilisis mauris. Justo eget magna fermentum iaculis eu non diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Interdum posuere lorem ipsum dolor sit. Eu volutpat odio facilisis mauris. Justo eget magna fermentum iaculis eu non diam.',
        img: logo3,
        name: 'Anne Montenegro',
        time: 'há 30min',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        <div id="main-container">
          <ul>
            {posts.map(post => (
              <li key={post.name}>
                <Post message={post.message} time={post.time} name={post.name} img={post.img} />
              </li>
            ))}
          </ul>
        </div>
      </Fragment>
    );
  }
}
