import { IBase } from '~/types/base'
import { NestedTransform } from '~/types/helpers'

export interface ISchoolSummariesResponse extends IBase {
  name: string
  teacher_count: number
}

export type TSchoolSummariesData = NestedTransform<ISchoolSummariesResponse, 'camel'>
