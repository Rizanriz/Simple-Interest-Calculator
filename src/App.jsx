import { useState } from 'react';
import './App.css';
import { TextField, Stack } from '@mui/material';

function App() {
  const [Interest,setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(0);
  const [principleInvalid, setPrincipleInvalid] = useState(false);
  const [rateInvalid, setRateInvalid] = useState(false);
  const [yearInvalid, setYearInvalid] = useState(false);

  const handleCalculate = (e) => {
    e.preventDefault();
    // console.log("clicked");
    if(principle && rate && year){
        setInterest(principle*rate*year/100)
       console.log(Interest);
    }else{
      alert("Fill the form complitly")
    }
  };

  const handleInput = (tag) => {
    const { name, value } = tag;
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    if (!!value.match(/^\d*\.?\d+$/)) {
      if (name === "principle") {
        setPrinciple(value);
        setPrincipleInvalid(false);
      } else if (name === "rate") {
        setRate(value);
        setRateInvalid(false);
      } else if (name === "year") {
        setYear(value);
        setYearInvalid(false);
      }
    } else {
      if (name === "principle") {
        setPrincipleInvalid(true);
        setPrinciple(value);
      } else if (name === "rate") {
        setRateInvalid(true);
        setRate(value);
      } else if (name === "year") {
        setYearInvalid(true);
        setYear(value);
      }
    }
  };

  const handleReset = ()=>{
    setInterest (0)
    setPrinciple (0)
    setRate (0)
    setYear (0)
    setRateInvalid (false)
    setYearInvalid (false)
    setPrincipleInvalid(false)
  }

  return (
    <>
      <div className='main'>
        <div className='head'>
          <h2>Simple Interest Calculator</h2>
          <p>Calculate your simple interest easily</p>
        </div>
        <div className='result'>
          <h2>{Interest}</h2>
          <p>Total simple interest</p>
        </div>
        <form className='input' onSubmit={handleCalculate}>
          <div>
            <TextField className='w-75 ' value={principle || ""} name='principle' onChange={(e) => handleInput(e.target)} id="Principle" label="$ Principle Amount" variant="outlined" />
            {principleInvalid && <div className='text-danger'>Invalid principle amount</div>}
            <TextField className='w-75 mt-3' value={rate || ""} name='rate' onChange={(e) => handleInput(e.target)} id="Rate" label="Rate of interest (p.a)%" variant="outlined" />
            {rateInvalid && <div className='text-danger'>Invalid rate of interest</div>}
            <TextField className='w-75 mt-3' value={year || ""} name='year' onChange={(e) => handleInput(e.target)} id="Year" label="Time period (year)" variant="outlined" />
            {yearInvalid && <div className='text-danger'>Invalid time period</div>}
          </div>
          <div className='mt-5'>
            <Stack direction="row" spacing={2}>
              <button disabled={principleInvalid || rateInvalid || yearInvalid} type='submit'>Calculate</button>
              <button onClick={handleReset} type='reset'>Reset</button>
            </Stack>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
