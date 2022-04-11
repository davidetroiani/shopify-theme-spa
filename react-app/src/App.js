import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [voucher, setVoucher] = useState('');

  const handleChangeVoucher = event => setVoucher(event.target.value);

  //call custom Node API sending customer.id and the hash as custom headers
  const checkVoucher = () => {
    axios.post('http://localhost:3000/validate-voucher', {voucher: voucher}, {headers: {'cid': window.__cid, 'ch': window.__ch}}).then((res)=>{
      console.log(res.data);
      alert(res.data);
    });
  }

  return (
    <div className="field">
      <Input id="voucher_value" value={voucher} handleChange={handleChangeVoucher}/>
      <label className="field__label">
        Type your voucher here
      </label>
      <Button handleClick={checkVoucher} value="GO!"/>
    </div>
  );
}

function Button({handleClick, value}){
  return (
    <input type="button" onClick={handleClick} value={value} />
  )
}

function Input({value, handleChange}) {
  return (
    <input value={value} onChange={handleChange} type="text" className="field__input" />
  )
}

export default App;
