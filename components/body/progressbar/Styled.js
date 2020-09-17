import styled from 'styled-components';

function chooseColor(value) {
    const newValue = value
    if (newValue >= 90) {
        return `green`
    }
    if (newValue < 90 && newValue >= 50) {
        return 'rgb(230,119,0)'
    } 
    if (newValue <= 49) {
        return 'rgb(198,34,41)'
    }
};


export const Wrapper = styled.div`

    width: 80%;
    & .CircularProgressbar {
            /*
            * This fixes an issue where the CircularProgressbar svg has
            * 0 width inside a "display: flex" container, and thus not visible.
            */
            width: 100px;
            height: 100px;
            /*
            * This fixes a centering issue with CircularProgressbarWithChildren:
            * https://github.com/kevinsqi/react-circular-progressbar/issues/94
            */
            vertical-align: middle;
    }
    & .CircularProgressbar .CircularProgressbar-path {
        stroke: ${props => chooseColor(props.value)};
        stroke-linecap: round;
        transition: stroke-dashoffset 0.5s ease 0s;
    }

    & .CircularProgressbar .CircularProgressbar-trail {
        stroke: #d6d6d6;
        /* Used when trail is not full diameter, i.e. when props.circleRatio is set */
        stroke-linecap: round;
    }

   & .CircularProgressbar .CircularProgressbar-text {
        fill: black;
        font-size: 20px;
        dominant-baseline: middle;
        text-anchor: middle;
    }

    & .CircularProgressbar .CircularProgressbar-background {
        fill: #d6d6d6;
    }

    /*
    * Sample background styles. Use these with e.g.:
    *
    *   <CircularProgressbar
    *     className="CircularProgressbar-inverted"
    *     background
    *     percentage={50}
    *   />
    */

   & .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-text {
        fill: #fff;
    }

    & .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-path {
        stroke: #fff;
    }

    & .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-trail {
        stroke: transparent;
    }
  
    & .tableResult {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 140px;
        margin-left: 10%;
    }

    & .categoryName {
        height: 20%;
        margin: 5px;
        text-align: center;
    }
`
export const StyledProgress = styled.div`

    & .CircularProgressbar .CircularProgressbar-path {
        stroke: ${props => chooseColor(props.value)};
        stroke-linecap: round;
        transition: stroke-dashoffset 0.5s ease 0s;
    }

    & .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-background {
        fill: ${props => chooseColor(props.value)};
    }
`
export default {Wrapper, StyledProgress}