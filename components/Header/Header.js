import styled from 'styled-components';
import Link from 'next/link';

const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #111111;
    Height: 72px;

    .nameProgect {
        color: #FFFFFF;
        font-family: Verdana;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: -0.02em;
        text-align: left;
        margin-left: 160px;
        cursor: pointer;
    }

    .leftPanel {
        display: flex;
    }

    .resultTest {
        display: flex;
        margin-right: 40px;
        text-decoration: none;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: -0.02em;
        color: rgba(255, 255, 255, 0.4);
        cursor: pointer;
    }

    .buttonStartTest {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 160px;
        height: 40px;
        width: 135px;
        left: 1145px;
        top: 16px;
        border-radius: 6px;
        background: #FFC925;
        box-shadow: 0px 0px 25px rgba(255, 201, 37, 0.2);
        border-radius: 6px;
        cursor: pointer;
    }
`

const Header = () => (
    <StyledHeader>
        <div className="nameProgect">
            <Link href="/" as='/' >
                <p>
                    Lighthause
                </p>
            </Link>
        </div>
        <div className="leftPanel">
            <Link href="/pageTest/viewReports" as='/pageTest/viewReports' >
                <div className='resultTest'>
                        <p>
                            Результаты тестирования
                        </p>
                </div>
            </Link>
            <div className="buttonStartTest">
                <Link href="/pageTest/startTest" as='/pageTest/startTest' >
                    <p>
                        Запустить тест
                    </p>
                </Link>
            </div>
        </div>
    </StyledHeader>
);

export default Header;