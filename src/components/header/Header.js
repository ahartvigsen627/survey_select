import './Header.css';
import download from './download.png'

function Header(){
    return (
      <div className="header_div">
        <h2>Survey Dashboard</h2>
        <p>All of your survey activity displayed in one place.</p>
        <div className='button_div'>
          <button className='header_buttons export_survey_button'><img src={download} alt='download icon'></img>Export</button>
          <button className='header_buttons new_survey_button'>+ New Survey</button>
        </div>
        <hr className='solid'></hr>
      </div>
    );
}

export default Header;