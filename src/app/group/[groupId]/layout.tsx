import { onAuthenticatedUser } from "@/actions/auth"
import {
    onGetAllGroupMembers,
    onGetGroupChannels,
    onGetGroupInfo,
    onGetGroupSubscriptions,
    onGetUserGroups,
} from "@/actions/groups"
import SideBar from "@/components/global/slidebar"
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from "@tanstack/react-query"
import { redirect } from "next/navigation"
import React from "react"

type GroupLayoutProps = {
    children: React.ReactNode
    params: {
        groupId: string
    }
}
//WIP : Complete the group layout
const GroupLayout = async ({ children, params }: GroupLayoutProps) => {
    const query = new QueryClient()

    const user = await onAuthenticatedUser()
    if (!user) redirect("/sign-in")

    //group Info
    await query.prefetchQuery({
        queryKey: ["group-info"],
        queryFn: () => onGetGroupInfo(params.groupId),
    })
    //user groups
    await query.prefetchQuery({
        queryKey: ["user-groups"],
        queryFn: () => onGetUserGroups(user.id as string),
    })

    //channels
    await query.prefetchQuery({
        queryKey: ["group-channels"],
        queryFn: () => onGetGroupChannels(params.groupId),
    })
    //group subscriptions
    await query.prefetchQuery({
        queryKey: ["group-subscriptions"],
        queryFn: () => onGetGroupSubscriptions(params.groupId),
    })
    //members-chat
    await query.prefetchQuery({
        queryKey: ["group-members"],
        queryFn: () => onGetAllGroupMembers(params.groupId),
    })
    return (
        <HydrationBoundary state={dehydrate(query)}>
            <div className="flex h-screen md:pt-5">
                <SideBar groupId={params.groupId} userId={user.id} />
            </div>
        </HydrationBoundary>
    )
}

export default GroupLayout
