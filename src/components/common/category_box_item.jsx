import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import { formatNumber, parseDuration, shortenString } from '../../helpers';

class CategoryBoxItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const vid = this.props.vid;
    const { channelTitle, publishedAt } = vid.snippet;
    const { url } = vid.snippet.thumbnails.medium;
    const title = shortenString(vid.snippet.title, 70);
    let viewCount = '------';
    if (vid.statistics) {
      viewCount = vid.statistics.viewCount;
    }

    let videoId;
    if (typeof vid.id === 'string') {
      videoId = vid.id;
    } else {
      videoId = vid.id.videoId;
    }

    let duration;
    if(vid.contentDetails) {
      duration = vid.contentDetails.duration;
      duration = parseDuration(duration);
    }

    return (
      <div className="category-box-item">

        <Link to={`watch/${videoId}`} className="category-box-item-image">
          <img src={url} />
          <span>{ duration }</span>
        </Link>

        <Link to={`watch/${videoId}`} className="category-box-item-title">
          <h1 className='video-title'>{title}</h1>
        </Link>

        <Link to='#' className='category-box-item-channel'>
          <p className='basic-text'>{channelTitle}</p>
        </Link>

        <div className="category-box-item-info">
          <span className='basic-text'>{ formatNumber(viewCount) } views</span>
          <span className='category-box-item-date basic-text'>{ moment(publishedAt).fromNow() } </span>
        </div>
      </div>
    );
  }
}

export { CategoryBoxItem };
