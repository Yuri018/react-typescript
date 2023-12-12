import { useState, createContext, ChangeEvent } from "react";

import {
  WeatherWrapper,
  Header,
  Title,
  Main,
  StyledButton,
  Search,
} from "./styles";
import Input from "components/Input";

interface WeatherData {
    city: string;
    degree: number;
    icon: string;
}

function Weather() {
  const [cityValue, setCityValue] = useState<string>();
  const [weatherStatus, setWeatherStatus] = useState<WeatherData>({
    city: '',
    degree: 0,
    icon: '',
  });

  console.log(cityValue?.length);

  const createWeaterCard = (weatherData: any) => {
    const cityName = weatherData.name;
    const degree = Math.round(weatherData.main.temp - 273.15)  + "°";
    const icon = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  }

  const APP_ID = "72bbdf1b10168e5e2dc5ec7ceedf1f49";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${APP_ID}`;

  async function getWeatherData() {
    if (cityValue?.length === undefined) {
      return alert("Please enter a city name");
    }
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
      const data = await response.json();
      setWeatherStatus(data);
    } catch (error) {
        // setWeatherStatus(ERROR);
        const ERROR = 'API Error';
    }
  }

  return (
    <WeatherWrapper>
      <Header>
        <Title>Weather app</Title>
      </Header>
      <Main>
        <Search>
          <Input
            placeholder="Colrado"
            value={cityValue}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setCityValue(event.target.value)
            }
          />
        
          <StyledButton onClick={getWeatherData}>Search</StyledButton>
        </Search>
      </Main>
    </WeatherWrapper>
  );
}

export default Weather;
