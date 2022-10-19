import styled from 'styled-components'

const HeaderBox = styled.header`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 620px;
  height: 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 20px;
`

export default function Header() {
  return <HeaderBox>Todos</HeaderBox>
}
