//React, Hooks, Typescript
import React, { FC, useContext } from "react";
//Components
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
            <>
                <h1>Calls</h1>
                {
                    calls.map(
                        (item: any) => {
                            return (
                                <CallItem key={item.id} call={item} />
                            )
                        }
                    )
                }
            </>
        )
    }
}

export default CallList;