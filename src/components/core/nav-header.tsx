import React from 'react'
import { SidebarHeader, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'
import { SidebarMenu } from '../ui/sidebar'
import { BoltIcon } from 'lucide-react'

const NavHeader = () => {
    return (
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton size="lg" asChild>
                        <a href="#">
                            <div className="bg-teal-600 text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-md">
                                <BoltIcon className="size-4" />
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <span className="font-semibold -mb-2">MEX HR</span>
                                <span className="mt-0.5">v2.0.0</span>
                            </div>
                        </a>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
    )
}

export default NavHeader