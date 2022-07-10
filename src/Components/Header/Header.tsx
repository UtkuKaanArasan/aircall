// Styling
import styled from "./Header.module.css"
// React
import { FC } from "react";
// Tractor
import {
    Tractor,
    // Layout
    Flex,
    // Typography
    Typography,
    // Icon
    PreferencesOutlined,
    // Dropdown components
    Dropdown,
    DropdownButton,
    Menu,
    MenuItem,
} from "@aircall/tractor";


const Header: FC = () => {

    function dropdownHandler(e:any) {
        switch (e.target.innerText) {
            case 'Inbound':
                console.log('inbound');
                break;
            case 'Outbound':
                console.log('outbound');
                break;
            case 'Archived':
                console.log('archived');
                break;
            case 'Answered':
                console.log('answered');
                break;
            case 'Missed':
                console.log('missed');
                break;
            case 'Voicemail':
                console.log('voicemail');
                break;
        }
    }

    return (
        <Tractor injectStyle>
            <Flex className={styled.container} justifyContent="space-between">
                <Typography variant="displayL">
                    Aircall
                </Typography>
                <Dropdown trigger={<DropdownButton mode="link" variant="primary" iconClose={<PreferencesOutlined />}>
                    Filters
                </DropdownButton>} position="bottom" anchor="end">
                    <Menu>
                        <MenuItem onClick={dropdownHandler}>
                            All
                        </MenuItem>
                        <MenuItem onClick={dropdownHandler}>
                            Inbound
                        </MenuItem>
                        <MenuItem onClick={dropdownHandler}>
                            Outbound
                        </MenuItem>
                        <MenuItem onClick={dropdownHandler}>
                            Archived
                        </MenuItem>
                        <MenuItem onClick={dropdownHandler}>
                            Answered
                        </MenuItem>
                        <MenuItem onClick={dropdownHandler}>
                            Missed
                        </MenuItem>
                        <MenuItem onClick={dropdownHandler}>
                            Voicemail
                        </MenuItem>
                    </Menu>
                </Dropdown>
            </Flex>
        </Tractor>
    )
}

export default Header;