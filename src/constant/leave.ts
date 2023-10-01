const Leaves = {
  force: 'Force Leave',
  accrued: 'Accrued Leave',
  regular: 'Regular Leave'
} as const

export type TLeavesKey = keyof typeof Leaves
export type TLeavesValue = (typeof Leaves)[TLeavesKey]

export default Leaves
