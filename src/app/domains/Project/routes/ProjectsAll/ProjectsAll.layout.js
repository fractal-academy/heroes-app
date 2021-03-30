import { Button } from 'antd'
import { firestore } from 'app/services'
import { Box } from '@qonsoll/react-design'
import { ROUTES_PATHS } from 'app/constants'
import { useHistory } from 'react-router-dom'
import { useUserAuthContext } from 'app/context'
import { PROJECTS } from 'app/constants/collections'
import { ProjectList } from 'app/domains/Project/components/list'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const ProjectsAll = (props) => {
  const [data] = useCollectionData(
    firestore.collection(PROJECTS).orderBy('name')
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
              history.push(ROUTES_PATHS.PROJECT_CREATE)
            }}>
            + Add
          </Button>
        </Box>
      )}
      {data && <ProjectList data={data} />}
    </>
  )
}

export default ProjectsAll
