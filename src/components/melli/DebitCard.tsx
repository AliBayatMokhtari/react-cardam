import { DebitCard } from "../types/DebitCard"

export default function MelliDebitCard({
  cardNumber,
  cvv2,
  expDate,
  owner,
  minimal = false,
}: DebitCard) {
  return (
    <div>
      {JSON.stringify({ cardNumber, cvv2, expDate, owner, minimal })}
    </div>
  )
}
