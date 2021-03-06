import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="sidebar" className='sidebar hidden'>
        <Link to='/home'>
          <i className='material-icons'>home</i>
          <span>Home</span>
        </Link>
        <Link to='/trending'>
          <i className='material-icons'>whatshot</i>
          <span>Trending</span>
        </Link>
        { this.props.loggedIn ? <Link to=''>
          <i className='material-icons'>hourglass_full</i>
          <span>History</span>
        </Link> : '' }
        <Link to=''>
          <i className='material-icons redish'>music_video</i>
          <span>Music</span>
        </Link>
        <Link to=''>
          <i className='material-icons redish'>movie</i>
          <span>Movies</span>
        </Link>
        <Link to=''>
          <i className='material-icons redish'>video_label</i>
          <span>TV Shows</span>
        </Link>
        <Link to=''>
          <i className='material-icons redish'>rowing</i>
          <span>Sports</span>
        </Link>
        <Link to=''>
          <i className='material-icons redish'>videogame_asset</i>
          <span>Gaming</span>
        </Link>
        { this.props.loggedIn ? <Link to=''>
          <i className='material-icons redish'>account_circle</i>
          <span>My Channel</span>
        </Link> : '' }
        { this.props.loggedIn ? <Link to='/subscriptions'>
          <i className='material-icons redish'>subscriptions</i>
          <span>Subscriptions</span>
        </Link> : '' }
        { this.props.loggedIn ? <Link to=''>
          <i className='material-icons redish'>watch_later</i>
          <span>Watch Later</span>
        </Link> : '' }
        <Link to=''>
          <i className='material-icons redish'>view_array</i>
          <span>Get YouTube Red</span>
        </Link>

        <hr />
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  loggedIn: Boolean(user)
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Sidebar));
