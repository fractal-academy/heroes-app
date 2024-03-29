import { Button } from 'antd'
import { firestore } from 'app/services'
import { ROUTES_PATHS } from 'app/constants'
import { useHistory } from 'react-router-dom'
import { BADGES } from 'app/constants/collections'
import { BadgeList } from 'app/domains/Badge/components/list'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useUserAuthContext } from 'app/context'

const BadgesAll = (props) => {
  const [data] = useCollectionData(firestore.collection(BADGES))

  const session = useUserAuthContext()

  const addButtonRule = session.userDBData.role === 'Superadmin'

  const history = useHistory()
  return (
    <>
      {addButtonRule && (
        <Button
          type="primary"
          onClick={() => {
            history.push(ROUTES_PATHS.BADGE_CREATE)
          }}>
          + Add
        </Button>
      )}
      {data && <BadgeList data={data} />}
    </>
  )
}

export default BadgesAll
