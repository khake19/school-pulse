import { Slide, ToastContent, ToastOptions, toast } from 'react-toastify'
import { capitalizeFirstLetter } from '~/utils/string'

const defaultOptions: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  closeOnClick: true,
  pauseOnHover: true,
  transition: Slide,
  draggable: false
}

const useAlert = () => {
  const success = (element: ToastContent, options?: ToastOptions) => {
    toast.success(element, { ...defaultOptions, ...options })
  }
  const fetchError = (error: string, options?: ToastOptions) => {
    const errorMessage = JSON.parse(error).errors
    const fields = Object.keys(errorMessage)

    if (typeof errorMessage === 'string') {
      toast.error(capitalizeFirstLetter(errorMessage), {
        ...defaultOptions,
        ...options
      })
    } else {
      for (const field of fields) {
        toast.error(capitalizeFirstLetter(field + ' ' + errorMessage[field]), {
          ...defaultOptions,
          ...options
        })
      }
    }
  }

  const alert = { success, fetchError }
  return alert
}

export default useAlert
