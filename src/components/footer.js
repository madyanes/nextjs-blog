export default function Footer() {
  const date = new Date().getFullYear()
  return (
    <div className='bg-white'>
      <p className='text-center font-semibold text-sm'>© { date } ian</p>
    </div>
  )
}
