import './App.css';
import React, { useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    
                <img src="/weather-icon.png" alt="Weather" className="App-logo" />
                
                    <Typography variant="h5">Your Weather</Typography>
                </header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:day" element={<DetailedForecast />} />
                </Routes>
                <footer className="App-footer">
                    <Typography variant="body2">
                        Created by <b>Mateusz Zrebiec</b>
                    </Typography>
                </footer>
            </div>
        </BrowserRouter>
    );
}

function Home() {
    const [pogodaKrakow, setPogodaKrakow] = useState(null);

    useEffect(() => {
        fetchWeatherData('Krakow', setPogodaKrakow);
    }, []);

    const fetchWeatherData = async (location, setData) => {
        try {
            const response = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=50.0614&longitude=19.9366&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max&timezone=Europe%2FBerlin`
            );
            if (!response.ok) {
                throw new Error('Nie udało się pobrać danych pogodowych');
            }
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="content">
            <Typography variant="h4">Prognoza pogody w Krakowie</Typography>
            {pogodaKrakow && (
                <div className="today-forecast">
                    <div className="forecast-item">
                    <Typography>
                        Wschód słońca: <b>{pogodaKrakow.daily.sunrise[0].split('T')[1]}</b>
                    </Typography>
                    </div>
                    <div className="forecast-item">
                    <Typography>
                        Zachód słońca: <b>{pogodaKrakow.daily.sunset[0].split('T')[1]}</b>
                    </Typography>
                    </div>
                    <div className="forecast-item">
                    <Typography>
                        Temperatura maksymalna: <b>{pogodaKrakow.daily.temperature_2m_max[0]}°C</b>
                    </Typography>
                    </div>
                    <div className="forecast-item">
                    <Typography>
                        Temperatura minimalna: <b>{pogodaKrakow.daily.temperature_2m_min[0]}°C</b>
                    </Typography>
                    </div>
                    <div className="forecast-item">
                    <Typography>
                        Szansa na opady: <b>{pogodaKrakow.daily.precipitation_probability_max[0]}%</b>
                    </Typography>
                    </div>

                </div>
            )}
            <div>
                <Button variant="contained" component={Link} to="/dzis">
                    Więcej informacji
                </Button>
            </div>

            <div style={{ marginTop: '30px' }}></div>

            <hr width="100%" align="center" color='white'></hr>

            <div style={{ marginTop: '20px' }}></div>

            <Typography variant="h4">Pogoda w kolejnych dniach</Typography>

            {pogodaKrakow && (
                <div className="multi-day-forecast">
                    <tr>
                        
                        <td style={{ paddingRight: '70px' }}>
                            <Typography id="jutro" variant="h5" component="h2">
                                Pogoda jutro
                            </Typography>
                            <Typography>
                                Wschód słońca: <b>{pogodaKrakow.daily.sunrise[1].split('T')[1]}</b>
                                <div style={{ marginTop: '5px' }}></div>
                            </Typography>
                            <Typography>
                                Zachód słońca: <b>{pogodaKrakow.daily.sunset[1].split('T')[1]}</b>
                                <div style={{ marginTop: '5px' }}></div>
                            </Typography>
                            <Typography>
                                Temperatura maksymalna: <b>{pogodaKrakow.daily.temperature_2m_max[1]}°C</b>
                                <div style={{ marginTop: '5px' }}></div>
                            </Typography>
                            <Typography>
                                Temperatura minimalna: <b>{pogodaKrakow.daily.temperature_2m_min[1]}°C</b>
                                <div style={{ marginTop: '5px' }}></div>
                            </Typography>
                            <Typography>
                                Szansa opadów: <b>{pogodaKrakow.daily.precipitation_probability_max[1]}%</b>
                            </Typography>
                            <Button variant="contained" style={{ margin: '30px' }} component={Link} to="/jutro">
                                Więcej informacji
                            </Button>
                       </td>
                       <td style={{ paddingRight: '50px' }}>    
                            <Typography  id="pojutrze" variant="h5" component="h2">
                                Pogoda pojutrze
                            </Typography>
                            <Typography>
                                Wschód słońca: <b>{pogodaKrakow.daily.sunrise[2].split('T')[1]}</b>
                                <div style={{ marginTop: '5px' }}></div>
                            </Typography>
                            <Typography>
                                Zachód słońca: <b>{pogodaKrakow.daily.sunset[2].split('T')[1]}</b>
                                <div style={{ marginTop: '5px' }}></div>
                            </Typography>
                            <Typography>
                                Temperatura maksymalna: <b>{pogodaKrakow.daily.temperature_2m_max[2]}°C</b>
                                <div style={{ marginTop: '5px' }}></div>
                            </Typography>
                            <Typography>
                                Temperatura minimalna: <b>{pogodaKrakow.daily.temperature_2m_min[2]}°C</b>
                                <div style={{ marginTop: '5px' }}></div>
                            </Typography>
                            <Typography>
                                Szansa opadów: <b>{pogodaKrakow.daily.precipitation_probability_max[2]}%</b>
                                
                            </Typography>
                            <Button variant="contained" style={{ margin: '30px' }} component={Link} to="/pojutrze">
                                Więcej informacji
                            </Button>
                        </td>
                        <td style={{ paddingLeft: '50px' }}>
                            <Typography  id="popojutrze" variant="h5" component="h2">
                                Pogoda za 3 dni
                            </Typography>
                            <Typography>
                                Wschód słońca: <b>{pogodaKrakow.daily.sunrise[3].split('T')[1]}</b>
                                <div style={{ marginTop: '5px' }}></div>
                            </Typography>
                            <Typography>
                                Zachód słońca: <b>{pogodaKrakow.daily.sunset[3].split('T')[1]}</b>
                                <div style={{ marginTop: '5px' }}></div>
                            </Typography>
                            <Typography>
                                Temperatura maksymalna: <b>{pogodaKrakow.daily.temperature_2m_max[3]}°C</b>
                                <div style={{ marginTop: '5px' }}></div>
                            </Typography>
                            <Typography>
                                Temperatura minimalna: <b>{pogodaKrakow.daily.temperature_2m_min[3]}°C</b>
                                <div style={{ marginTop: '5px' }}></div>
                            </Typography>
                            <Typography>
                                Szansa opadów: <b>{pogodaKrakow.daily.precipitation_probability_max[3]}%</b>
                            
                            </Typography>
                            <Button variant="contained" style={{ margin: '30px' }} component={Link} to="/popojutrze">
                                Więcej informacji
                            </Button>
                        </td>
                    </tr>
                </div>
            )}
        </div>
    );
}

function DetailedForecast() {
    const { day } = useParams();
    const [pogodaKrakow, setPogodaKrakow] = useState(null);

    useEffect(() => {
        fetchWeatherData('Krakow', setPogodaKrakow);
    }, []);

    const fetchWeatherData = async (location, setData) => {
        try {
            const response = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=50.060567&longitude=19.937694&hourly=temperature_2m,precipitation_probability,precipitation,surface_pressure,cloudcover`
            );
            if (!response.ok) {
                throw new Error('Nie udało się pobrać danych pogodowych');
            }
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="content">
            <Typography variant="h4">Szczegółowa prognoza na {day}</Typography>
            <div style={{ marginTop: '20px' }}></div>
            {pogodaKrakow && day === 'dzis' && (
                <table>
                    <thead>
                    <tr>
                    <th className="column-header">Godzina</th>
                    <th className="column-header">Temperatura</th>
                    <th className="column-header">Opady</th>
                    <th className="column-header">Szansa opadów</th>
                    <th className="column-header">Zachmurzenie</th>
                    <th className="column-header">Ciśnienie</th>
                    </tr>
                    </thead>
                    <tbody>
                    {[...Array(24)].map((_, index) => (
                        <tr key={index}>
                            <td>{pogodaKrakow.hourly.time[index].split('T')[1]}</td>
                            <td>
                                <b>{pogodaKrakow.hourly.temperature_2m[index]}</b> °C
                            </td>
                            <td>
                                <b>{pogodaKrakow.hourly.precipitation[index]} </b> mm
                            </td>
                            <td>
                                <b>{pogodaKrakow.hourly.precipitation_probability[index]}</b> %
                            </td>
                            <td>
                                <b>{pogodaKrakow.hourly.cloudcover[index]}</b> %
                            </td>
                            <td>
                                <b>{pogodaKrakow.hourly.surface_pressure[index]}</b> hPa
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}

            {pogodaKrakow && day === 'jutro' && (
                <table className="forecast-table">
                    <thead>
                    <tr>
                    <th className="column-header">Godzina</th>
                    <th className="column-header">Temperatura</th>
                    <th className="column-header">Opady</th>
                    <th className="column-header">Szansa opadów</th>
                    <th className="column-header">Zachmurzenie</th>
                    <th className="column-header">Ciśnienie</th>
                    </tr>
                    </thead>
                    <tbody>
                    {[...Array(24)].map((_, index) => (
                        <tr key={index}>
                            <td>{pogodaKrakow.hourly.time[index + 24].split('T')[1]}</td>
                            <td>
                                <b>{pogodaKrakow.hourly.temperature_2m[index + 24]}</b> °C
                            </td>
                            <td>
                                <b>{pogodaKrakow.hourly.precipitation[index + 24]} </b> mm
                            </td>
                            <td>
                                <b>{pogodaKrakow.hourly.precipitation_probability[index + 24]}</b> %
                            </td>
                            <td>
                                <b>{pogodaKrakow.hourly.cloudcover[index + 24]}</b> %
                            </td>
                            <td>
                                <b>{pogodaKrakow.hourly.surface_pressure[index + 24]}</b> hPa
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}

            {pogodaKrakow && day === 'pojutrze' && (
                <table>
                    <thead>
                    <tr>
                    <th className="column-header">Godzina</th>
                    <th className="column-header">Temperatura</th>
                    <th className="column-header">Opady</th>
                    <th className="column-header">Szansa opadów</th>
                    <th className="column-header">Zachmurzenie</th>
                    <th className="column-header">Ciśnienie</th>
                    </tr>
                    </thead>
                    <tbody>
                    {[...Array(24)].map((_, index) => (
                        <tr key={index}>
                            <td>{pogodaKrakow.hourly.time[index + 48].split('T')[1]}</td>
                            <td>
                                <b>{pogodaKrakow.hourly.temperature_2m[index + 48]}</b> °C
                            </td>
                            <td>
                                <b>{pogodaKrakow.hourly.precipitation[index + 48]} </b> mm
                            </td>
                            <td>
                                <b>{pogodaKrakow.hourly.precipitation_probability[index + 48]}</b> %
                            </td>
                            <td>
                                <b>{pogodaKrakow.hourly.cloudcover[index + 48]}</b> %
                            </td>
                            <td>
                                <b>{pogodaKrakow.hourly.surface_pressure[index + 48]}</b> hPa
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}

            {pogodaKrakow && day === 'popojutrze' && (
                            <table>
                                <thead>
                                <tr>
                                <th className="column-header">Godzina</th>
                                <th className="column-header">Temperatura</th>
                                <th className="column-header">Opady</th>
                                <th className="column-header">Szansa opadów</th>
                                <th className="column-header">Zachmurzenie</th>
                                <th className="column-header">Ciśnienie</th>
                                </tr>
                                </thead>
                                <tbody>
                                {[...Array(24)].map((_, index) => (
                                    <tr key={index}>
                                        <td>{pogodaKrakow.hourly.time[index + 72].split('T')[1]}</td>
                                        <td>
                                            <b>{pogodaKrakow.hourly.temperature_2m[index + 72]}</b> °C
                                        </td>
                                        <td>
                                            <b>{pogodaKrakow.hourly.precipitation[index + 72]} </b> mm
                                        </td>
                                        <td>
                                            <b>{pogodaKrakow.hourly.precipitation_probability[index + 72]}</b> %
                                        </td>
                                        <td>
                                            <b>{pogodaKrakow.hourly.cloudcover[index + 72]}</b> %
                                        </td>
                                        <td>
                                            <b>{pogodaKrakow.hourly.surface_pressure[index + 72]}</b> hPa
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        )}
                        <div style={{ marginTop: '30px' }}></div>
            <Button variant="contained" component={Link} to="/">
                Powrót
            </Button>
        </div>
    );
}

export default App;