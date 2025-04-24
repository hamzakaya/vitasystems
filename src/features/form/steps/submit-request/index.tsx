import { Badge } from './badge'
import { Button } from './button'

interface IProps {
  onSubmit: () => void
  isSubmitting: boolean
}

export default function SubmitRequest({ onSubmit, isSubmitting }: IProps) {
  return (
    <div className="animate-fadeIn text-center">
      <div className="flex justify-center mb-6">
        <Badge icon="dollar" />
      </div>

      <h2 className="text-xl font-semibold text-indigo-950 mb-4">
        Teklif Talebini Gönder
      </h2>

      <p className="text-gray-500 mb-8">
        Lütfen önceki adımlarda girdiğiniz tüm bilgileri gözden geçirin. Her şey
        doğruysa, mesajınızı gönderin; proje teklifinizi 24 ila 48 saat içinde
        alacaksınız.
      </p>

      <Button
        onClick={onSubmit}
        disabled={isSubmitting}
        loading={isSubmitting}
        loadingText="Gönderiliyor..."
      >
        Gönder
      </Button>
    </div>
  )
}
