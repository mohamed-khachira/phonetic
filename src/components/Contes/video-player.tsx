interface VideoPlayerProps {
    video: string;
}

export const VideoPlayer = ({video}: VideoPlayerProps) => {
    return(
        <video controls width="70%" className="videoPlayer" src={video}></video>
    )
};

export default VideoPlayer;