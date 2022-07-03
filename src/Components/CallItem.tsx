import React, { useContext } from "react";
import { CallContext } from "../Context";


const CallItem = () => {

    const calls: object[] = useContext<object[]>(CallContext);

    return (
        <div>
            {
                calls.map((item:any) => {
                    return (<li>{item.id }</li> )
                })
            }
        </div>
    )
}




export default CallItem;