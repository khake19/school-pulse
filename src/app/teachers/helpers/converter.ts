import { TTeacherFormInput, ITeacherResponse, TTeacherData } from '../types/teachers'

export const teacherResponseToData = (teacher: ITeacherResponse | undefined): TTeacherData => {
  return {
    id: teacher?.id ?? '',
    email: teacher?.email ?? '',
    firstName: teacher?.first_name ?? '',
    middleName: teacher?.middle_name ?? '',
    lastName: teacher?.last_name ?? '',
    suffix: teacher?.suffix ?? '',
    gender: teacher?.gender ?? '',
    employeeNumber: teacher?.employee_number ?? '',
    position: {
      id: teacher?.position.id ?? 0,
      name: teacher?.position?.name ?? '',
      salaryGrade: teacher?.position?.salary_grade ?? '',
      type: teacher?.position?.type ?? ''
    },
    avatar: teacher?.avatar ?? '',
    pagibig: teacher?.pagibig ?? '',
    philhealth: teacher?.philhealth ?? '',
    gsis: teacher?.gsis ?? '',
    tin: teacher?.tin ?? '',
    plantilla: teacher?.plantilla ?? '',
    dateHired: teacher?.date_hired ?? '',
    datePromotion: teacher?.date_promotion ?? ''
  }
}

export const teacherFormToPayload = (form: TTeacherFormInput): FormData => {
  const data = new FormData()
  data.append('teacher[email]', form.email)
  data.append('teacher[first_name]', form.firstName)
  data.append('teacher[middle_name]', form.middleName)
  data.append('teacher[last_name]', form.lastName)
  data.append('teacher[suffix]', form.suffix ?? '')
  data.append('teacher[position]', String(form.position))
  data.append('teacher[gender]', form.gender ?? '')
  data.append('teacher[employee_number]', form.employeeNumber ?? '')
  data.append('teacher[avatar]', form.avatar)
  data.append('teacher[pagibig]', form.pagibig ?? '')
  data.append('teacher[philhealth]', form.philhealth ?? '')
  data.append('teacher[gsis]', form.gsis ?? '')
  data.append('teacher[tin]', form.tin ?? '')
  data.append('teacher[plantilla]', form.plantilla ?? '')
  data.append('teacher[date_hired]', form.dateHired ?? '')
  data.append('teacher[date_promotion]', form.datePromotion ?? '')

  return data
}
