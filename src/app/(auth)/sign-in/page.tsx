import SignInForm from '@/components/forms/sign-in'
import { GoogleAuthButton } from '@/components/global/google-0auth-button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import React from 'react'

type Props = {}

const SignIn = (props: Props) => {
  return (
    <>
    <h5 className="font-bold text-base text-themeTextWhite">Login</h5>
    <p className="text-themeTextGray leading-tight">
      Network with people from around the world, join groups, create your own,
      watch courses and become the best version of yourself.
    </p>
    <SignInForm />
    <div className="my-10 w-full relative">
      <div className="bg-black p-3 absolute text-themeTextGray text-xs top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        OR CONTINUE WITH
      </div>
      <Separator orientation="horizontal" className="bg-themeGray" />
    </div>
    <GoogleAuthButton method="signin" />
    <p className="text-muted mt-3 mb-1 text-center">
        If you dont have an account, you can{" "}
        <Link href={"/sign-up"} className='underline'>signup</Link> here.
      </p>
  </>
  )
}

export default SignIn