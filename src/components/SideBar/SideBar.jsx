import React from 'react'

const SideBar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Cantidad</SidebarLink>
                <SidebarLink to="/">Cantidad</SidebarLink>
                <SidebarLink to="/">Cantidad</SidebarLink>
            </SidebarMenu>
        </SidebarContainer>
    )
}

export default SideBar
