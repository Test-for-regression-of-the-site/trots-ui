import styled from 'styled-components'
import Header from '../../components/Header/Header';
import FormStartTest from '../../components/forms/form-startTest'; 

const StyledStartTest = styled.div`
    width: 100%;

    .headerText {
        margin: 80px 0px 80px 0px;
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 56px;
        text-align: center;
        letter-spacing: -0.02em;

        color: #111111
    }
`

const PageStartTest = ({ status }) => {
    return(
        <StyledStartTest>
            <Header />
            <div className='headerText'>Запуск теста </div>
            <FormStartTest status={status}/>
        </StyledStartTest>
    )
}

PageStartTest.getInitialProps = async () =>  {
    const reportJson = await fetch('http://127.0.0.1:1234/tasks/dashboard')
        .then(res => res.json()).then(res => { return res })
    return {
        status: reportJson.processEnd
    }
}

export default PageStartTest;