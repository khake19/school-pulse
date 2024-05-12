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
    }
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
  data.append('email', form.email)
  data.append('first_name', form.firstName)
  data.append('last_name', form.lastName)
  data.append('position', form.position)
  data.append('gender', form.gender ?? '')
  data.append('employee_number', form.employeeNumber ?? '')
  data.append('remarks', form.remarks ?? '')
  data.append('avatar', form.avatar)

  return data
  // return {
  //   email: form.email,
  //   first_name: form.firstName,
  //   last_name: form.lastName,
  //   position: form.position,
  //   gender: form.gender,
  //   employee_number: form.employeeNumber,
  //   remarks: form.remarks,
  //   avatar: form.avatar
  // }
}
