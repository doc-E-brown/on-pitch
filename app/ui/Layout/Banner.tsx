import { ReactNode } from 'react'
import { FaQuestionCircle } from 'react-icons/fa'

export function Banner({ children }: { children: ReactNode }) {
  return (
    <div className="top-0 size-16 p-4 w-full bg-brand-base2-100 ">
      <div className="flex w-full text-brand-base1-10 align-middle">
        <div className="flex flex-row justify-items-center text-center align-middle text-3xl">
          {children}
        </div>
        <div className="align-middle right-2 absolute">
          <FaQuestionCircle color={'white'} size={32} />
        </div>
      </div>
    </div>
  )
}
