import ReportViewer from '../../components/viewer/ReportViewer';
import Wrapper from '../../components/viewer/Styled';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

const Post = ({ response }) => {
    const router = useRouter();
    return (
        <Wrapper>
            <ReportViewer json={JSON.parse(response)} />
            <p>{router.query.title}</p>
        </Wrapper>
    );
}

Post.getInitialProps = async function (ctx) {
    console.log(ctx.query.uuid)
    console.log(ctx.query.id)
    const reportJson = await fetch(`http://127.0.0.1:2020/${ctx.query.uuid}/${ctx.query.id}`)
        .then(res=> res.json()).then(res => { return res });
    return {
        response: reportJson
    }
}

export default Post;