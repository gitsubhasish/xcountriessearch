import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";
import styles from "./App.module.css";

function Country() {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [debounceTimeout, setDebounceTimeout] = useState(0);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(response.data);
      setFilteredCountries(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data: ", error.message);
    }
  };

  const debounceSearch = (event, debounceTimeout) => {
    const value = event.target.value;

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const timeout = setTimeout(() => {
      performSearch(value);
    }, 500);

    setDebounceTimeout(timeout);
  };

  const performSearch = (text) => {
    if (text.trim() === "") {
      setFilteredCountries(countries); // Show all countries when search is empty
    } else {
      setFilteredCountries(
        countries.filter(
          (country) => country.name.common.toLowerCase().includes(text) // Flexible search with case-insensitive match
        )
      );
    }
  };

  console.log(filteredCountries);

  return (
    <>
      <input
        type="text"
        style={{ width: "80%", margin: 10, padding: 10 }}
        name="search"
        onChange={(e) => debounceSearch(e, debounceTimeout)}
      />
      <hr />
      <br />
      <div className={styles.gridContainer}>
        {loading ? (
          <p>Loading...</p> // Show this when loading
        ) : filteredCountries.length > 0 ? (
          filteredCountries.map((cnt) => (
            <CountryCard key={cnt.code} cnt={cnt} />
          ))
        ) : null}
      </div>
    </>
  );
}

export default Country;
