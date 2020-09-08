import { useState } from 'react';
import styled from 'styled-components';
import Dashboard from './progressbar/dashboard.js';

const StyledBodyReports = styled.div`
    display: flex;
    height: 100%;
`

const StyledLeftPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    height: 100%;
    background-color: #FF9640;

    div {
        text-align: center;
        width: 100%;
        padding: 20px 0px 20px 0px;
        cursor: pointer;
    }

    div:hover {
        background-color: #FF7400;
    }
`

const StyledDashboardPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
    justify-content: center;
`

const Body = ({ json }) => {

    const [ currentTest, setTest ] = useState('');

    function chooseTime(time) {
        setTest(time);
    }

    return (
        <StyledBodyReports>
            <StyledLeftPanel>
                {
                    Object.keys(json).map((item, i) => 
                        <div key={i} onClick={() => chooseTime(item)}>{item}</div>
                    )    
                }
            </StyledLeftPanel>
            <StyledDashboardPanel>
                {
                    currentTest === '' && <h1>Выберете время запуска теста</h1>
                }
                {
                    currentTest != '' && <Dashboard json={json[currentTest]}/>
                }
            </StyledDashboardPanel>
        </StyledBodyReports>
    );
}


export default Body;