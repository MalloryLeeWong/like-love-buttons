import React, { Component } from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

export default class LikeButton extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
    };
    this.like = this.like.bind(this);
  }

  like() {
    let newCount = this.state.likes + 1;
    this.setState({
      likes: newCount,
    });
  }

  render() {
    return (
      <div>
        <div>
          <ThumbUpAltIcon onClick={this.like} color="primary"/>
        </div>
        <div>
          <p>{this.state.likes}</p>
        </div>
      </div>
    );
  }
}
