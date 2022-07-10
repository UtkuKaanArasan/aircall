import React, { FC, useRef, useState } from "react";
// Tractor
import {
    // Typography
    Typography,
    // Form input
    Textarea,
    Button,
    // Icons
    NotesFilled,
    // Layout
    Flex,
} from "@aircall/tractor";
// Access token
import access_token from "../../access_token";
// Calls interface
import { Calls } from '../../Context';

interface CallItemNotesProps {
    call: Calls;
    getCalls: () => any;
}

const CallItemNotes: FC<CallItemNotesProps> = ({ call, getCalls }) => {

    const [input, setInput] = useState<string>("")

    function inputOnChangeHandler(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setInput(e.target.value)
    }

    // To clear when the clear button is pressed
    interface inputField {
        current: object | null
    }
    const inputField = useRef<HTMLTextAreaElement>(null)

    function inputOnClearHandler() {
        if (inputField.current != null) {
            inputField.current.value = ''
        }
    }

    // To bypass some typescript
    interface submit {
        method: string;
        headers: {
            Authorization: string;
            "Content-type": string;
        };
        body: any;
    }

    const submitConfig:submit = {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${access_token}`,
            "Content-type": "text/plain",
        },
        body: {
            "content": input.toString()
        }
    }

    // the request i make
    // // console.log(submitConfig)
    // the typeof the content that i send
    // // console.log(typeof submitConfig.body.content)
    // the length of the content that i send
    // // console.log(submitConfig.body.content.length)
    //but i get status 400 "content must be string and content should not be empty"

    async function submitButtonHandler() {
        // It doesn't work and i don't know why pls help
        if (typeof input === 'string' && input.length > 0) {
            await fetch(`https://frontend-test-api.aircall.io/calls/${call?.id}/note`, submitConfig)
                .then(
                    res => {
                        console.log(res);
                        console.log('yes yes');
                        getCalls();
                    }
                )
                .catch(err => { console.log(err); })
        }
    }


    return (
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
            <Flex flexDirection="column">
                <Textarea
                    ref={inputField}
                    placeholder="Enter your note here"
                    icon={NotesFilled}
                    onChange={inputOnChangeHandler}
                    onClear={() => inputOnClearHandler()}
                />
                <Flex justifyContent="flex-end">
                    <Button
                        onClick={submitButtonHandler}
                        size="regular"
                        variant="darkGhost">
                        Submit
                    </Button>
                </Flex>
            </Flex>
        </div>
    )
}

export default CallItemNotes;