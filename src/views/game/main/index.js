import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import './css/style.css'
import VideoPlayer from "../../components/videoplayer";
import GlassyCard from "./components/glassycard";
import {
    WelcomeImg, Character1, Character2, Character3, Character4, Character5, Character6, Character7, Character8,
    firstQuestionImg1, firstQuestionImg2, firstQuestionImg3, firstQuestionImg4, firstQuestionImg
} from './imports/images';
import {WelcomeVideo, firstQuestionVideo1, firstQuestionVideo2, firstQuestionVideo3, firstQuestionVideo4, firstQuestionVideo} from './imports/video'
import CharacterList from "./components/characterlist";
import ChoiceList from "./components/choicelist";


const characters  = [
    {
        img: Character1,
        name: 'ערן'
    },
    {
        img: Character2,
        name: 'עמית'
    },
    {
        img: Character3,
        name: 'יגאל'
    },
    {
        img: Character4,
        name: 'יצחק'
    },
    {
        img: Character5,
        name: 'מירי'
    },
    {
        img: Character6,
        name: 'אביבית'
    },
    {
        img: Character7,
        name: 'ריבה'
    },
    {
        img: Character8,
        name: 'יונית'
    }
]

const firstQuestion = [
    {
        src: firstQuestionVideo1,
        img: firstQuestionImg1,
        abstract: 'התקשר למנהל, התנצל, ושאל לגבי הגעה באיחור.',
        id: 1
    },
    {
        src: firstQuestionVideo2,
        img: firstQuestionImg2,
        abstract: 'מהר לעבודה מיד.',
        id: 2
    },
    {
        src: firstQuestionVideo3,
        img: firstQuestionImg3,
        abstract: '',
        id: 3
    },
    {
        src: firstQuestionVideo4,
        img: firstQuestionImg4,
        abstract: '',
        id: 4
    }
]




export default function Test() {

    const [activeStep, setActiveStep] = useState(0);
    const [isFinish, setIsFinish] = useState(false);
    const [character, setCharacter] = useState('״עדיין לא נבחר״');
    const [firstQuestionChoice, setFirstQuestionChoice] = useState(NaN);
    const [reachedStep, setReachedStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => {
            const nextStep = prevActiveStep + 1;
            if (nextStep > reachedStep) {
                setReachedStep(nextStep);
            } else if (nextStep < reachedStep) {
                setIsFinish(true);
                return nextStep;
            }
            setIsFinish(false);
            return nextStep;
        });
    };


    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        setIsFinish(true);
    };


    const handleReset = () => {
        setActiveStep(0);
    };

    const handleVideoEnd = () => {
        setIsFinish(!isFinish);
    };

    const handelSelectingCharacter = (character) => {
        setCharacter(character);
        setIsFinish(true);
    }

    const handleSelectingQuestion1Choice = (choice) => {
        setFirstQuestionChoice(choice);
        setIsFinish(true);
    }

    const steps = [
        {
            title: 'Intro video',
            component: <VideoPlayer width='1493px' height='840px' poster={WelcomeImg} videoSrc={WelcomeVideo} onVideoEnd={handleVideoEnd}/>,
        },
        {
            title: 'Character selection',
            component: <GlassyCard width='1493px' height='840px'>
                <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-around', flexDirection: 'column', alignItems: 'center'}}>
                    <Typography component='h1' sx={{ direction: 'rtl', color: '#0B4F71', fontFamily: 'Rubik', fontSize: '25px'}}>כעת תבחר את הדמות שתרצה להיות במשחק ולאחר מכן תלחץ על החץ הימיני כדי להמשיך.</Typography>
                    <Typography component='h2' sx={{ direction: 'rtl', color: '#0B4F71', fontFamily: 'Rubik', fontSize: '15px'}}> הדמות שלך היא {character}</Typography>
                    <CharacterList characterList={characters} handleSelect={handelSelectingCharacter} selectedCharacter={character}/>
                </Box>
            </GlassyCard>
        },
        {
            title: 'Wake-up Call',
            option: 'When You Forget to Rise and Shine',
            component: <VideoPlayer width='1493px' height='840px' poster={firstQuestionImg} videoSrc={firstQuestionVideo} onVideoEnd={handleVideoEnd}/>
        },
        {
            title: 'Select Your Path',
            component: <ChoiceList selected={firstQuestionChoice} handleSelect={handleSelectingQuestion1Choice} videos={firstQuestion} title="תלחץ על כל מלבן בכדי לראות את הסרטון, ולאחר צפייה בכל האפשרויות תבחר כיצד אתה היית מתנהג."/>
        },
    ];

    return (
        <Box className={'test container'}>
            <Stepper activeStep={activeStep}>
                { steps.map((step, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (step.hasOwnProperty('option')) {
                        labelProps.optional = (
                            <Typography variant="caption">{step.option}</Typography>
                        );
                    }
                    return (
                        <Step key={index} {...stepProps}>
                            <StepLabel {...labelProps}>{step.title}</StepLabel>
                        </Step>
                    );
                 })
                }
            </Stepper>
            {activeStep === steps.length ? (
                <>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </>
            ) : (
                <>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        { steps[activeStep].component }
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            variant="contained"
                            sx={{ mr: 1 }}
                            startIcon={activeStep !== 0 ? <ArrowBackIcon /> : null}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />

                        <Button
                            onClick={handleNext}
                            disabled={!isFinish}
                            variant="contained"
                            size="large"
                            endIcon={activeStep === steps.length - 1 ? <DoneAllIcon /> : <ArrowForwardIcon />}
                        >
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>

                    </Box>
                </>
            )}
        </Box>
    );

}