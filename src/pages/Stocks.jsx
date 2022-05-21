import { Link } from "react-router-dom"

const Stocks = (props) => {
    const stocks = [
        {name: "Apple Inc.", symbol: "AAPL"},
        {name: "Microsoft Corporation", symbol: "MSFT", price: 140.64,},
        {name: "Alphabet Inc.", symbol: "GOOGL"},
        {name: "Facebook, Inc.", symbol: "FB"},
        {name: "Oracle Corporation", symbol: "ORCL"},
        {name: "Intel Corporation", symbol: "INTL"}
      ]

  return (
    <div className="stocks">
      {stocks.map(({name, symbol}, idx) => 
          <Link key={idx} to={`/stocks/${symbol}`}>
            <h1>{name}</h1>
          </Link>
      )}
    </div>
  )
}

export default Stocks