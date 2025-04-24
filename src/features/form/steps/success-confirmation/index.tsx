import { useNavigate } from 'react-router-dom'
import useCopy from '../../../../hooks/useCopy'
import Icon from './icons'

interface IProps {
  trackingCode: string
}

export default function SuccessConfirmation({ trackingCode }: IProps) {
  const [copied, copy] = useCopy()

  const navigate = useNavigate()

  function onTrackStatus() {
    navigate('/tracking')
  }

  return (
    <div className="animate-fadeIn text-center">
      <div className="flex justify-center mb-6">
        <div className="bg-indigo-100 p-6 rounded-full">
          <Icon className="w-12 h-12 text-indigo-600" />
        </div>
      </div>

      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Talebiniz Başarıyla Alınmıştır
      </h2>
      <p className="text-gray-500 mb-4">Proje Takip Numarası</p>
      <p
        className="text-xl font-medium text-gray-900 mb-8 cursor-pointer"
        onClick={() => copy(trackingCode)}
        title={copied ? 'Copied!' : 'Click to copy'}
      >
        {trackingCode}
      </p>

      <p className="text-gray-500 mb-2">
        Proje teklif durumunuzu takip etmek için
        <button
          className="text-indigo-600 hover:underline ml-1"
          onClick={onTrackStatus}
        >
          tıklayınız
        </button>
      </p>
    </div>
  )
}
