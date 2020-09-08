import styled from 'styled-components';
import Link from 'next/link';

const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #009999;

    div {
        display: flex;
        flex-direction: row;
        flex-flow: row nowrap;
        justify-content: center;
        border-radius: 12px;
        padding: 20px;
        width: 30%;
    }
`

const Header = () => (
    <StyledHeader>
        <div>
            <Link href="/pageTest/startTest" as='/pageTest/startTest' >
                <a>
                    Запуск теста
                </a>
            </Link>
        </div>
        <div>
            <Link href="/pageTest/viewReports" as='/pageTest/viewReports' >
                <a>
                    Результаты
                </a>
            </Link>
        </div>
    </StyledHeader>
);

export default Header;