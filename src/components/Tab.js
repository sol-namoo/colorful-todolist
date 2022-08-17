import styled from "styled-components"

const TabBox = styled.div`
width: 480px;
height: 82px;
background-color: rgba(255, 255, 255, 0.1);
margin: 20px;
`
const TabBtn = styled.button`
width: 136px;
height: 40px;
background-color: ${props => (props.isActive ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0)')};
transition: background-color 0.8s;
margin: 8px;
`

export default function Tab( { tab, setTab } ){
    const tabArr = ['Daily life', 'Study', 'Work']
    const handleClick = (e) => setTab(e.target.textContent)

return(
    <TabBox>
        {tabArr.map((tabName) => {
            return (
                <TabBtn
                    key={tabName}
                    isActive={tabName === tab ? true : false}
                    type='button'
                    onClick={handleClick}
                >
                    {tabName}
                </TabBtn>
            )
        })}
    </TabBox>
    
)
}