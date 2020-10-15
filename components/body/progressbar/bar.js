import styled from 'styled-components';
import ProgressBar from './progressbar';
import Link from 'next/link';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    .resultTest {
        height: 100%;
        padding: 5px;
        display: flex;
        flex-direction: column;
    }

    .resultTest:hover {
        background-color: rgba(193, 199, 203, 0.3);
    }
    
    .siteLink {
        height: 15%;
        text-align: center;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: -0.02em;

        color: #111111;
        margin: 48px 0 32px 0;
    }

    .resultBar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 85%;
    }

    h3 {
        margin: 0;
    }

    .buttonSeeMore {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid;
        box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.4);

        margin-right: 50px;

        text-decoration: none;
        outline: none;
        display: inline-block;
        width: 110px;
        line-height: 45px;
        border-radius: 45px;
        font-family: 'Montserrat', sans-serif;
        font-size: 9px;
        text-transform: uppercase;
        text-align: center;
        letter-spacing: 3px;
        font-weight: 600;
        color: #423f3e;
        background: white;
        box-shadow: 0 8px 15px rgba(0,0,0,.1);
        transition: .3s;
    }

    .buttonSeeMore:hover {
        transform: translateY(-7px);
    }

    .underlineMain {
        display: flex;;
        justify-content: center;
    }

    .underline {
        width: 90%;
        border-bottom: 1px solid;
        border-color: rgba(193, 199, 203, 0.6);
    }
`

const Bar = ({ allDashboard, uuid}) => {
    console.log(allDashboard[0].id)
    return(
        allDashboard.map(item => {
            return(
                <Wrapper key={item.id}>
                    <div className="resultTest">
                        <div className="siteLink">
                            <h3>{item.url}</h3>
                        </div>
                        <div className="resultBar">
                            <ProgressBar json={item}/>
                            <Link href={`/report?uuid=${`${uuid}?id=${item.id}`}`} as={`/report/${`${uuid}?id=${item.id}`}`}>
                                <a className="buttonSeeMore">
                                    Подробнее
                                </a>
                            </Link>
                        </div>
                        <div className="underlineMain" >
                            <div className="underline">

                            </div>
                        </div>
                    </div>
                </Wrapper>
            )   
        })
    )
}

export default Bar;