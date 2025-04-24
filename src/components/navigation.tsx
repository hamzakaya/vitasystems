interface IProps {
  currentStep: number
  prevStep: () => void
  nextStep: () => void
}

export default function Navigation({
  currentStep,
  prevStep,
  nextStep,
}: IProps) {
  if (currentStep > 4) return null

  return (
    <div className="flex justify-between px-12 pb-12">
      <button
        onClick={prevStep}
        className={`px-6 py-3 border border-gray-200 rounded-full text-indigo-600 font-medium hover:bg-gray-50 transition ${
          currentStep === 1 ? 'invisible' : 'cursor-pointer'
        }`}
        disabled={currentStep === 1}
      >
        Önceki Adım
      </button>
      {currentStep !== 4 && (
        <button
          onClick={nextStep}
          className="px-6 py-3 bg-indigo-600 rounded-full text-white font-medium hover:bg-indigo-700 transition cursor-pointer"
        >
          Sonraki Adım
        </button>
      )}
    </div>
  )
}
