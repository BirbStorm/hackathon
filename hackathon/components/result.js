import React, {useState, useEffect} from 'react'
const Result = ({results}) => {
    let [bg, setBg] = useState("");
  
    useEffect(() => {
      setBackground()
    });
  Number()
    const setBackground = () => {
      let min = Number(results.target) - Number(results.variant);
      let max = Number(results.target) + Number(results.variant);
      if(results.today >= min && results.today <= max) {
        setBg("bg-green-500");
      } else if ( results.today < min){
        setBg("bg-blue-500");
      } else {
        setBg("bg-red-500")
      }
    }
    
    return (
      <div className={bg + " w-1/4 p-4 text-white"}>
        <h2 className="text-3xl font-bold">{results.today}
          <div className="flex text-sm p-4">
            <div className="w-1/3">{Number(results.target) - Number(results.variant)}</div>
            <div className="w-1/3 font-bold">{results.target}</div>
            <div className="w-1/3">{Number(results.target) + Number(results.variant)}</div>
          </div>
        </h2>
        <h3 className="text-xl">{results.label}</h3>
      </div>
    )
  }

export default Result