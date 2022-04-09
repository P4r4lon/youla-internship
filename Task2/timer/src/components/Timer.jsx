import React, {useEffect, useRef, useState} from 'react';
import {Button, ButtonGroup} from "@mui/material";


const Timer = () => {
    const [time, setTime] = useState(0)
    const [timerOn, setTimerOn] = useState(false)
    const [paused, setPaused] = useState(false)

    const onStart = () => {
        setTimerOn(!timerOn)
        setTime(0)
        if(paused){
            setPaused(false)
        }
    }

    const onPause = () => {
        setPaused(!paused)
    }

    const ref = useRef(null)
    useEffect(() => {
        if(paused || !timerOn){
            clearInterval(ref.current)
        }
        else {
            ref.current = setInterval(() => {
                setTime(time => time + 1)
            }, 1000)
        }}, [timerOn, paused])


    return (
        <div>
            <div style={{textAlign: "center", fontSize:"40px"}}>
                <h1 style={{margin: "0"}}>
                    {time}
                </h1>
            </div>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button onClick={onStart}>{timerOn ? "stop" : "start"}</Button>
                <Button disabled = {!timerOn} onClick={onPause}>{paused ? "resume" : "pause"}</Button>
            </ButtonGroup>
        </div>
    );
};

export default Timer;