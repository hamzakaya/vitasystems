import React from 'react'

type IProps = React.PropsWithChildren<{
  currentStep: number
}>

export default function Header({ currentStep, children }: IProps) {
  return (
    <div className="w-full my-10">
      <h1 className="text-2xl font-bold text-center text-indigo-950">
        Proje Teklifi
      </h1>
      {currentStep < 5 && (
        <>
          <p className="text-center text-gray-500 mt-2">
            Proje teklifi almak için aşağıdaki formu doldurunuz.
          </p>
          <p className="text-center text-gray-500">
            Gerekli gördüğünüz ayrıntıları ekleyebilirsiniz.
          </p>
        </>
      )}
      {currentStep === 5 && (
        <p className="text-center text-gray-500 mt-2">
          Proje teklifiniz başarıyla alınmıştır.
        </p>
      )}
      {currentStep === 6 && (
        <p className="text-center text-gray-500 mt-2">
          Proje teklif bilgilerinizin özeti aşağıda sunulmuştur.
        </p>
      )}
      {currentStep === 7 && (
        <p className="text-center text-gray-500 mt-2">
          Projenizin teklif sürecini sorgulamak için takip kodunu giriniz.
        </p>
      )}
      {children}
    </div>
  )
}
