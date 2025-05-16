import { FaInfoCircle } from 'react-icons/fa'

export function InfoIcon({ size }: { size?: string }) {
  return (
    <div className="relative inline-block items-center">
      <FaInfoCircle size={size ?? '24'} />
    </div>
  )
}
