
import './App.css';

function App() {
  return (
    <div className="container">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                <input id="icon_prefix" type="text" className="validate" />
                <label htmlFor="icon_prefix">Title</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">description</i>
                <input id="icon_telephone" type="tel" className="validate" />
                <label htmlFor="icon_telephone">content</label>
              </div>
            </div>
          </form>
        </div>

    
    </div>
  );
}

export default App;
