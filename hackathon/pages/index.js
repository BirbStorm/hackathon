import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import dayjs from 'dayjs'
import Result from '../components/result';

const Home = () => {
  let data = {
    calories: {
      label: "Calories",
      total: 1840,
      target: 1840,
      variant: 15
    },
    sleep: {
      label: "Sleep",
      total: 8,
      target: 8,
      variant: 2
      // wake: '07:30:00',
      // sleep: '22:00:00'
    },
    weight: {
      label: "Weight",
      total: 180,
      target: 150,
      variant: 20
    },
    exercise: {
      label: "Exercise",
      total: 30,
      target: 60,
      variant: 10
    }
  }
  const [results, setResults] = useState(data)
  return (
  <div>
    <Head>
      <title>Health tracker</title>
      <link rel="icon" href="/icon.png" />
      <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
    </Head>

    <div className="container mx-auto">

      <div className="flex text-center">
        <div className="w-full m-4">
          <h1 className="text-4xl">Mother Goose Health Tracker</h1>
        </div>
      </div>
      
      <div class="flex text-center">
        <div class="w-1/3 bg-gray-200 p-4">Previous Day</div>
        <div class="w-1/3 p-4">03/07/2020</div>
        <div class="w-1/3 bg-gray-200 p-4">Next Day</div>
      </div>

      <div className="flex mb-4 text-center">
        <Result results={results.calories} />
        <Result results={results.sleep} />
        <Result results={results.exercise} />
        <Result results={results.weight} />
      </div>

      <div className="flex">
        <div className="w-1/3">
          <h2 className="text-3xl p-4">Current</h2>
          <div className="p-4">
            <label className="block">Calories</label>
            <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></input>
          </div>
          <div className="p-4">
            <label className="block">Time Asleep</label>
            <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></input>
          </div>
          <div className="p-4">
            <label className="block">Exercise Time</label>
            <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></input>
          </div>
          <div className="p-4">
            <label className="block">Weight</label>
            <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></input>
          </div>
          <div className="p-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Save
            </button>
          </div>
        </div>
        <div className="w-1/3">
          <h2 className="text-3xl p-4">Target</h2>
          <div className="p-4">
            <label className="block">Calories</label>
            <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></input>
          </div>
          <div className="p-4">
            <label className="block">Time Asleep</label>
            <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></input>
          </div>
          <div className="p-4">
            <label className="block">Exercise Time</label>
            <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></input>
          </div>
          <div className="p-4">
            <label className="block">Weight</label>
            <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></input>
          </div>
          <div className="p-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Save
            </button>
          </div>
        </div>
        <div className="w-1/3">
          <h2 className="text-3xl p-4">Variant</h2>
          <div className="p-4">
            <label className="block">Calories</label>
            <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></input>
          </div>
          <div className="p-4">
            <label className="block">Time Asleep</label>
            <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></input>
          </div>
          <div className="p-4">
            <label className="block">Exercise Time</label>
            <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></input>
          </div>
          <div className="p-4">
            <label className="block">Weight</label>
            <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></input>
          </div>
          <div className="p-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Save
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
  )
}

export default Home