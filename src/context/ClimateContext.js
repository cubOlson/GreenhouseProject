// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%
import { createContext, useContext, useState} from 'react';

export const ClimateContext = createContext();

export const useClimate = () => useContext(ClimateContext);

export default function ClimateProvider(props) {
    const [climateName, setClimateName] = useState(50);

    return (
        <ClimateContext.Provider
        value={{
            climateName,
            setClimateName
        }}>
            {props.children}
        </ClimateContext.Provider>
    )
}
