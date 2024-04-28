import { ITeacherResponse, TTeacherData, TTeacherFormInput, TTeacherPayload } from '../types/teachers'

export const teacherResponseToData = (teacher: ITeacherResponse | undefined): TTeacherData => {
  return {
    id: teacher?.id ?? '',
    email: teacher?.email ?? '',
    firstName: teacher?.first_name ?? '',
    lastName: teacher?.last_name ?? '',
    position: {
      id: teacher?.position?.id ?? '',
      name: teacher?.position?.name ?? '',
      salaryGrade: teacher?.position?.salary_grade ?? '',
      type: teacher?.position?.type ?? ''
    }
  }
}

export const teacherFormToPayload = (form: TTeacherFormInput): TTeacherPayload => {
  return {
    email: form.email,
    first_name: form.firstName,
    last_name: form.lastName,
    position: form.position
  }
}
