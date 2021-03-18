import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import { useTheme } from '../../context/ThemeContext.js';

import './Greenhouse.css';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {

  const { themeName, setThemeName } = useTheme();
  const currTheme = themeName === 'day' ? dayImage : nightImage;

  return (
    <section>
      <img className='greenhouse-img' src={currTheme} alt='greenhouse' />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
