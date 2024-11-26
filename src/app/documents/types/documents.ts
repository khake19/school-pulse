import { IBase } from '~/types/base'
import { NestedTransform } from '~/types/helpers'

export interface IDocumentResponse extends IBase {
  filename: string
  path: string
  document_type: number
  size: number
  content_type: string
  user: {
    email: string
    first_name: string
    last_name: string
    avatar: string
  }
}

export type TDocumentData = NestedTransform<IDocumentResponse, 'camel'>
