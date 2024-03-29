import { BadgeSimpleForm } from 'app/domains/Badge/components/form'
import { useParams } from 'react-router-dom'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { firestore } from 'app/services'
import { BADGES } from 'app/constants/collections'

const BadgeEdit = (props) => {
  const { id } = useParams()

  const [data] = useDocumentData(firestore.collection(BADGES).doc(id))

  return (
    <>
      {data && (
        <>
          <BadgeSimpleForm id={id} data={data} />
        </>
      )}
    </>
  )
}

export default BadgeEdit
