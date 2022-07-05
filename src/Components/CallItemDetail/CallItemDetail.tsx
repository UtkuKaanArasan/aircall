// Styling
import styled from './CallItemDetail.module.css'
// Tractor
import {
    Tractor,
    // layout
    Flex,
    Spacer,
    //Typography
    Typography,
    // Close button
    CloseCircleFilled
} from '@aircall/tractor';
// React, Typescript
import React, { FC, useContext } from "react";
// React Router
import { useNavigate, useParams } from 'react-router-dom';
// Context
import { CallContext } from '../../Context';
// fancyTimeFormat function
import { fancyTimeFormat } from '../../functions/functions';

const CallItemDetail: FC = () => {

    // To get the call clicked
    const param = useParams()
    const calls = useContext(CallContext)
    let call: any = calls.filter((item: any) => {
        return item?.id === param.id
    })
    call = call[0]

    // To navigate home when closed
    const navigate = useNavigate()
    function closeButtonHandler() {
        navigate('/')
    }

    return (
        <Tractor injectStyle>
            <Flex
                flexDirection="column"
                className={styled.container}>
                <Spacer space="xxs" direction='vertical'>
                    <CloseCircleFilled size={48} color="red.base" onClick={closeButtonHandler} />
                    <Typography variant='displayS2'>
                        ID: {call?.id}
                    </Typography>
                    <Typography variant='displayS2'>
                        Direction: {call?.direction}
                    </Typography>
                    <Typography variant='displayS2'>
                        From: {call?.from}
                    </Typography>
                    <Typography variant='displayS2'>
                        Via: {call?.via}
                    </Typography>
                    <Typography variant='displayS2'>
                        To: {call?.to}
                    </Typography>
                    <Typography variant='displayS2'>
                        Duration(seconds): {call?.duration}
                    </Typography>
                    <Typography variant='displayS2'>
                        Duration(Formatted): {fancyTimeFormat(call?.duration)}
                    </Typography>
                    <Typography variant='displayS2'>
                        Call Type: {call?.call_type}
                    </Typography>
                    <Typography variant='displayS2'>
                        Created at: {call?.created_at}
                    </Typography>
                    <Typography variant='displayM'>Note details: </Typography>
                    <div>
                        {
                            // if there is no notes it renders this
                            call?.notes.length < 1 ?
                                <Typography variant='displayM'>No notes available</Typography>
                                :
                                //if there is notes it renders this
                                call?.notes.map((item: any) => {
                                    return (
                                        <React.Fragment key={item?.id}>
                                            <Typography variant='displayS2'>
                                                Note id: {item?.id}
                                            </Typography>
                                            <Typography variant='displayS2'>
                                                Note Content: {item?.content}
                                            </Typography>
                                            <br />
                                        </React.Fragment>
                                    )
                                })
                        }
                    </div>
                </Spacer>
            </Flex>
        </Tractor>
    )
}

export default CallItemDetail;