import React, { useState, useEffect, createContext } from 'react';

import {housesData} from '../data';

export const HouseContext=createContext();

const HouseContextProvider=({children})=>{
const [houses,setHouses]=useState(housesData);
const [country,setCountry]=useState('Location (any)');
const [countries,setCountries]=useState([]);
const [property,setProperty]=useState('Property (any)');
const [properties,setProperties]=useState([]);
const [price,setPrice]=useState('Price (any)');
const [loading,setLoading]=useState(false);

useEffect(()=>{
  const allCountries=houses.map((house)=>{
    return house.country;
  });
  
  //remove duplicates
  const uniqueCountries=['Location (any)',...new Set(allCountries)];
  
  setCountries(uniqueCountries);
},[]);

useEffect(()=>{
  const allProperties=houses.map((house)=>{
    return house.type;
  });
  
  //remove duplicates
  const uniqueProperties=['Property (any)',...new Set(allProperties)];
  
  setProperties(uniqueProperties);
  // console.log(uniqueProperties);
},[]);

const handleClick=()=>{
  
  // console.log('clicked');
  const isDefault=(str)=>{
    return str.split(' ').includes('(any)');
  };

  const minPrice= parseInt(price.split(' ')[0]);

  const maxPrice=parseInt(price.split(' ')[2]);
  // console.log(maxPrice);

  const newHouses=housesData.filter((house)=>{
    const housePrice=parseInt(house.price);
      // console.log(parseInt(house.price));
    
    if(
    house.country===country && 
    house.type===property && 
    housePrice>=minPrice && 
    housePrice<=maxPrice

  ){
    return house;
  }
  
});
  console.log(newHouses);
  // return newHouses;
};

return (
<HouseContext.Provider 
  value={{
    country,
    setCountry,
    countries,
    property,
    setProperty,
    properties,
    price,
    setPrice,
    houses,
    loading,
    handleClick,

  }}
  >
    {children}
    </HouseContext.Provider>
);
};

export default HouseContextProvider;
