const Leaves = {
  force: 'Force Leave',
  accrued: 'Accrued Leave',
  regular: 'Regular Leave',
  deleted: 'Document successfully deleted'
} as const
export type TLeaves = keyof typeof Leaves
export default Leaves
