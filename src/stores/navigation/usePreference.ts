import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type State = { isSidebarOpen: boolean; setSideBarOpen: (isSideBar: boolean) => void }

const usePreference = create<State, [['zustand/devtools', never], ['zustand/immer', never]]>(
  devtools(
    immer((set) => ({
      isSidebarOpen: false,
      setSideBarOpen: (isSidebarOpen) => set((state) => void (state.isSidebarOpen = isSidebarOpen))
    }))
  )
)

export default usePreference
