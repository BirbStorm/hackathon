import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
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

      <div class="flex mb-4 text-center">
        <div class="w-1/4 p-4 bg-green-500 text-white">
          <h2 className="text-3xl font-bold">1850
            <div class="flex text-sm p-4">
              <div class="w-1/3">1700</div>
              <div class="w-1/3 font-bold">1850</div>
              <div class="w-1/3">2000</div>
            </div>
          </h2>
          <h3 className="text-xl">Food</h3>
        </div>
        <div class="w-1/4 p-4 bg-red-500 text-white">
          <h2 className="text-3xl font-bold">195
            <div class="flex text-sm p-4">
              <div class="w-1/3">150</div>
              <div class="w-1/3 font-bold">160</div>
              <div class="w-1/3">170</div>
            </div>
          </h2>
          <h3 className="text-xl">Sleep</h3>
        </div>
        <div class="w-1/4 p-4 bg-green-500 text-white">
          <h2 className="text-3xl font-bold">55
            <div class="flex text-sm p-4">
              <div class="w-1/3">50</div>
              <div class="w-1/3 font-bold">60</div>
              <div class="w-1/3">70</div>
            </div>
          </h2>
          <h3 className="text-xl">Exercises</h3>
        </div>
        <div class="w-1/4 p-4 bg-blue-500 text-white">
          <h2 className="text-3xl font-bold">120
            <div class="flex text-sm p-4">
              <div class="w-1/3">145</div>
              <div class="w-1/3 font-bold">160</div>
              <div class="w-1/3">175</div>
            </div>
          </h2>
          <h3 className="text-xl">Weight</h3>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/4">
          <h2 className="text-3xl p-4">Food</h2>
          <div className="p-4">
            <label className="block">Calories</label>
            <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></input>
          </div>
          <div className="p-4">
            <label className="block">Carbs</label>
            <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></input>
          </div>
          <div className="p-4">
            <label className="block">Fat</label>
            <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></input>
          </div>
          <div className="p-4">
            <label className="block">Protein</label>
            <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></input>
          </div>
          <div className="p-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Save
            </button>
          </div>
        </div>
        <div className="w-1/4">
          <h2 className="text-3xl p-4">Sleep</h2>
          <div className="p-4">
            <label className="block">Went to Sleep at</label>
            <input type="time" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></input>
          </div>
          <div className="p-4">
            <label className="block">Woke up at</label>
            <input type="time" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></input>
          </div>
          
          <div className="p-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Save
            </button>
          </div>
        </div>
        <div className="w-1/4">
          <h2 className="text-3xl p-4">Exercise</h2>
          <div className="p-4">
            <label className="block">Time</label>
            <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></input>
          </div>
          <div className="p-4">
            <label className="block">Intensity</label>
            <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></input>
          </div>
          <div className="p-4">
            <label className="block">Calories Burnt</label>
            <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></input>
          </div>
          <div className="p-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Save
            </button>
          </div>
        </div>
        <div className="w-1/4">
        <div className="w-1/4">
          <h2 className="text-3xl p-4">Weight</h2>
          <div className="p-4">
            <label className="block">Current Weight</label>
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
  </div>
)

export default Home