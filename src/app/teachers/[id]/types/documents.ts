import { IBase } from '~/types/base'
import { NestedTransform } from '~/types/helpers'

export interface IDocumentResponse extends IBase {
  filename: string
  path: string
  document_type: number
  size: number
  content_type: string
}

export type TDocumentData = NestedTransform<IDocumentResponse, 'camel'>
