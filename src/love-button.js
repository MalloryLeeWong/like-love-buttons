import React, { Component } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default class LoveButton extends Component {
  constructor() {
    super();
    this.state = {
      loves: 0,
    };
    this.love = this.love.bind(this);
  }

  love() {
    let newCount = this.state.loves + 1;
    this.setState({
      loves: newCount,
    });
  }

  render() {
    return (
      <div>
        <div>
          <FavoriteIcon onClick={this.love} color="secondary"/>
        </div>
        <div>
          <p>{this.state.loves}</p>
        </div>
      </div>
    );
  }
}
