import React, {useState, useEffect} from 'react'
const Result = ({results}) => {
    let [bg, setBg] = useState("");
  
    useEffect(() => {
      setBackground()
    });
    const setBackground = () => {
      // Sets min and max of the goals based on the variance.
      let min = Number(results.target) - Number(results.variant);
      let max = Number(results.target) + Number(results.variant);

      //Sets background color for Time Asleep and Exercise Time boxes
      if(results.label ==='Time Asleep' || results.label ==='Exercise Time'){
        if(results.today >= min && results.today <= max) {
          setBg("bg-green-500");
        } else if ( results.today < min){
          setBg("bg-red-500");
        } else {
          setBg("bg-blue-500")
        }
      }

      //Sets background color for Calories due to the colories needing to be swapped around
      else{
        if(results.today >= min && results.today <= max) {
          setBg("bg-green-500");
        } else if ( results.today < min){
          setBg("bg-blue-500");
        } else {
          setBg("bg-red-500")
        }
      }
    }
    
    //Returns Result component with correct background color
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