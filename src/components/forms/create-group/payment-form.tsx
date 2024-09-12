import { StripeElements } from '@/components/global/stripe/elements'
import { usePayments } from '@/hooks/payment'
import React from 'react'

type Props = {
  userId: string
  affiliate: boolean
  stripeId?: string
}


const PaymentForm = ({
    userId,
    affiliate,
    stripeId
} : Props) => {
  const {
    onCreateGroup,
    isPending,
    register,
    errors,
    isCategory,
    creatingIntent,
  } = usePayments(userId, affiliate)
  return (
    <StripeElements>
   <p></p>
    </StripeElements>
  )
}

export default PaymentForm