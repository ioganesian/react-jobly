import { useState, useEffect } from "react";

/** Custom hook to get and store data in local storage
 *
 * Props:
 *  key = a string ("tokenKey")
 *
 * State: assigns value to corresponding key
 * value = "asd23nk3223sdf23f"
 *
 * Currently being used for tokens
 *
 * Template came from here for reference:
 * https://upmostly.com/tutorials/how-to-add-local-storage-to-your-react-apps
 */

function useLocalStorage(key) {

  const startingValue = localStorage.getItem(key);

  const [value, setValue] = useState(startingValue);

  useEffect(function setKeyInLocalStorage() {

    localStorage.setItem(key, value);

  }, [key, value]);

  return [value, setValue];
};



export default useLocalStorage;







