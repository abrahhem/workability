import React, {useEffect, useState} from 'react';
import { CardMedia, Box, Radio, Card, Typography } from '@mui/material';

export default function CharacterList(props) {
    const characterList = props.characterList;
    const selectedCharacter = props.selectedCharacter;
    const [selectedItem, setSelectedItem] = useState('');

    const handleSelect = props.handleSelect;

    const handleRadioChange = (item) => {
        setSelectedItem(item.name);
        handleSelect(item.name);
    };

    useEffect(() => {
        setSelectedItem(selectedCharacter);
    }, [selectedCharacter]);


    return (
        <Box
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
            alignItems="flex-start"
        >
            {characterList.map((item) => (
                <Card
                    key={item.img}
                    sx={{
                        flexBasis: '20%',
                        p: 1,
                        border: `2px solid ${selectedItem === item.name ? 'green' : 'transparent'}`,
                        margin: '20px',
                        height: '300px',
                        background: 'none',
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Box display='flex' alignItems='center' justifyContent='space-between' width='100%'>
                        <Radio
                            checked={selectedItem === item.name}
                            onChange={() => handleRadioChange(item)}
                        />
                        <Typography component="h1"  align="center" color="white">{item.name}</Typography>
                    </Box>
                    <CardMedia component="img" src={item.img} alt={item.name} style={{ width: '250px' }} />
                </Card>
            ))}
        </Box>
    );
}