import { IResponseMeta } from '~/types/http'

const metaConverter = (meta: IResponseMeta | undefined) => {
  return {
    offset: meta?.current_offset ?? 0,
    page: meta?.current_page ?? 0,
    size: meta?.page_size ?? 0,
    total: meta?.total_count ?? 0,
    pages: meta?.total_pages ?? 0
  }
}

export default metaConverter
