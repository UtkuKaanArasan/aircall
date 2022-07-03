// React, Hooks, Typescript
import React, { FC, useContext } from "react";

//To bypass typescript - For some reason it can't see the keys of the object
interface CallItemProps{call: any;}

const CallItem:FC<CallItemProps> = ({call}) => {
    return (
        //test code
        <div>
            {call.from}
        </div>
    )
}

export default CallItem;