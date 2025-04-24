// interface IProps {
//   onSubmit: () => void
//   isSubmitting: boolean
// }

// export function SubmitRequest({ onSubmit, isSubmitting }: IProps) {
//   return (
//     <div className="animate-fadeIn text-center">
//       <div className="flex justify-center mb-6">
//         <Badge icon="dollar" />
//       </div>

//       <h2 className="text-xl font-semibold text-indigo-950 mb-4">
//         Teklif Talebini Gönder
//       </h2>

//       <p className="text-gray-500 mb-8">
//         Lütfen önceki adımlarda girdiğiniz tüm bilgileri gözden geçirin. Her şey
//         doğruysa, mesajınızı gönderin; proje teklifinizi 24 ila 48 saat içinde
//         alacaksınız.
//       </p>

//       <Button
//         onClick={onSubmit}
//         disabled={isSubmitting}
//         loading={isSubmitting}
//         loadingText="Gönderiliyor..."
//       >
//         Gönder
//       </Button>
//     </div>
//   )
// }

// export default function SubmitRequest({ onSubmit, isSubmitting }: IProps) {
//   return (
//     <div className="animate-fadeIn text-center">
//       <div className="flex justify-center mb-6">
//         <div className="bg-indigo-100 p-6 rounded-full">
//           <svg
//             className="w-12 h-12 text-indigo-600"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M12 7.5V16.5"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M15.5 7.5C16.6 8.4 17.5 9.7 17.9 11.2"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </div>
//       </div>

//       <h2 className="text-xl font-semibold text-indigo-950 mb-4">
//         Teklif Talebini Gönder
//       </h2>
//       <p className="text-gray-500 mb-8">
//         Lütfen önceki adımlarda girdiğiniz tüm bilgileri gözden geçirin. Her şey
//         doğruysa, mesajınızı gönderin; proje teklifinizi 24 ila 48 saat içinde
//         alacaksınız.
//       </p>

//       <button
//         onClick={onSubmit}
//         disabled={isSubmitting}
//         className={`px-6 py-3 bg-indigo-600 rounded-full text-white font-medium ${
//           isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-indigo-700'
//         } transition mx-auto flex items-center justify-center`}
//       >
//         {isSubmitting ? (
//           <>
//             <svg
//               className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <circle
//                 className="opacity-25"
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 stroke="currentColor"
//                 strokeWidth="4"
//               ></circle>
//               <path
//                 className="opacity-75"
//                 fill="currentColor"
//                 d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//               ></path>
//             </svg>
//             Gönderiliyor...
//           </>
//         ) : (
//           'Gönder'
//         )}
//       </button>
//     </div>
//   )
// }

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
