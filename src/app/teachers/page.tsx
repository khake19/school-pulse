import { Suspense } from 'react'
import TeacherList from './TeacherList'

const Teachers = () => {
  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>loading... on initial request</p>}>
      <TeacherList />
    </Suspense>
  )
}

export default Teachers
