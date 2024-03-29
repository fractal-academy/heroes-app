import './ListItem.styles.css'
import { PropTypes } from 'prop-types'

import { ROUTES_PATHS } from 'app/constants'
import { Progress, Typography, Button } from 'antd'
import { CustomAvatar } from 'app/components'
import { useHistory } from 'react-router-dom'
import { RightOutlined } from '@ant-design/icons'
import { Row, Col, Box } from '@qonsoll/react-design'
import { PersonalBadgeSimpleForm } from 'app/domains/PersonalBadge/components/form'

const { Title, Text } = Typography

const ListItem = (props) => {
  const { type, data, currentUserId } = props

  const history = useHistory()

  const currentUsersListItem = currentUserId === data.id
  const ItemTypeMap = {
    user: {
      image: 'user',
      imgSize: 60,
      style: 'info',
      name: `${data.firstName} ${data.surname}`,
      info: data.email || data.role,
      path: ROUTES_PATHS.USER_SHOW
    },
    badge: {
      image: 'badge',
      imgSize: 35,
      style: 'description',
      name: `${data.name}`,
      info: data.description,
      path: ROUTES_PATHS.BADGE_SHOW
    },
    personalBadge: {
      image: 'badge',
      imgSize: 35,
      style: 'description',
      name: `${data.name}`,
      info: data.currentLvl,
      path: ROUTES_PATHS.BADGE_SHOW
    },
    company: {
      image: 'enterprise',
      imgSize: 60,
      style: 'description',
      name: `${data.name}`,
      info: data.description,
      path: ROUTES_PATHS.COMPANY_SHOW
    },
    project: {
      image: 'enterprise',
      imgSize: 60,
      style: 'description',
      name: `${data.name}`,
      info: data.description,
      path: ROUTES_PATHS.PROJECT_SHOW
    }
  }

  const image = ItemTypeMap[type].image
  const imgSize = ItemTypeMap[type].imgSize
  const info = ItemTypeMap[type].info
  const name = ItemTypeMap[type].name
  const path = ItemTypeMap[type].path.replace(':id', data.id)
  const style = ItemTypeMap[type].style

  return (
    <Row display="flex" v="center">
      <Col cw="auto" m={2}>
        <CustomAvatar
          shape={image}
          name={name}
          src={data.image}
          size={imgSize}
        />
      </Col>
      <Col m={2}>
        <Box textAlign="left">
          <Title level={5}>{name}</Title>
          {type === 'personalBadge' ? (
            <Progress
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068'
              }}
              percent={data.currentLvl}
            />
          ) : (
            <Box className={style}>
              <Text type="secondary">{info || 'No information.'}</Text>
            </Box>
          )}
        </Box>
      </Col>
      {type === 'user' && !currentUsersListItem && (
        <Col cw="auto" m={2}>
          <PersonalBadgeSimpleForm userId={data.id} />
        </Col>
      )}
      <Col cw="auto" m={2}>
        <Button shape="circle" type="text" onClick={() => history.push(path)}>
          <RightOutlined />
        </Button>
      </Col>
    </Row>
  )
}

ListItem.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
}

export default ListItem
