import React, { createContext, useCallback, useEffect, useRef, useState } from "react";
import { ThemeContextInterface } from "../types";

export const ThemeContext = createContext<ThemeContextInterface>({} as ThemeContextInterface);

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<string | null>(localStorage.getItem("theme"));
  const systemListenersRef = useRef<Array<() => void>>([]);
  const dark = "dark";
  const light = "light";

  const defaultTheme = light;
  const [activeMode, setActiveMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme === theme;

    return window.matchMedia(`prefers-color-scheme:${dark}`).matches;
  });
  const documentEle = window.document.documentElement;

  const activateTheme = useCallback(
    (theme: string) => {
      documentEle.classList.remove(dark, light);
      documentEle.classList.add(theme);

      setActiveMode(theme === dark);
      if (theme !== null) localStorage.setItem("theme", theme);
    },
    [dark, documentEle.classList, light]
  );

  const clearSystemListeners = useCallback(() => {
    systemListenersRef.current.forEach((cleanup) => cleanup());
    systemListenersRef.current = [];
  }, []);

  const setupSystemListeners = useCallback(() => {
    const darkMatcher = window.matchMedia(`prefers-color-scheme:${dark}`);
    const lightMatcher = window.matchMedia(`prefers-color-scheme:${light}`);

    const handleDarkChange = (event: MediaQueryListEvent) => {
      if (event.matches && theme === null) {
        activateTheme(dark);
      }
    };

    const handleLightChange = (event: MediaQueryListEvent) => {
      if (event.matches && theme === null) {
        activateTheme(light);
      }
    };

    darkMatcher.addEventListener("change", handleDarkChange);
    lightMatcher.addEventListener("change", handleLightChange);

    systemListenersRef.current.push(
      () => darkMatcher.removeEventListener("change", handleDarkChange),
      () => lightMatcher.removeEventListener("change", handleDarkChange)
    );
  }, [activateTheme, dark, light, theme]);

  useEffect(() => {
    clearSystemListeners();

    if (theme === dark) activateTheme(dark);
    else if (theme === light) activateTheme(light);
    else if (theme === null) {
      const prefersDark = window.matchMedia(`prefers-color-scheme:${dark}`).matches;
      const prefersLight = window.matchMedia(`prefers-color-scheme:${light}`).matches;

      if (prefersDark) {
        activateTheme(dark);
      } else if (prefersLight) {
        activateTheme(light);
      } else {
        activateTheme(defaultTheme);
      }

      setupSystemListeners();
    }

    return clearSystemListeners;
  }, [activateTheme, light, defaultTheme, dark, theme, clearSystemListeners, setupSystemListeners]);

  const handleSetTheme = useCallback(
    (newTheme: string | null) => {
      setTheme(newTheme);

      if (newTheme === null) {
        localStorage.removeItem("theme");
      } else {
        localStorage.setItem("theme", newTheme);
        clearSystemListeners();
      }
    },
    [clearSystemListeners]
  );

  return (
    <ThemeContext.Provider
      value={{ setTheme, theme: theme || "dark", activateTheme: handleSetTheme, activeMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
