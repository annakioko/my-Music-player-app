import React, { useState, useEffect} from 'react'

export default function DarkMode() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('prefers-color-scheme: dark)').matches) {
      setTheme("dark");
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);  

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };


  return (
      <div className='bg-white dark:bg-black h-screen'>
          <button className='bg-slate-300 p-2 rounded-2xl' onClick={handleThemeSwitch}>Dark Mode  
          </button>
    </div>
  )
}
