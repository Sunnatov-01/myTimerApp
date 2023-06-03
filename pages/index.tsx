import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import { setInterval } from "timers";
import { setTimeout } from "timers";

export default function Home() {
  const [hour , setHour] = React.useState(0);
  const [minute,setMinute] = React.useState(0);
  const [second,setSecond] = React.useState(0);
  const [active,setActive] = React.useState(false);
 
   
  const startCount =()=>{
    setActive(true)
  }
  if(active===true){
    let a = setTimeout(() => {
      if(second!=0){
        setSecond(second-1)
      }else if(second===0){
        if(minute!=0){
          setSecond(60)
          setMinute(minute-1)
        }else if(hour!=0){
          setMinute(60)
          setHour(hour-1)
        }
      }
    }, 1000);
  }

  const plusHour=()=>{
    setHour(hour+1)
  }
  const plusMinute =()=>{
    setMinute(minute+1)
  }
  const plusSecond =()=>{
    setSecond(second+1)
  }
  const resetCount =()=>{
    setActive(false)
    setSecond(0);
    setHour(0);
    setMinute(0);
  }
  const stopCount =()=>{
    setActive(false)
  }
  return (
    <div>
      <div className="text-center">
      <h1>{hour} : {minute} : {second}</h1>
      <button className="btn btn-info m-2" onClick={plusHour}>+</button>
      <button className="btn btn-info m-2" onClick={plusMinute}>+</button>
      <button className="btn btn-info m-2" onClick={plusSecond}>+</button>
      </div>
      <div className=" text-center">
      <button className="btn btn-success m-2" onClick={startCount}>Start</button>
      <button className="btn btn-warning m-2" onClick={resetCount}>Reset</button>
      <button className="btn btn-danger m-2" onClick={stopCount}>Stop</button>
      </div>
    </div>
  )
}
