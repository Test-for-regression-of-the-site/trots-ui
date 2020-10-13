import styled from 'styled-components';
import SortToggle from './sortToggle';
import Bar from './bar';
import { useState, useEffect } from 'react';

const StyledSortPanel = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 93%;
`

function sortDashboard(json, unit, status) {
    const needString = unit[0].toLowerCase() + unit.slice(1).replace(/\s+/g, '');
    console.log(needString)
    if(status == false) {
        return json.sort((a,b) => {
            return b[needString] - a[needString]
        })
    }
    return json.sort((a,b) => a[needString] - b[needString])
}


const Dashboard = ({ json, uuid }) => {
    const initialState = {
        Performance: true,
        Accessibility: true,
        BestPractices: true,
        SEO: true,
        ProgressiveWebApp: true,
    }

    const [type, setType] = useState(initialState);
    const [currentSort, setCarrentSort] = useState({Performance: true})
    const [allDashboard, setSort] = useState(json);

    function chooseToggle(typeToggle, status) {
        setType(Object.assign(initialState, { [typeToggle]: status }));
        setCarrentSort({ [typeToggle]: status })
    }

    useEffect(() => {
        const unit = Object.keys(currentSort)[0];
        setSort(sortDashboard(json, unit, currentSort[unit]));
        console.log(allDashboard)
    })

    return (
        <>
            <StyledSortPanel >
                <SortToggle type="Performance" status={type['Performance']} chanche={chooseToggle} />
                <SortToggle type="Accessibility" status={type['Accessibility']} chanche={chooseToggle} />
                <SortToggle type="Best Practices" status={type['BestPractices']} chanche={chooseToggle} />
                <SortToggle type="SEO" status={type['SEO']} chanche={chooseToggle} />
                <SortToggle type="Progressive Web App" status={type['ProgressiveWebApp']} chanche={chooseToggle} />
            </StyledSortPanel>
            <Bar allDashboard={allDashboard} uuid={uuid} />
        </>
    );
}


export default Dashboard;