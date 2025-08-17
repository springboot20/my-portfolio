import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../../hooks/useTheme";
import { classNames } from "../../utils";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export const ThemeSwitch: React.FC = () => {
  const { activeMode, setTheme } = useTheme();

  console.log(activeMode);

  const toggleTheme = () => {
    if (activeMode) {
      setTheme("light");
    } else {
      setTheme("dark");
    }

    console.log("clicked");
  };

  return (
    <button onClick={toggleTheme} className="flex items-center justify-center">
      {activeMode ? (
        <FontAwesomeIcon
          icon={faSun}
          className={classNames("h-7 w-7 transition-colors duration-200 text-yellow-500")}
        />
      ) : (
        <FontAwesomeIcon
          icon={faMoon}
          className={classNames(
            "h-7 w-7 transition-colors duration-200 text-blue-400"
          )}
        />
      )}
    </button>
  );
};
