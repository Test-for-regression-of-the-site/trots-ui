import { CircularProgressbar } from 'react-circular-progressbar';
import {StyledProgress, Wrapper} from './Styled'

const ProgressBar = ({ json }) => {
    return (
        <Wrapper>
            <div className='tableResult'>
                <div className="Performance">
                    <StyledProgress className='block' value={json.performance}>
                        <CircularProgressbar value={json.performance} maxValue={1} text={`${json.performance}%`} />
                        <p className='categoryName'>Performance</p>
                    </StyledProgress>

                </div>
                <div className="Accessibility">
                    <StyledProgress value={json.accessibility}>
                        <CircularProgressbar value={json.accessibility} maxValue={1} text={`${json.accessibility}%`} />
                        <p className='categoryName'>Accessibility</p>
                    </StyledProgress>

                </div>
                <div className="Best Practices">
                    <StyledProgress value={json.bestPractices}>
                        <CircularProgressbar value={json.bestPractices} maxValue={1} text={`${json.bestPractices}%`} />
                        <p className='categoryName'>Best Practices</p>
                    </StyledProgress>
                </div>
                <div className="SEO">
                    <StyledProgress value={json.seo}>
                        <CircularProgressbar value={json.seo} maxValue={1} text={`${json.seo}%`} />
                        <p className='categoryName'>SEO</p>
                    </StyledProgress>
                </div>
                <div className="Progressive Web App">
                    <StyledProgress value={json.progressiveWebApp}>
                        <CircularProgressbar value={json.progressiveWebApp} maxValue={1} text={`${json.progressiveWebApp}%`} />
                        <p className='categoryName'>Progressive Web App</p>
                    </StyledProgress>
                </div>
            </div>
        </Wrapper>
    )
}

export default ProgressBar;