import React, { Component } from 'react';
import ClientView from './ClientView';

export class HomePage extends Component {
  render() {
    return (
      <div className='home'>
        <div className="client-pane">
          <ClientView />
        </div>
      </div>
    )
  }
}

export default HomePage