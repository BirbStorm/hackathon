import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import dayjs from 'dayjs'
import Result from '../components/result';
import Form from '../components/form'
const Home = () => {
  let data = {
    calories: {
      label: "Calories",
      today: 1840,
      target: 1540,
      variant: 15
    },
    sleep: {
      label: "Sleep",
      today: 8,
      target: 8,
      variant: 2
      // wake: '07:30:00',
      // sleep: '22:00:00'
    },
    weight: {
      label: "Weight",
      today: 180,
      target: 150,
      variant: 20
    },
    exercise: {
      label: "Exercise",
      today: 30,
      target: 60,
      variant: 10
    }
  }
  const [results, setResults] = useState(data)
  const onChange = (e) => {
    const data = { ...results };

    let name = e.target.name;
    console.log(name)
    let resultType = name.split(" ")[0].toLowerCase();
    let resultMacro = name.split(" ")[1].toLowerCase();
    console.log(resultMacro,resultType)
    data[resultMacro][resultType] = e.target.value;
    console.log(data[resultMacro][resultType])
    setResults(data);
  }
  const getDataForPreviousDay = async () => {
    let currentDate = dayjs(results.date);
    let newDate = currentDate.subtract(1, 'day').format('YYYY-MM-DDTHH:mm:ss')
    const res = await fetch('http://localhost:3000/api/daily?date=' + newDate)
    const json = await res.json()
    
    setResults(json);
  }

  const getDataForNextDay = async () => {
    let currentDate = dayjs(results.date);
    let newDate = currentDate.add(1, 'day').format('YYYY-MM-DDTHH:mm:ss')
    const res = await fetch('http://localhost:3000/api/daily?date=' + newDate)
    const json = await res.json()
    
    setResults(json);
  }
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
        <div class="w-1/3 bg-gray-200 p-4"><button onClick={getDataForPreviousDay}>Previous Day</button></div>
        <div class="w-1/3 p-4">{dayjs(results.date).format('MM/DD/YYYY')}</div>
        <div class="w-1/3 bg-gray-200 p-4"><button onClick={getDataForNextDay}>Next Day</button></div>
      </div>

      <div className="flex mb-4 text-center">
        <Result results={results.calories} />
        <Result results={results.sleep} />
        <Result results={results.exercise} />
        <Result results={results.weight} />
      </div>

      <div className="flex">
        <Form data={results} item="Today" onChange={onChange}/>
        <Form data={results} item="Target" onChange={onChange}/>
        <Form data={results} item="Variant" onChange={onChange}/>


      </div>
    </div>
  </div>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/daily')
  const json = await res.json()
  return { data: json }
}

export default Home