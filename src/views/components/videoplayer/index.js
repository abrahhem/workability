import React, {Component } from 'react';
import { Player, ControlBar, PlayToggle, VolumeMenuButton, BigPlayButton } from 'video-react';
import Box from '@mui/material/Box';
import 'video-react/dist/video-react.css';
//
// export default function VideoPlayer({ videoSrc, poster, width, height, onVideoEnd }) {
//     const playerRef = useRef(null);
//
//     useEffect(() => {
//         const player = playerRef.current.getState();
//
//         const handleStateChange = (state, prevState) => {
//             if (prevState.ended !== state.ended && state.ended) {
//                 onVideoEnd();
//             }
//         };
//
//         player.subscribeToStateChange(handleStateChange);
//
//         return () => {
//             player.unsubscribeFromStateChange(handleStateChange);
//         };
//     }, [onVideoEnd]);
//
//     return (
//         <Box width={width} height={height}>
//             <Player ref={playerRef} src={videoSrc} poster={poster}>
//                 <ControlBar autoHide={false}>
//                     <BigPlayButton position="center" />
//                     <PlayToggle />
//                     <VolumeMenuButton />
//                 </ControlBar>
//             </Player>
//         </Box>
//     );
// }



export default class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.width = props.width;
        this.height = props.height;
        this.handleVideoEnd = props.onVideoEnd;
        this.state = {
            source: props.videoSrc,
            poster: props.poster
        };

        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.load = this.load.bind(this);
        this.changeCurrentTime = this.changeCurrentTime.bind(this);
        this.seek = this.seek.bind(this);
        this.changePlaybackRateRate = this.changePlaybackRateRate.bind(this);
        this.changeVolume = this.changeVolume.bind(this);
        this.setMuted = this.setMuted.bind(this);
        this.ended = this.ended.bind(this);
    }

    componentDidMount() {
        // subscribe state change
        this.player.subscribeToStateChange(this.handleStateChange.bind(this));
    }

    setMuted(muted) {
        return () => {
            this.player.muted = muted;
        };
    }

    handleStateChange(state) {
        // copy player state to this component's state
        this.setState({
            player: state
        });
        if(this.state.player?.ended && this.handleVideoEnd) {
            this.handleVideoEnd();
        }
    }

    play() {
        this.player.play();
    }

    pause() {
        this.player.pause();
    }

    load() {
        this.player.load();
    }

    ended(ended) {
        this.player.ended = ended;
    }

    changeCurrentTime(seconds) {
        return () => {
            const { player } = this.player.getState();
            this.player.seek(player.currentTime + seconds);
        };
    }

    seek(seconds) {
        return () => {
            this.player.seek(seconds);
        };
    }

    changePlaybackRateRate(steps) {
        return () => {
            const { player } = this.player.getState();
            this.player.playbackRate = player.playbackRate + steps;
        };
    }

    changeVolume(steps) {
        return () => {
            const { player } = this.player.getState();
            this.player.volume = player.volume + steps;
        };
    }


    render() {
        return (
            <Box width={this.width} height={this.height}>
                <Player ref={(player) => { this.player = player; }}>
                    <source src={this.state.source} />
                    <ControlBar autoHide={false}>
                        <BigPlayButton position="center" />
                        <PlayToggle />
                        <VolumeMenuButton />
                    </ControlBar>
                </Player>
            </Box>
        );
    }
}
