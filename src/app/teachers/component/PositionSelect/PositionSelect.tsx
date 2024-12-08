import { Option } from '~/types/select'

import useGetPositions from '../../hooks/useGetPositions'
import SelectForm from '~/components/Select/form/SelectForm'

const PositionSelect = () => {
  const { positions = [] } = useGetPositions()
  const options: Option[] = positions.map((position) => ({ label: position.name, value: position.id }))

  return <SelectForm options={options} name="position" placeholder="Select a position" />
}

export default PositionSelect
