// Styling
import styled from './CallItemDetail.module.css'
// Tractor
import { Flex, Spacer, Tractor, Typography } from '@aircall/tractor';
// React, Typescript
import React, { FC, useContext } from "react";
// Context
import { CallContext } from '../../Context';
// fancyTimeFormat function
import { fancyTimeFormat } from '../../functions/functions';

const CallItemDetail: FC = () => {

    const calls = useContext(CallContext)
    let call: any = calls.filter((item: any) => {
        return item?.direction === 'inbound'
    })
    call = call[0]

    return (
        <Tractor injectStyle>
            <Flex
                justifyContent="center"
                flexDirection="column"
                className={styled.container}>
                <Spacer space="xxs" direction='vertical'>
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
                </Spacer>
                <p>Note details</p>

            </Flex>
        </Tractor>
    )
}

export default CallItemDetail;