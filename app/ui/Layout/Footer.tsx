import { FaHome, FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import { useNavigate } from 'react-router'

export function Footer() {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }

  const handleHome = () => {
    navigate('/')
  }

  const handleNext = () => {
    navigate(1)
  }

  return (
    <footer className="h-16 p-4 w-full bg-brand-base2-100 text-brand-base1-10">
      <div className="flex w-full">
        <div className="w-1/3 flex flex-row flex-1 align-middle justify-center items-center">
          <button type="button" onClick={handleBack}>
            <FaArrowAltCircleLeft color={'white'} size={32} />
          </button>
        </div>
        <div className="w-1/3 flex flex-row flex-1 align-middle justify-center items-center">
          <button type="button" onClick={handleHome}>
            <FaHome color={'white'} size={32} />
          </button>
        </div>
        <div className="w-1/3 flex flex-row flex-1 align-middle justify-center items-center">
          <button type="button" onClick={handleNext}>
            <FaArrowAltCircleRight color={'white'} size={32} />
          </button>
        </div>
      </div>
    </footer>
  )
}
