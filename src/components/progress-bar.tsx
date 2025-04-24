export default function ProgressBar({ currentStep }: { currentStep: number }) {
  const steps = Array.from({ length: 4 }, (_, i) => i + 1)

  if (currentStep > steps.length) return null
  const progress = ((currentStep - 1) / (steps.length - 1)) * 100

  return (
    <div className="px-12 pb-8">
      <div className="relative">
        <div className="absolute top-1/2 -translate-y-1/2 h-1 w-full bg-gray-200"></div>
        <div
          className="absolute top-1/2 -translate-y-1/2 h-1 bg-indigo-600 transition-all duration-500 ease-in-out"
          style={{ width: `${progress}%` }}
        />

        <div className="relative flex justify-between">
          {steps.map((step) => (
            <StepCircle
              key={step}
              label={step}
              isActive={currentStep >= step}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function StepCircle({ label, isActive }: { label: number; isActive: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center font-medium z-10 transition-colors duration-300 ${
          isActive ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'
        }`}
      >
        {label}
      </div>
    </div>
  )
}
