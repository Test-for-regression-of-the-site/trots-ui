import styled from 'styled-components';
import ProgressBar from './progressbar';
import Link from 'next/link';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    & .resultTest {
        height: 100%;
        padding: 5px;
        display: flex;
        flex-direction: column;
    }
    
    & .siteLink {
        height: 15%;
        text-align: center;
        background-color: #179af5;
    }

    & .resultBar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 85%;
        border-bottom: 1px solid black;
        background: #d6eaf8;
    }

    & h3 {
        margin: 0;
    }

    & .buttonSeeMore {
        text-decoration: none;
        outline: none;
        display: inline-block;
        width: 140px;
        height: 45px;
        line-height: 45px;
        border-radius: 45px;
        margin: 10px 20px;
        font-family: 'Montserrat', sans-serif;
        font-size: 11px;
        text-transform: uppercase;
        text-align: center;
        letter-spacing: 3px;
        font-weight: 600;
        color: #423f3e;
        background: white;
        box-shadow: 0 8px 15px rgba(0,0,0,.1);
        transition: .3s;
    }

    & .buttonSeeMore:hover {
        box-shadow: 0 15px 20px rgba(46,229,157,.4);
        transform: translateY(-7px);
    }
`

const Dashboard = ({ json, uuid }) => {
    return (
        json.map(item => {
            return(
                <Wrapper key={item.id}>
                    <div className="resultTest">
                        <div className="siteLink">
                            <h3>{item.url}</h3>
                        </div>
                        <div className="resultBar">
                            <ProgressBar json={item}/>
                            <Link href={`/p?uuid=${`${uuid}?id=${item.id}`}`} as={`/p/${`${uuid}?id=${item.id}`}`}>
                                <a className="buttonSeeMore">
                                    Подробнее
                                </a>
                            </Link>
                        </div>
                    </div>
                </Wrapper>)   
        })
    );
}


export default Dashboard;