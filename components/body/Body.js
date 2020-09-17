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
    height: 2000px;
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
    height: 2000px;
    width: 75%;
    justify-content: start;
`

const Body = ({ json }) => {

    const [ currentTest, setTest ] = useState('');
    const [ currentNUmberArray, serNubberArray] = useState('');

    function chooseTime(time, i) {
        setTest(time);
        serNubberArray(i);
    }

    return (
        <StyledBodyReports>
            <StyledLeftPanel>
                {
                    json.shortDashboard.map((item, i) => {
                        const getTime = Object.keys(item)[0];
                        const allMonth = [ 'January',
                            'February',
                            'March',
                            'April',
                            'May',
                            'June',
                            'July',
                            'August',
                            'September',
                            'October',
                            'November',
                            'December' 
                        ];
                        const date = new Date(+getTime);
                        const day = date.getDay();
                        const hour = date.getHours();
                        const minute = date.getMinutes();
                        const month = date.getMonth();
                        return(
                            <div key={i} onClick={() => chooseTime(getTime, i)}>{`${day} ${allMonth[month]} - ${hour}:${minute}`}</div>
                        )
                    }
                    )    
                }
            </StyledLeftPanel>
            <StyledDashboardPanel>
                {
                    currentTest === '' && <h1>Выберете время запуска теста</h1>
                }
                {
                    currentTest != '' && <Dashboard uuid={currentTest} json={json.shortDashboard[currentNUmberArray][currentTest]}/>
                }
            </StyledDashboardPanel>
        </StyledBodyReports>
    );
}


export default Body;