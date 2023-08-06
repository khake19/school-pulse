import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type School = { id: string; name: string }

type State = {
  school: School
  setSchool: (school: School) => void
}

const useCurrentSchool = create<
  State,
  [['zustand/devtools', never], ['zustand/persist', {school: School}], ['zustand/immer', never]]
>(
  devtools(
    persist(
      immer((set) => ({
        school: { id: '', name: '' },
        setSchool: (school) => set((state) => void (state.school = school))
      })),
      {
        name: 'school-storage',
        partialize: (state) => ({ school: state.school})
      }
    )
  )
)

export default useCurrentSchool
