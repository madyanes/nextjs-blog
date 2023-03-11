import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Pagination({ res, direction, children }) {
  const router = useRouter()

  if (direction === 'next') {
    const nextPage = res.next
    if (nextPage) {
      let nextPageLink
      if (router.query.page) {  // check whether url has `page` query param or not
        nextPageLink = router.pathname + '?page=' + (parseInt(router.query.page) + 1)
      } else {
        nextPageLink = router.pathname + '?page=2'
      }
      return (
        <Link href={ nextPageLink }>
          { children }
        </Link> 
      )
    }
  } 
  if (direction === 'prev') {
    const prevPage = res.previous
    if (prevPage) {
      let prevPageLink
      const prevPageNumber = prevPage.match('[?&]' + 'page' + '=([^&]+)')
      if (prevPageNumber) {
        prevPageLink = router.pathname + '?page=' + prevPageNumber[1]
      } else {
        prevPageLink = router.pathname + '?page=1'
      }
      return (
        <Link href={ prevPageLink }>
          { children }
        </Link> 
      )
    }
  }
}
