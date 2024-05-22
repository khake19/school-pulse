import { ITeacherResponse, TTeacherData, TTeacherFormInput, TTeacherPayload } from '../types/teachers'

export const teacherResponseToData = (teacher: ITeacherResponse | undefined): TTeacherData => {
  return {
    id: teacher?.id ?? '',
    email: teacher?.email ?? '',
    firstName: teacher?.first_name ?? '',
    lastName: teacher?.last_name ?? '',
    gender: teacher?.gender ?? '',
    remarks: teacher?.remarks ?? '',
    employeeNumber: teacher?.employee_number ?? '',
    position: {
      id: teacher?.position?.id ?? '',
      name: teacher?.position?.name ?? '',
      salaryGrade: teacher?.position?.salary_grade ?? '',
      type: teacher?.position?.type ?? ''
    },
    avatar: teacher?.avatar ?? ''
  }
}

export const teacherCreateFormToPayload = (form: TTeacherFormInput): TTeacherPayload => {
  return {
    email: form.email,
    first_name: form.firstName,
    last_name: form.lastName,
    position: form.position
  }
}

export const teacherUpdateFormToPayload = (form: TTeacherFormInput) => {
  const data = new FormData()
  data.append('techer[email]', form.email)
  data.append('teacher[first_name]', form.firstName)
  data.append('teacher[last_name]', form.lastName)
  data.append('teacher[position]', form.position)
  data.append('teacher[gender]', form.gender ?? '')
  data.append('teacher[employee_number]', form.employeeNumber ?? '')
  data.append('teacher[remarks]', form.remarks ?? '')
  data.append('teacher[avatar]', form.avatar)

  return data
}
