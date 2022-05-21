import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


const SngleStock = (props) => {
  const apiKey = "f06d65e8a94f5dc4f4495fc194daa1fc"
  const params = useParams()
  const symbol = params.symbol
  const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`

  const [stock, setStock] = useState(null)


  const getStock = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setStock(data[0])
  }

  useEffect(() => {getStock()}, [])

// console.log("name is: ",stock.name)
  const loaded = () => {
    return (
      <div>
        <h1>{stock.name}</h1>
        <h2>Symbol: {symbol}</h2> 
        <h2>Price: {stock.price}</h2>
        <h2>Change: {stock.change}</h2>
        <h2>Day Low: {stock.dayLow}</h2>
        <h2>Day High: {stock.dayHigh}</h2>
        
      </div>
    )
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }
  return stock ? loaded() : loading()
}

export default SngleStock