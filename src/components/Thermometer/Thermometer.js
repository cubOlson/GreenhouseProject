import ReactSlider from "react-slider";
import './Thermometer.css';
import { useClimate } from '../../context/ClimateContext';
import { useEffect, useState } from 'react'
function Thermometer() {

  const { climateName, setClimateName } = useClimate();
  const [desiredTemp, setDesiredTemp]= useState(climateName)


  useEffect(() => {

    let timeout = setTimeout(function () {
      console.log('from desired temp')
      if(desiredTemp < climateName) {
        setDesiredTemp((prev)=> prev + 1)
      } else if(desiredTemp > climateName) {
        setDesiredTemp((prev) => prev - 1)
      }
    },1000)
      return () => {
        console.log('cleanup')
        clearTimeout(timeout)
    }
}, [desiredTemp, climateName])

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {desiredTemp}°F</div>
      <ReactSlider
        value={climateName}
        onAfterChange={(val)=> {setClimateName(val)}

        }
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;
