import React, { FC, useContext } from "react";
import { CallContext } from "../Context";
import CallItem from "./CallItem";


const CallList: FC = () => {
    
    const calls: object[] = useContext(CallContext)
    
    // If there's no calls it will show 'No calls found else will show the calls
    if (calls.length < 1) {
        return (
            <h1>No calls found</h1>
        )
    } else {
        return (
            <div>
                <h1>Calls</h1>
                {
                    calls.map(
                        (item: any) => {
                            return (<li key={item.id}>{item.from}</li>)
                        }
                    )
                }
            </div>
        )
    }
}

export default CallList;