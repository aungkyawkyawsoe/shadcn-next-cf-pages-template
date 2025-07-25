"use client"

import * as React from "react"
import {
    CpuIcon,
    FolderClockIcon,
    ReceiptTextIcon,
    BriefcaseIcon,
    MapPinnedIcon,
    WrenchIcon,
    UserIcon,
    UserPlusIcon,
    MegaphoneIcon
} from "lucide-react"
import { useTranslations } from "next-intl"

import { NavMain } from "@/components/core/nav-main"
import { NavUser } from "@/components/core/nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarRail,
} from "@/components/ui/sidebar"
import NavHeader from "./nav-header"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const t = useTranslations("HR")

    // This is sample data with translations.
    const data = {
        user: {
            name: "Leon Davis",
            email: "leon@davis.com",
            avatar: "/avatars/avatar.png",
        },
        navMain: [
            {
                title: t("core.title"),
                url: "#",
                icon: CpuIcon,
                isActive: true,
                items: [
                    {
                        title: t("core.departments"),
                        url: "#",
                    },
                    {
                        title: t("core.designations"),
                        url: "#",
                    },
                    {
                        title: t("core.employees"),
                        url: "#",
                    },
                    {
                        title: t("core.shifts"),
                        url: "#",
                    },
                    {
                        title: t("core.employment_history"),
                        url: "#",
                    }
                ],
            },
            {
                title: t("time_management.title"),
                url: "#",
                icon: FolderClockIcon,
                items: [
                    {
                        title: t("time_management.attendances"),
                        url: "#",
                    },
                    {
                        title: t("time_management.absences"),
                        url: "#",
                    },
                    {
                        title: t("time_management.overtimes"),
                        url: "#",
                    },
                    {
                        title: t("time_management.holidays"),
                        url: "#",
                    },
                ],
            },
            {
                title: t("payroll.title"),
                url: "#",
                icon: ReceiptTextIcon,
                items: [
                    {
                        title: t("payroll.payroll_driver"),
                        url: "#",
                    },
                    {
                        title: t("payroll.payroll_rules"),
                        url: "#",
                    },

                ],
            },
            {
                title: t("leave.title"),
                url: "#",
                icon: BriefcaseIcon,
                items: [
                    {
                        title: t("leave.leave_types"),
                        url: "#",
                    },
                    {
                        title: t("leave.leave_requests"),
                        url: "#",
                    },
                ],
            },
            {
                title: t("trip.title"),
                url: "#",
                icon: MapPinnedIcon,
                items: [
                    {
                        title: t("trip.trip_records"),
                        url: "#",
                    },
                    {
                        title: t("trip.trip_bonus"),
                        url: "#",
                    },
                ],
            },
            {
                title: t("adjustments.title"),
                url: "#",
                icon: WrenchIcon,
                items: [
                    {
                        title: t("adjustments.contributions"),
                        url: "#",
                    },
                    {
                        title: t("adjustments.deductions"),
                        url: "#",
                    },
                    {
                        title: t("adjustments.other_plus"),
                        url: "#",
                    },
                    {
                        title: t("adjustments.other_minus"),
                        url: "#",
                    }
                ],

            },
            {
                title: t("personal_actions.title"),
                url: "#",
                icon: UserIcon,
                items: [
                    {
                        title: t("personal_actions.job_movements"),
                        url: "#",
                    },
                    {
                        title: t("personal_actions.resignation"),
                        url: "#",
                    },
                    {
                        title: t("personal_actions.termination"),
                        url: "#",
                    },
                    {
                        title: t("personal_actions.rehire"),
                        url: "#",
                    },
                    {
                        title: t("personal_actions.reassignment"),
                        url: "#",
                    },
                ]
            },
            {
                title: t("recruitment.title"),
                url: "#",
                icon: UserPlusIcon,
                items: [
                    {
                        title: t("recruitment.job_positions"),
                        url: "#",
                    },
                    {
                        title: t("recruitment.candidates"),
                        url: "#",
                    },
                    {
                        title: t("recruitment.interviews"),
                        url: "#",
                    }

                ]
            },
            {
                title: t("communications.title"),
                url: "#",
                icon: MegaphoneIcon,
                items: [
                    {
                        title: t("communications.hr_policies"),
                        url: "#",
                    },
                    {
                        title: t("communications.announcements"),
                        url: "#",
                    },
                    {
                        title: t("communications.newsletters"),
                        url: "#",
                    },
                ]
            }
        ],
    }

    return (
        <Sidebar collapsible="icon" {...props}>
            <NavHeader />
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
