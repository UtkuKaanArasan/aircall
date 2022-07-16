// Styling
import styled from './PageSelect.module.css'
// React Type Checking
import { FC, SetStateAction } from "react";
// Tractor
import {
    Tractor,
    Slider,
    Typography,
    Flex,
} from "@aircall/tractor";

interface FooterProps {
    page: number;
    setPage: SetStateAction<any>;
}

const PageSelect: FC<FooterProps> = ({ page, setPage }) => {

    function sliderHandler(value: string) {
        setPage(value)
    }

    return (
        <footer>
            <Tractor>
                <Flex flexDirection="column" className={styled.container}>
                    <Typography variant="displayS" className={styled.text}>
                        Page: {page}
                    </Typography>
                    <Slider onChange={sliderHandler} min={1} max={10} defaultValue={page} />
                </Flex>
            </Tractor>
        </footer>
    )
}

export default PageSelect;