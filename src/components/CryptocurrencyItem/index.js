// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoCurrencyData} = props
  const {currencyName, usdValue, euroValue} = cryptoCurrencyData
  const {currencyLogoUrl} = cryptoCurrencyData

  return (
    <li className="item-container">
      <div className="logo-and-title-container">
        <img
          src={currencyLogoUrl}
          className="currency-logo"
          alt={currencyName}
        />
        <p className="currency-name">{currencyName}</p>
      </div>

      <div className="usd-and-euro-values-container">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
