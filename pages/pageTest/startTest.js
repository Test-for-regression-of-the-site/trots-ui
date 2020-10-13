import styled from 'styled-components'
import Header from '../../components/Header/Header';
import FormStartTest from '../../components/forms/form-startTest'; 

const StyledStartTest = styled.div`
    width: 100%;
`

const PageStartTest = () => {
    return(
        <StyledStartTest>
            <Header />
            <FormStartTest />
        </StyledStartTest>
    )
}

export default PageStartTest;