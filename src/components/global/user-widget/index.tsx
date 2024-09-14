import { Message } from '@/icons'
import Link from 'next/link'
import React from 'react'
import {Notification} from './notification'
import {UserAvatar} from './user'

type Props = {
    image : string
    groupid : string
    userid : string
}

const UserWidget = ({
    userid,
    image,
    groupid
}: Props) => {
  return (
    <div className='gap-5 items-center hidden md:flex'>
        <Notification/>
        <Link href={`/group/${groupid}/messages`}>
        <Message/>
        </Link>
        <UserAvatar userid ={userid} image={image}  
        groupid={groupid}
        />
    </div>
  )
}

export default UserWidget