import { zfd } from 'zod-form-data'
import { z } from 'zod'

const teacherSchema = zfd.formData({
  firstName: zfd.text(),
  middleName: zfd.text(),
  lastName: zfd.text(),
  position: zfd.numeric(),
  email: zfd.text(),
  employeeNumber: zfd.text(z.string().length(7)).optional(),
  remarks: zfd.text().optional(),
  gender: zfd.text().optional(),
  avatar: zfd.file(z.union([z.instanceof(File), z.string()])),
  dateHired: zfd.text().optional(),
  philhealth: zfd.text(z.string().length(12)).optional(),
  gsis: zfd.text(z.string().length(10)).optional(),
  pagibig: zfd.text(z.string().length(12)).optional(),
  tin: zfd.text(z.string().length(13)).optional(),
  plantilla: zfd.text().optional()
})

export default teacherSchema
