import ReportViewer from '../../components/viewer/ReportViewer';
import Wrapper from '../../components/viewer/Styled';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

const Post = props => {
    const router = useRouter();
    return (
    <Wrapper>
        <ReportViewer json={props.response} />
        <p>{router.query.title}</p>
    </Wrapper>
    );
}

Post.getInitialProps = async function (ctx) {
    const reportJson = await fetch('http://192.168.12.118:2020/getJson')
        .then(res=> res.json()).then(res => {return res});

    return {
        response: reportJson[ctx.query.id]
    }
}

export default Post