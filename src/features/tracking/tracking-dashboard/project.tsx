import { ProjectStatusIcon, TrackingIcon } from './icons'
import { TrackingData } from './types'
import { Divider, InfoField, StatusBadge } from './ui'
import formatDate from '../../../common/utils/formatDate'

type ProjectStatusProps = {
  className?: string
}

export function ProjectStatus({ className = '' }: ProjectStatusProps) {
  return (
    <div className={`flex flex-col items-center space-y-4 py-4 ${className}`}>
      <div className="relative">
        <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center">
          <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center animate-pulse">
            <ProjectStatusIcon />
          </div>
        </div>
        <div className="absolute -inset-4 bg-indigo-50 rounded-full -z-10"></div>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-xl text-indigo-700 font-semibold">
          Projeniz inceleme aşamasındadır
        </h2>
        <span className="text-sm text-gray-500">
          Tahmini değerlendirme süresi: 48 saat
        </span>
      </div>
    </div>
  )
}

type ProjectInfoProps = {
  trackingData: TrackingData
  className?: string
}

export function ProjectInfo({
  trackingData,
  className = '',
}: ProjectInfoProps) {
  return (
    <div
      className={`bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-inner space-y-4 ${className}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <InfoField label="Ad-Soyad" value={trackingData.name} />
        <InfoField label="E-Posta" value={trackingData.email} />
        <InfoField label="Telefon" value={trackingData.phone} />
        <InfoField label="Firma Adı" value={trackingData.company} />
      </div>

      <Divider className="my-2" />

      <div className="space-y-4">
        <div className="flex flex-col">
          <span className="text-sm text-gray-500 mb-1">Hizmetlerimiz</span>
          <div className="flex flex-wrap gap-2">
            {trackingData.services.length > 0 ? (
              trackingData.services.map((service, index) => (
                <StatusBadge key={index}>{service}</StatusBadge>
              ))
            ) : (
              <StatusBadge>Geliştirme</StatusBadge>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <InfoField label="Proje Bütçesi" value={trackingData.budget} />
          <InfoField
            label="Proje Başvuru Tarihi"
            value={formatDate(trackingData.created_at)}
          />
        </div>
      </div>
    </div>
  )
}

type ProjectTrackerProps = {
  className?: string
}

export function ProjectTracker({ className = '' }: ProjectTrackerProps) {
  return (
    <div className={`mt-8 text-center ${className}`}>
      <a
        href="#"
        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center transition-colors"
      >
        <TrackingIcon />
        Proje Durumunu Takip Et
      </a>
    </div>
  )
}
