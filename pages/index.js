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
        height: 200px;
        width: 100%;
    }
`

class PageHome extends React.Component {
    static getInitialProps = async function () {
        const reportJson = await fetch('http://192.168.1.4:2020/getJson')
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
                        <Body json={this.props.response} />
                    </div>
                </div>
            </Wrapper>
        )
    }
}

// class PageHome =(props) => {
//     state = {
//         img: props.audits['screenshot-thumbnails'].details.items[9].data
//     };
//     // console.log(props.res[0]);
//     return (
//         <Wrapper>
//             <div className='allContent'>
//                 <div className='blockHeader'>
//                     <Header />
//                 </div>
//                 <div className='blockBody'>
//                     <Body />
//                 </div>
//             </div>
//         </Wrapper>
//     )
// }

export default PageHome;