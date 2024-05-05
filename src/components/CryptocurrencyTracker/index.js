// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

const apiUrl = 'https://apis.ccbp.in/crypto-currency-converter'

class CryptocurrencyTracker extends Component {
  state = {cryptocurrenciesData: [], isLoading: true}

  componentDidMount() {
    this.getCryptoCurrencies()
  }

  getCryptoCurrencies = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json()

    const updatedData = data.map(eachData => ({
      currencyName: eachData.currency_name,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
      id: eachData.id,
      currencyLogoUrl: eachData.currency_logo,
    }))

    console.log(updatedData)
    this.setState({cryptocurrenciesData: updatedData, isLoading: false})
  }

  renderCryptocurrenciesList = () => {
    const {cryptocurrenciesData} = this.state
    return <CryptocurrenciesList cryptoCurrenciesData={cryptocurrenciesData} />
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderCryptocurrenciesList()
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
