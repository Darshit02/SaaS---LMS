"use client"

import { useStripeElements } from "@/hooks/payment"
import { Elements } from "@stripe/react-stripe-js"

type StripeElementsProps = {
  children: React.ReactNode
  // stripe?: Promise<any>
}

export const StripeElements = ({ children }: StripeElementsProps) => {
  const { StripePromise } = useStripeElements()

  const promise = StripePromise()
  //@ts-ignore
  return promise && <Elements stripe={promise}>{children}</Elements>
}