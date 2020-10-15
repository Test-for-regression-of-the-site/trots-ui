import styled from 'styled-components'
import Header from '../../components/Header/Header';
import FormStartTest from '../../components/forms/form-startTest'; 

const StyledStartTest = styled.div`
    width: 100%;
`

const PageStartTest = ({ status }) => {
    return(
        <StyledStartTest>
            <Header />
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