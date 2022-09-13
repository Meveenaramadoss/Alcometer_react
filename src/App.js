import './App.css';
import{useState} from 'react';

function App() {
const [weight, setWeight]=useState(70);
const [bottles, setBottles]=useState(3);
const [time, setTime]=useState(4);
const[gender, setGender]=useState('male');
const[result, setResult]=useState(0);



function click(e){
  e.preventDefault();
  let formula=0;
 /* let litres = 0;*/
  const litres = (bottles*0.33);
  const grams1 = (litres*8*4.5);
  const burning = (weight/10);
  const grams2 = (grams1-burning*(time));
    
  if (gender=='male'){
    formula =((grams2/weight)*0.7)
  }else{
    formula =((grams2/weight)*0.6)
  }
setResult (formula);
}



return(
  <div>
<h3>Calories/Alcometer</h3>
  <form onSubmit={click}>
    <div>
      <label>WEIGHT</label>
      <input name ="weight" type ="number" step="1" value ={weight} onChange = {e=>setWeight(e.target.value)} />
    </div>
    <div>
      <label>BOTTLES</label>
      <select name ="bottles"  value ={bottles} onChange = {e=>setBottles(e.target.value)}>
      <option value ="1">1</option>
        <option value ="2">2</option>
        <option value ="3">3</option>
        <option value ="4">4</option>
        <option value ="5">5</option>
        <option value ="6">6</option>
        <option value ="7">7</option>
        <option value ="8">8</option>
        <option value ="9">9</option>
        <option value ="10">10</option>
        <option value ="11">11</option>
      </select>
    </div>
    <div>
      <label>TIME</label>
      <select name ="Time"  value ={time} onChange = {e=>setTime(e.target.value)}>
        <option value ="1">1</option>
        <option value ="2">2</option>
        <option value ="3">3</option>
        <option value ="4">4</option>
        <option value ="5">5</option>
        <option value ="6">6</option>
        <option value ="7">7</option>
        <option value ="8">8</option>
        <option value ="9">9</option>
        <option value ="10">10</option>
      </select>
    </div>
    <div>
      <label>Gender</label>
      <input type="radio" name="gender" value ="male" defaultChecked onChange = {e =>setGender(e.target.value)}/><label>Male</label>
      <input type="radio" name="gender" value ="female" onChange = {e =>setGender(e.target.value)}/><label>Female</label>

    </div>
    <div>
      <output>
        {result}
      </output>
    </div>
    <button>Calculate</button>
    
  </form>
  </div>
)
}

export default App;
