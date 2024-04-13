import { IResponseMeta } from '~/types/http'

const metaConverter = (meta: IResponseMeta | undefined) => {
  return {
    offset: meta?.current_offset,
    page: meta?.current_page,
    size: meta?.page_size,
    total: meta?.total_count,
    pages: meta?.total_pages
  }
}

export default metaConverter
