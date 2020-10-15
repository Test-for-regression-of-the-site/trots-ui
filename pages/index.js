import styled from 'styled-components'
import Header from '../components/Header/Header';

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