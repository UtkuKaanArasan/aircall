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


const Header:FC = () => {

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
                        <MenuItem>All</MenuItem>
                        <MenuItem>Inbound</MenuItem>
                        <MenuItem>Outbound</MenuItem>
                        <MenuItem>Archived</MenuItem>
                        <MenuItem>Answered</MenuItem>
                        <MenuItem>Archived</MenuItem>
                        <MenuItem>Voicemail</MenuItem>
                    </Menu>
                </Dropdown>
            </Flex>
        </Tractor>
    )
}

export default Header;