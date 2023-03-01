import './Search.css';
function Search(){
    return <div className='searchDiv'>
        <input type='search' className='searchInput' placeholder='Search through your surveys...'/>
        <input type='date' className="dateInput"/>
    </div>
}

export default Search;