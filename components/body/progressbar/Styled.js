import styled from 'styled-components';

function chooseColor(value) {
    const newValue = +value * 100
    if (newValue >= 90) {
        return `#4DDE00`
    }
    if (newValue < 90 && newValue >= 50) {
        return '#FFC500'
    } 
    if (newValue <= 49) {
        return '#E9003A'
    }
}


export const Wrapper = styled.div`

    width: 80%;
    & .CircularProgressbar {
            width: 80px;
            height: 80px;
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
        height: 120px;
        margin-left: 10%;
    }

    & .categoryName {
        height: 20%;
        margin: 5px;
        text-align: center;
    }
`
export const StyledProgress = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    p {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: -0.02em;

        color: #111111;
    }

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