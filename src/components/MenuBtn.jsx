import React from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";

export function NestedMenu() {
    const [openMenu, setOpenMenu] = React.useState(false);

    return (
        <Menu>
            <MenuHandler>
                <img src="/assets/profile.webp" alt="" />
            </MenuHandler>
            <MenuList>
                <MenuItem>Menu Item 1</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
                <Menu
                    placement="right-start"
                    open={openMenu}
                    handler={setOpenMenu}
                    allowHover
                    offset={15}
                >
                    <MenuHandler classnameName="flex items-center justify-between">
                        <MenuItem>
                            Nested Item
                            <ChevronUpIcon
                                strokeWidth={2.5}
                                classnameName={`h-3.5 w-3.5 transition-transform ${openMenu ? "rotate-90" : ""
                                    }`}
                            />
                        </MenuItem>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem>Nested Item 1</MenuItem>
                        <MenuItem>Nested Item 2</MenuItem>
                        <MenuItem>Nested Item 3</MenuItem>
                    </MenuList>
                </Menu>
            </MenuList>
        </Menu>
    );
}