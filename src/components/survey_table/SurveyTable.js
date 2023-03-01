import './SurveyTable.css';
function SurveyTable(props){
    const dataArray = props.data;

    return <div>
        
        <table className="surveyTable"> 
        <h3 className='tableTitle'>Your Surveys</h3> 
            <tr className='surveyHeader'>  
                <th>Status</th>  
                <th>Title</th>  
                <th>Date Created</th>
                <th>Hyperlink</th>  
            </tr>  
    
            {dataArray.map((dataArray, index) => (  
              <tr data-index={index} >  
                <td className='surveyCell'>{dataArray.status}</td>  
                <td className='surveyCell'>{dataArray.title}</td>  
                <td className='surveyCell'>{dataArray.dateC}</td>
                <td className='surveyCell'>{dataArray.hyperlink}</td>  
              </tr>  
            ))}  
    
        </table>  
        
    </div>
}

export default SurveyTable;