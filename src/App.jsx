import './App.css';
import MiComponentPerson from './MisComponentPerson/MiComponentPerson';


const App = () => {
  return (
    <div className="App">
        <MiComponentPerson lastName= {"Doe"} firstName= {" Jane"} age= {"45"} hairColor= {"Black"}/>
        <MiComponentPerson lastName= {"Smith"} firstName= {" Jhon"} age= {"88"} hairColor= {"Black"}/>
        <MiComponentPerson lastName= {"Fillmore"} firstName= {" Millard"} age= {"50"} hairColor= {"Black"}/>
        <MiComponentPerson lastName= {"Smith"} firstName= {" Maria"} age= {"62"} hairColor= {"Black"}/>        
    </div>
  );
}

export default App;
