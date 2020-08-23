import { CircularProgressbar } from 'react-circular-progressbar';
import {StyledProgress, Wrapper} from './Styled'

const ProgressBar = props => {
    return (
        <Wrapper>
            <div className='tableResult'>
                <div className="Performance">
                    <StyledProgress className='block' value={props.json.categories.performance.score}>
                        <CircularProgressbar value={props.json.categories.performance.score} maxValue={1} text={`${props.json.categories.performance.score * 100}%`} />
                        <p className='categoryName'>Performance</p>
                    </StyledProgress>

                </div>
                <div className="Accessibility">
                    <StyledProgress value={props.json.categories.accessibility.score}>
                        <CircularProgressbar value={props.json.categories.accessibility.score} maxValue={1} text={`${props.json.categories.accessibility.score * 100}%`} />
                        <p className='categoryName'>Accessibility</p>
                    </StyledProgress>

                </div>
                <div className="Best Practices">
                    <StyledProgress value={props.json.categories['best-practices'].score}>
                        <CircularProgressbar value={props.json.categories['best-practices'].score} maxValue={1} text={`${props.json.categories['best-practices'].score * 100}%`} />
                        <p className='categoryName'>Best Practices</p>
                    </StyledProgress>
                </div>
                <div className="SEO">
                    <StyledProgress value={props.json.categories.seo.score}>
                        <CircularProgressbar value={props.json.categories.seo.score} maxValue={1} text={`${props.json.categories.seo.score * 100}%`} />
                        <p className='categoryName'>SEO</p>
                    </StyledProgress>
                </div>
                <div className="Progressive Web App">
                    <StyledProgress value={props.json.categories.pwa.score}>
                        <CircularProgressbar value={props.json.categories.pwa.score} maxValue={1} text={`${parseInt(props.json.categories.pwa.score * 100, 10)}%`} />
                        <p className='categoryName'>Progressive Web App</p>
                    </StyledProgress>
                </div>
            </div>
        </Wrapper>
    )
}

export default ProgressBar;