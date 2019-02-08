import styled from 'styled-components'
import { Row, InputNumber, Button, Form } from 'antd'

export const FiltersWrapper = styled(Row)`
  margin-bottom: 20px;
`

export const AgeInput = styled(InputNumber)`
  width: 100% !important;
`

export const SearchButton = styled(Button)`
  width: 100%;
  margin-top: 3px;
`

export const Filter = styled(Form.Item)`
  margin-bottom: 0 !important;
`
