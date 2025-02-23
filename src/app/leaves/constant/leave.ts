const Leaves = {
  force: 'Force Leave',
  accrued: 'Accrued Leave',
  regular: 'Regular Leave'
} as const
export type TLeaves = keyof typeof Leaves
export default Leaves
