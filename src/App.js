import TopButtons from "./component/TopButtons";
import Inputs from "./component/Inputs";
import TimeandLocation from "./component/TimeandLocation";
import TempDetails from "./component/TempDetails";
import Forecast from "./component/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [query,setQuery] = useState({ q:"toronto"})
  const [units,setUnits] = useState("metric")
  const [weather,setWeather]= useState(null)

  useEffect(()=>{
      const fetchWeather=async ()=>{
        const message= query.q ? query.q : "current location."
        toast.info("Fetching weather for"+ message)
        await getFormattedWeatherData({...query,units}).then(
        data=>{
          toast.success(`Succesfully fetched weather for ${data.name}, ${data.country}.` )
          setWeather(data)
        }
      );
    }
    fetchWeather()
  },[query,units])

  const formatBackground=()=>{
    if(!weather) return "from-cyan-700 to-blue-700";
    const threshold = units ==="metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";
    return "from-yellow-700 to-orange-700"
  }

  return (
    <>
    <div className="flex flex-col justify-center items-center h-screen" >
      <div className={` max-w-screen-lg  py-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <TopButtons setQuery={setQuery}/>
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>

      {weather && (
        <>
          <TimeandLocation weather={weather}/>
          <TempDetails weather={weather} units={units}/>
        </>
      )}
    </div>
    </div>
    <ToastContainer autoClose={2000} theme="colored"  newestOnTop={true}/>
    </>
  );
}

export default App;
