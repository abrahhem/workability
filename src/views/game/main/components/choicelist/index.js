import React, {useEffect, useState} from 'react';
import { Box, Typography, Radio } from '@mui/material';
import GlassyCard from "../glassycard";
import VideoPlayer from "../../../../components/videoplayer";

export default function ChoiceList(props) {
    const { title, videos, handleSelect, selected } = props;
    const [selectedOption, setSelectedOption] = useState(null);

    const handleVideoSelect = (videoID) => {
        setSelectedOption(videoID);
        handleSelect(videoID);
    };

    useEffect(() => {
        setSelectedOption(selected)
    }, [selected]);

    return (
        <Box textAlign="center">
            <Typography
                component="h1"
                sx={{
                    direction: 'rtl',
                    color: '#0B4F71',
                    fontFamily: 'Rubik',
                    fontSize: '25px'
                }}
            >
                {title}
            </Typography>
            <Box
                width="1493px"
                height="840px"
                display="flex"
                justifyContent="space-around"
                alignItems="center"
                flexWrap="wrap"
                overflow="scroll"
            >
                {videos.map((video) => (
                    <GlassyCard
                        key={video.id}
                        width="45%"
                        height="45%"
                        border={ selectedOption === video.id ? '2px solid green' : ''}
                    >
                        <Radio // Add the Radio component here
                            checked={selectedOption === video.id}
                            onChange={() => handleVideoSelect(video.id)}
                            sx={{
                                position: 'absolute',
                                top: '0px',
                                left: '0px',
                                zIndex: 1
                            }}
                        />
                        <VideoPlayer
                            width="90%"
                            height="90%"
                            poster={video.poster}
                            videoSrc={video.src}
                        />
                    </GlassyCard>
                ))}
            </Box>
        </Box>
    );
}
