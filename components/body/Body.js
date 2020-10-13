import { useState } from 'react';
import styled from 'styled-components';
import Dashboard from './progressbar/dashboard.js';

const StyledBodyReports = styled.div`
    display: flex;
    height: 100%;
`

const SlyledHeader =styled.div`
    display: flex;
    justify-content: center;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #111111;

    p {
        margin: 60px 0 60px 0
    }
`

const StyledLeftPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 100px;
    width: 20%;
    border-right: 1px solid;
    border-color: rgba(193, 199, 203, 0.6);

    div {
        text-align: center;
        width: 100%;
        padding: 20px 0px 20px 0px;
        cursor: pointer;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: -0.02em;

        color: #111111;
    }

    div:hover {
        background-color: rgba(193, 199, 203, 0.5);
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
        <>
            <SlyledHeader>
                <p>
                    Результаты тестирования
                </p>
            </SlyledHeader>
            <StyledBodyReports>
            <StyledLeftPanel>
                {
                    json.shortDashboard.map((item, i) => {
                        const getTime = item[`${Object.keys(item)[0]}`].creationTime;
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
                            <div key={i} onClick={() => chooseTime(Object.keys(item)[0], i)}>{`${day} ${allMonth[month]} - ${hour}:${minute}`}</div>
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
                    currentTest != '' && <Dashboard uuid={currentTest} json={json.shortDashboard[currentNUmberArray][currentTest].tests}/>
                }
            </StyledDashboardPanel>
        </StyledBodyReports>
        </>
    );
}


export default Body;