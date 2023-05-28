import React from 'react';
import Box from '@mui/material/Box';

export default function GlassyCard({ width, height, border, children }) {
    return (
        <Box
            sx={{
                boxSizing: 'border-box',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: width,
                height: height,
                background:
                    'linear-gradient(126.6deg, rgba(255, 255, 255, 0.12) 28.69%, rgba(255, 255, 255, 0) 100%)',
                backdropFilter: 'blur(48px)',
                borderRadius: '25px',
                border: border ? border : '1px solid rgba(56, 84, 231, 0.2)',
                margin: '20px'
            }}
        >
            {children}
        </Box>

    );
}


