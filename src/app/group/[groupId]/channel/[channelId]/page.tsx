import { onAuthenticatedUser } from '@/actions/auth'
import { onGetChannelInfo } from '@/actions/channel'
import { onGetGroupInfo } from '@/actions/groups'
import { currentUser } from '@clerk/nextjs/server'
import { QueryClient } from '@tanstack/react-query'

type Props = {
    params: {
        channelId: string,
        groupId: string
    }
}

const GroupChannelPage = async ({params}: Props) => {
    const client = new QueryClient()
    const user = await currentUser()
    const authUser = await onAuthenticatedUser()

    // Prefetch the channel info
    await client.prefetchQuery({
        queryKey : ["channel-info"],
        queryFn : () => onGetChannelInfo(params.channelId)
    })
// Prefetch the group info
    await client.prefetchQuery({
      queryKey : ["about-group-info"],
      queryFn : () => onGetGroupInfo(params.groupId)
  })
 

  return (
    <div>GroupChannelPage</div>
  )
}

export default GroupChannelPage