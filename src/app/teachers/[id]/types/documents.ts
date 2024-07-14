import { IBase } from '~/types/base'
import { NestedTransform } from '~/types/helpers'

export interface IDocumentResponse extends IBase {
  file: string
  document_type: number
}

export type TDocumentData = NestedTransform<IDocumentResponse, 'camel'>
