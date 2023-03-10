import './App.css';
import './internal.css';

function App() {
  return (
    <div className="App">
     <div className='layout'>
      <div className='formlyt'>
        <form className='frmtag'>
          <fieldset className='fldset'>
            <table className='frmtable'>
            <tr><td><label>Username</label></td>
            <td><input id='username' type="email" placeholder="Enter The Username" maxLength={40}></input></td></tr>
            <tr><td><label>Password</label></td>
            <td><input id='password' type='password' maxLength={10}></input></td></tr>
             </table>
             <button className='frmbutton'>Login</button>
          </fieldset>
        </form>
      </div>
     </div>
    </div>
  );
}

export default App;
