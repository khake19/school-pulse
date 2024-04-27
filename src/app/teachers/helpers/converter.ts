import { ITeacherResponse, TTeacher } from '../types/teachers'

export const teacherDetailsConverter = (teacher: ITeacherResponse | undefined): TTeacher => {
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
