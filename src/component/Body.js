import ReportCard from './ReportCard';

function Body(){
    return <>
    {Array(3).fill().map((v,i) => <ReportCard year={i + 1}/>)}
    </>
}

export default Body;