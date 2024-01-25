import { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext(null);

const ThemContextProvider = ({ children }) => {
	const [theme, setTheme] = useState("light");
	const html = document.documentElement;

	useEffect(() => {
		const currentTheme = localStorage.getItem("theme");
		html.classList.add(currentTheme);
		setTheme(currentTheme);
	}, [html.classList]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemContextProvider;
