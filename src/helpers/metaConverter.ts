import { TResponseMeta } from '~/types/http'

const metaConverter = (meta: TResponseMeta | undefined) => {
  return {
    offset: meta?.current_offset ?? 0,
    page: meta?.current_page ?? 0,
    size: meta?.size ?? 0,
    total: meta?.total ?? 0,
    pages: meta?.pages ?? 0
  }
}

export default metaConverter
