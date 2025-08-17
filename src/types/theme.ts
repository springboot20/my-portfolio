export interface ThemeContextInterface {
  activeMode: boolean;
  theme: string;
  activateTheme: (theme: string) => void;
  setTheme: React.Dispatch<React.SetStateAction<string | null>>;
}