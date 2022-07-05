// Styling
import styling from './CallItem.module.css'
// Tractor Components
import {
    Tractor,
    //Logos
    CallInboundFilled,
    CallOutboundFilled,
    HangUpOutlined,
    CallOutlined,
    VoicemailOutlined,
    //Layout
    Grid,
    Flex,
    //Typography
    Typography,
} from "@aircall/tractor";
// React, Typescript
import React, { FC } from "react";
//React Router
import { useNavigate } from 'react-router-dom';
// fancyTimeFormat function
import {fancyTimeFormat} from "../../functions/functions"

//To bypass typescript - For some reason it can't see the keys of the object
interface CallItemProps { call: any; }

const CallItem: FC<CallItemProps> = ({ call }) => {

    function callTypeCheck() {
        switch (call.call_type) {
            case 'missed':
                return <HangUpOutlined />;
            case 'answered':
                return <CallOutlined />;
            case 'voicemail':
                return <VoicemailOutlined />;
        }
    }

    // Routes to call details
    const navigate = useNavigate();
    function handleClick() {
        navigate(`/call/${call.id}`)
        window.scrollTo(0, 0)
    }

    return (
        //test code
        <Tractor injectStyle>
            <Grid onClick={handleClick} className={styling.container} gridTemplateColumns="auto auto auto" gridAutoRows="128px" gridGap={3}>
                <Flex justifyContent="center" alignItems="center">
                    {call.direction === 'inbound' ? <CallInboundFilled /> : <CallOutboundFilled />}
                </Flex>
                <Flex flexDirection="column" justifyContent="space-evenly" >
                    <Typography variant='displayS2'>From : {call.from} </Typography>
                    <Typography variant='displayS2'>Via : {call.via} </Typography>
                    <Typography variant='displayS2'>To : {call.to} </Typography>
                    <Typography variant="displayS2">{fancyTimeFormat(call.duration)}</Typography>
                </Flex>
                <Flex justifyContent="center" alignItems="center">
                    {callTypeCheck()}
                </Flex>
            </Grid>
        </Tractor >
    )
}

export default CallItem;