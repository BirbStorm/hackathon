import React from 'react'

const Form = ({data, item, onChange}) => {
    return(
        <div className="w-1/3">
            <h2 className="text-3xl p-4">{item}</h2>
            <div className="p-4">
            <label className="block">Calories</label>
            <input type="number" name={item + " Calories"} className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" onChange={(e) => onChange(e)} value={data['calories'][item.toLowerCase()]}>
            </input>
            </div>
        <div className="p-4">
            <label className="block">Time Asleep</label>
            <input type="number" name={item + " Sleep"} className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" onChange={(e) => onChange(e)} value={data['sleep'][item.toLowerCase()]}></input>
        </div>
        <div className="p-4">
            <label className="block">Exercise Time</label>
            <input type="number" name={item + " Exercise"} className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" onChange={(e) => onChange(e)} value={data['exercise'][item.toLowerCase()]}></input>
        </div>
        <div className="p-4">
            <label className="block">Weight</label>
            <input type="number" name={item + " Weight"} className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" onChange={(e) => onChange(e)} value={data['weight'][item.toLowerCase()]}></input>
        </div>
    </div>
    )
}

export default Form