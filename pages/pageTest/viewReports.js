import styled from 'styled-components'
import Header from '../../components/Header/Header';
import Body from '../../components/body/Body';
import fetch from 'isomorphic-unfetch';

const StyledViewReports = styled.div`
    height: 100%;
`


const ViewReports = ( { response } ) => {
    return (
        <StyledViewReports>
            <Header />
            <Body json={response} />
        </StyledViewReports>
    )
}

ViewReports.getInitialProps = async () =>  {
    const reportJson = await fetch('http://192.168.1.4:2020/tasks/dashboard')
        .then(res => res.json()).then(res => { return res })
    return {
        response: reportJson
    }
}


export default ViewReports;