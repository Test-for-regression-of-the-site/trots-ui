import styled from 'styled-components'
import Header from '../components/Header/Header';
import Body from '../components/body/Body';
import fetch from 'isomorphic-unfetch';

const Wrapper = styled.div`
    body {
        background-color: #DADFE1;
    }
    & .allContent {
        height: 100;
        width: 100%;
    }

    & .blockHeader {
        height: 200px;
    }

    & .blockBody {
        display: flex;
        justify-content: center;
    }
`

class PageHome extends React.Component {
    static getInitialProps = async function () {
        const reportJson = await fetch('http://127.0.0.1:2020/getJson')
        .then(res=> res.json()).then(res => {return res});
        return {
            response: reportJson
        }
    }
    
    render() {
        return (
            <Wrapper>
                <div className='allContent'>
                    <div className='blockHeader'>
                        <Header />
                    </div>
                    <div className='blockBody'>
                        <h1>Начнём тестирование!</h1>
                    </div>
                </div>
            </Wrapper>
        )
    }
}

export default PageHome;