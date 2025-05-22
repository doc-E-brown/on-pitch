import { ReactNode } from 'react'
import { FaQuestionCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router'

export function Banner({ children }: { children: ReactNode }) {
  const navigate = useNavigate()

  const getHelp = () => {
    void navigate('/help')
  }
  return (
    <div className="top-0 size-16 p-4 w-full bg-brand-base2-100 ">
      <div className="flex w-full text-brand-base1-10 align-middle">
        <div className="flex flex-row justify-items-center text-center align-middle text-3xl">
          {children}
        </div>
        <div className="align-middle right-2 absolute">
          <button type="button" onClick={getHelp}>
            <FaQuestionCircle color={'white'} size={32} />
          </button>
        </div>
      </div>
    </div>
  )
}
