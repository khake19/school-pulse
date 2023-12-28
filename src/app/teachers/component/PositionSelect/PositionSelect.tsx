import Select from '~/components/Select'

import useGetPositions from '../../hooks/useGetPositions'

interface Option {
  label: string
  value: string
}

const PositionSelect = () => {
  const { positions = [] } = useGetPositions()
  const options: Option[] = positions.map((position) => ({ label: position.name, value: position.id }))

  return <Select options={options} name="position" placeholder="Select a position" />
}

export default PositionSelect
