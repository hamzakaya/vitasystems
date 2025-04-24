import { FormError } from '../../../../hooks/useMultiStepForm'
import { formConstants } from '../../constants'
import { RadioGroup } from './radio-group'
import { Section } from './section'

interface IProps {
  selectedBudget: string
  onChange: (budget: string) => void
  error?: FormError
}

export default function BudgetSelection({
  selectedBudget,
  onChange,
  error,
}: IProps) {
  return (
    <Section
      title="Proje Bütçeniz Nedir?"
      description="Düşündüğünüz proje bütçe oranını seçiniz."
    >
      <RadioGroup
        name="budget"
        options={formConstants.budgetOptions}
        value={selectedBudget}
        onChange={onChange}
        error={error}
        columns={2}
      />
    </Section>
  )
}
