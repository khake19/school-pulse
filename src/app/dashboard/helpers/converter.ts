import { ISchoolSummariesResponse, TSchoolSummariesData } from '../types/dashboard'

export const schoolSumarriesResponseToData = (schoolsSummaries: ISchoolSummariesResponse): TSchoolSummariesData => {
  return {
    id: schoolsSummaries.id,
    name: schoolsSummaries.name,
    teacherCount: schoolsSummaries.teacher_count
  }
}
