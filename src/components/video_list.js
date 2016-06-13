import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props)=> {
	// available props: props.videos, props.onVideoSelect
	const videoItems = props.videos.map(video => {
		return (
			<VideoListItem
			key={video.etag}
			video={video}
			onVideoSelect={props.onVideoSelect} />
		);
	})
	return (
		<ul className="col-md-8 list-group">
			{videoItems}
		</ul>
	);
}

export default VideoList;