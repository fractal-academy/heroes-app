import { Button, Typography } from 'antd'
import { GoogleOutlined } from '@ant-design/icons'
import { Row, Col, Box } from '@qonsoll/react-design'

const { Title, Text, Link } = Typography

const SessionSimpleView = (props) => {
  return (
    <Box border="lightgray" borderWidth="1px" borderStyle="solid" m={2}>
      <Row h="center" display="flex">
        <Col>
          <Box m={4}>
            <Title level={2}>Sign in</Title>
            <Text>
              Continiue to <Link>Heroes</Link> with Google
            </Text>
          </Box>
          <Box mb={2}>
            <Button type="primary">
              <GoogleOutlined />
              Sign in
            </Button>
          </Box>
        </Col>
      </Row>
    </Box>
  )
}

export default SessionSimpleView