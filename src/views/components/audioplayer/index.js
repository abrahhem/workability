
import React, {useEffect, useRef, useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import audio from '../../includes/audio/introduction.ogg'


const Widget = styled('div')(({ theme }) => ({
    padding: 16,
    borderRadius: 16,
    width: 343,
    maxWidth: '100%',
    margin: 'auto',
    position: 'relative',
    zIndex: 1,
    backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
    backdropFilter: 'blur(40px)',
}));


const TinyText = styled(Typography)({
    fontSize: '0.75rem',
    opacity: 0.38,
    fontWeight: 500,
    letterSpacing: 0.2,
});

export default function AudioPlayer(props) {

    const [duration, setDuration] =  useState(0.0);  // seconds
    const [paused, setPaused] = useState(false);
    const [position, setPosition] = useState(0);
    const [volume, setVolume] = useState(30);
    const audioRef = useRef(null);

    function formatDuration(value) {
        const minute = Math.floor(value / 60);
        const secondLeft = Number((value - minute * 60).toFixed(2));
        return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
    }

    const togglePlay = () => {
        const audioElement = audioRef.current;
        console.log(audioElement.duration);
        paused ? audioElement.pause() : audioElement.play();
        setPaused(!paused);
    };

    useEffect(() => {
        const audioElement = audioRef.current;
        setDuration(audioElement.duration);
        audioElement.volume = volume / 100;

        const handleLoadedMetadata = () => {
            setDuration(audioElement.duration);
        };
        const handleTimeUpdate = () => {
            setPosition(audioElement.currentTime);
        };

        audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);
        audioElement.addEventListener('timeupdate', handleTimeUpdate);

        return () => {
            audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
            audioElement.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, [volume]);

    const changeVolume = (event, newVolume) => {
        setVolume(newVolume);
        audioRef.current.volume = volume / 100;
    }

    const changePosition = (event, newPosition) => {
        setPosition(newPosition);
        audioRef.current.currentTime = newPosition;
        if (!paused) {
            audioRef.current.pause();
            setPaused(true);
        }
    }
    const releasePositionSlider = () => {
        if (paused) {
            audioRef.current.play();
            setPaused(false);
        }
    };



    return (
        <Box sx={{ width: '100%', overflow: 'hidden' }}>
            <Widget>
                <audio ref={audioRef} src={audio} />
                <Slider
                    aria-label="time-indicator"
                    size="small"
                    value={position}
                    min={0}
                    max={duration}
                    onChange={changePosition}
                    onChangeCommitted={releasePositionSlider}
                    sx={{
                        color: 'rgba(0,0,0,0.87)',
                        height: 4,
                        '& .MuiSlider-thumb': {
                            width: 8,
                            height: 8,
                            transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                            '&:before': {
                                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                            },
                            '&:hover, &.Mui-focusVisible': {
                                boxShadow: `0px 0px 0px 8px rgb(0 0 0 / 16%)`,
                            },
                            '&.Mui-active': {
                                width: 20,
                                height: 20,
                            },
                        },
                        '& .MuiSlider-rail': {
                            opacity: 0.28,
                        },
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mt: -2,
                    }}
                >
                    <TinyText>{formatDuration(position)}</TinyText>
                    <TinyText>-{formatDuration(duration - position)}</TinyText>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: -1,
                    }}
                >
                    <IconButton aria-label="previous song">
                        <FastRewindRounded fontSize="large" />
                    </IconButton>
                    <IconButton
                        aria-label={paused ? 'play' : 'pause'}
                        onClick={togglePlay}
                    >
                        {paused ? (
                            <PauseRounded
                                sx={{ fontSize: '3rem' }}
                            />
                        ) : (
                            <PlayArrowRounded sx={{ fontSize: '3rem' }}  />
                        )}
                    </IconButton>
                    <IconButton aria-label="next song">
                        <FastForwardRounded fontSize="large"  />
                    </IconButton>
                </Box>
                <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
                    <VolumeDownRounded  />
                    <Slider
                        aria-label="Volume"
                        defaultValue={volume}
                        min={0}
                        max={100}
                        onChange={changeVolume}
                        sx={{
                            color: 'rgba(0,0,0,0.87)',
                            '& .MuiSlider-track': {
                                border: 'none',
                            },
                            '& .MuiSlider-thumb': {
                                width: 24,
                                height: 24,
                                backgroundColor: '#fff',
                                '&:before': {
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                                },
                                '&:hover, &.Mui-focusVisible, &.Mui-active': {
                                    boxShadow: 'none',
                                },
                            },
                        }}
                    />
                    <VolumeUpRounded  />
                </Stack>
            </Widget>
        </Box>
    );
}