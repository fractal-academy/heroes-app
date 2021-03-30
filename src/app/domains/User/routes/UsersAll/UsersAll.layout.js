import { Button } from 'antd'
import { firestore } from 'app/services'
import { Box } from '@qonsoll/react-design'
import { ROUTES_PATHS } from 'app/constants'
import { useHistory } from 'react-router-dom'
import { USERS } from 'app/constants/collections'
import { UserList } from 'app/domains/User/components/list'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useUserAuthContext } from 'app/context'

const UsersAll = (props) => {
  const [data] = useCollectionData(
    firestore.collection(USERS).orderBy('firstName')
  )

  const session = useUserAuthContext()

  const addButtonRule = session.userDBData.role === 'Superadmin'

  const history = useHistory()

  return (
    <>
      {addButtonRule && (
        <Box mt={2}>
          <Button
            type="primary"
            onClick={() => {
              history.push(ROUTES_PATHS.USER_CREATE)
            }}>
            + Add
          </Button>
        </Box>
      )}
      <UserList data={data} />
    </>
  )
}

export default UsersAll
