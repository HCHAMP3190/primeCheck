import {useEffect, useState } from 'react'
function App() {
  const [number,setNumber]=useState(0);
  const [result, setResult] = useState('Result');
  const [primes,setPrimes]=useState([]);
  const input=document.getElementById('input');
function output(){
  console.log(number+1);
    let arr=new Array(number+1).fill(true);
    arr[0]=arr[1]=false;
  for(let i=2;i*i<=number;i++)
  {
      if(arr[i]===true)
      {
          for(let j=i*i;j<=number;j+=i)
          {
              arr[j]=false;
          }
      }
  }
  if(arr[number]){

    setResult('Is Prime');
  }
  else
  { 
    setResult('Not Prime');
  }
  const primeArray = arr.reduce((acc,curr, index) => { 
    if (curr == true && index >= 2) { 
        acc.push(index+","); 
    } 
    return acc; 
}, []); 
setPrimes(primeArray);
}
const handleOnChange=(event)=>{
  setNumber(Number(event.target.value));
}
useEffect(()=>{
  console.log("called");
  output();
},[number])
  return (
    <>
      <div className='flex  flex-wrap flex-col items-center justify-items-start h-screen w-screen bg-slate-700 '>
        <div className='font-bold text-5xl text-blue-400'>CHECK IF NUMBER IS PRIME</div>
        <div className='my-4 font-bold text-2xl text-blue-400'>(Sieve of Eratsosthenes)</div>
        <div className='my-12'><input type='number' placeholder='Enter number...' id='input' value={number} onChange={handleOnChange} className=' border-4 border-white shadow-2xl shadow-blue-500 rounded-xl text-lg'></input></div>
        <div><p className='border-2 border-green-500 rounded-lg font-bold text-5xl text-blue-400'>{result}</p></div>
        <div className='my-12 font-bold text-5xl text-blue-400'>PRIMES UPTO NUMBER {number}</div>
        <div className='flex-wrap overflow-scroll overflow-y-hidden border-4 w-screen rounded-lg border-blue-500 shadow-xl shadow-pink-500  font-medium text-base text-yellow-400 flex-1'>{primes}</div>
      </div>
    </>
  )
}

export default App
