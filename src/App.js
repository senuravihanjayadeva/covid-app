import React from "react";

//import Components
import Cards from "./components/Cards/Cards";
import Charts from "./components/Charts/Charts";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import Footer from "./components/Footer/Footer";

//import image
import coronaImage from "./Image/image.png";

//import css
import styles from "./App.module.css";

//import api/index.js to call the fetchData function
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  //componentDidMount method
  async componentDidMount() {
    //call the fetchData Function in api/index.js
    const fetchedData = await fetchData();

    //change the state
    this.setState({ data: fetchedData });
    //get the data into the console
    console.log(fetchedData);
  }

  //change the state of country
  handleCountryChange = async (country) => {
    //fetch data
    const fetchedData = await fetchData(country);
    //dispaly fetched data in the console
    console.log(fetchedData);

    //change the state after selecting a country
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} />
        {/* fetched data from api ,we can pass those data to componets as props */}
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />

        <Footer />
      </div>
    );
  }
}

export default App;
