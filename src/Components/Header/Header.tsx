// Styling
import styled from "./Header.module.css"
// React
import { FC, useContext } from "react";
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
    Button,
} from "@aircall/tractor";
// Call context
import { CallContext } from "../../Context";
// Call interface
import { Calls } from "../../Context";

interface HeaderProps{
    setCalls: any;
}

const Header: FC<HeaderProps> = ({setCalls}) => {

    const calls = useContext(CallContext)

    function reloadButton():void {
        window.location.reload()
    }

    // Filtering function
    function filterCalls(filter: string) {
        let filteredCalls: Calls[];
        if (filter.toLowerCase() === 'inbound' || filter.toLowerCase() === 'outbound') {
            filteredCalls = calls.filter((item:any) => {
                return item.direction === filter
            })
        } else if (filter.toLowerCase() === 'archived') {
            filteredCalls = calls.filter((item: any) => {
                return item.is_archived === true
            })
        } else if (filter.toLowerCase() === 'answered' || filter.toLowerCase() === 'missed' || filter.toLowerCase() === 'voicemail') {
            filteredCalls = calls.filter((item: any) => {
                return item.call_type === filter
            })
        }
        // It doesn't create problems, no worries
        setCalls(filteredCalls)
    }

    // Filter dropdown handler
    function dropdownHandler(e: any) {
        switch (e.target.innerText) {
            case 'Inbound':
                filterCalls('inbound');
                break;
            case 'Outbound':
                filterCalls('outbound');
                break;
            case 'Archived':
                filterCalls('archived');
                break;
            case 'Answered':
                filterCalls('answered');
                break;
            case 'Missed':
                filterCalls('missed');
                break;
            case 'Voicemail':
                reloadButton()
                filterCalls('voicemail');
                break;
            case 'All':
                reloadButton()
                break;
        }
    }

    return (
        <Tractor injectStyle>
            <Flex className={styled.container} justifyContent="space-between">
                <Typography variant="displayL">
                    Aircall
                </Typography>
                <Button onClick={reloadButton}>
                    Refresh
                </Button>
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