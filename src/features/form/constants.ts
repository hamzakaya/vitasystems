export const formConstants = {
  contactInfo: [
    {
      key: 'name',
      label: 'Ad-Soyad',
      icon: 'user',
      type: 'text',
      placeholder: 'John Doe',
      required: true,
    },
    {
      key: 'email',
      label: 'E-Posta',
      icon: 'email',
      type: 'email',
      placeholder: 'E-Posta',
      required: true,
    },
    {
      key: 'phone',
      label: 'Telefon Numarası',
      icon: 'phone',
      type: 'tel',
      placeholder: '(123) 456 - 7890',
      required: true,
    },
    {
      key: 'company',
      label: 'Firma Adı',
      icon: 'company',
      type: 'text',
      placeholder: 'Firma Adı',
      required: true,
    },
  ] as const,
  services: [
    {
      id: 'development',
      value: 'Development',
      label: 'Geliştirme',
    },
    {
      id: 'web-design',
      value: 'WebDesign',
      label: 'Web Tasarım',
    },
    {
      id: 'marketing',
      value: 'Marketing',
      label: 'Pazarlama',
    },
    {
      id: 'other',
      value: 'Other',
      label: 'Diğer',
    },
  ] as const,
  budgetOptions: [
    { id: 'budget1', value: '5.000₺ - 10.000₺', label: '5.000₺ - 10.000₺' },
    { id: 'budget2', value: '10.000₺ - 20.000₺', label: '10.000₺ - 20.000₺' },
    { id: 'budget3', value: '20.000₺ - 50.000₺', label: '20.000₺ - 50.000₺' },
    { id: 'budget4', value: '50.000₺ +', label: '50.000₺ +' },
  ],
}
