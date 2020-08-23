import styled from 'styled-components'

const Wrapper = styled.div`
    & .Header {
    text-align:  center;
    height: 200px;
    position: relative;
    padding-top: 40px;
    color: #383127;
}
    & h1 {
        position: absolute;
        width: 100%;
        padding: 0;
        margin: 0;
        z-index: 1;
        top: 0;
    }
    & .lighthouse {
        height: 80%;
    }
    & .lighthouse img {
        height: 50%;
    }
`

const Header = () => (
    <Wrapper>
        <div className="Header">
        <div className='lighthouse'>
            <img src="https://raw.githubusercontent.com/GoogleChrome/lighthouse/8b3d7f052b2e64dd857e741d7395647f487697e7/assets/lighthouse-logo.png"></img>
        </div>
        <h1>
            Результаты тестов
        </h1>
    </div>
    </Wrapper>
);

export default Header;