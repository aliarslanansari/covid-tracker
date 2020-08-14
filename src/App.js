import React from 'react';
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api';
import covidImage from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country:''
  }

  handleCountryChange = async (country)=>{
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country:country });
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  render() {
    const {data,country} = this.state;
    return ( 
      <div className = {styles.container} >
        <img src={covidImage} className={styles.image} alt='COVID-19'/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country}/>
      </div>
    )
  }
}
export default App;