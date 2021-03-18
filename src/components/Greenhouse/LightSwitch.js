import './LightSwitch.css';
import {useTheme} from '../../context/ThemeContext.js'

function LightSwitch() {
  const { themeName, setThemeName} = useTheme();
  const currTheme = themeName === 'day' ? 'day' : 'night';


  return (
    <div className={`light-switch ${currTheme}`}>
      <div className="on">DAY</div>
      <div className="off">NIGHT</div>
    </div>
  );
}

export default LightSwitch;
