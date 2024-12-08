import { zfd } from 'zod-form-data'
import { z } from 'zod'

const teacherSchema = zfd.formData({
  firstName: zfd.text(),
  lastName: zfd.text(),
  position: zfd.text(),
  email: zfd.text(),
  employeeNumber: zfd.text().optional(),
  remarks: zfd.text().optional(),
  gender: zfd.text().optional(),
  avatar: zfd.file(z.union([z.instanceof(File), z.string()]))
})

export default teacherSchema
