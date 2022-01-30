import HomeScreen from "./HomeScreen";
import MoviesScreen from "./MoviesScreen";
import TVSeriesScreen from "./TVSeriesScreen";
import SettingsScreen from "./SettingsScreen";

export const screens = [
    {
      name: "Home",
      component: HomeScreen,
      icon: 'home',
      title: 'Начало', 
    },
    {
      name: "Movies",
      component: MoviesScreen,
      icon: 'movie',
      title: 'Филми', 
    },
    {
      name: "TVSeries",
      component: TVSeriesScreen,
      icon: 'live-tv',
      title: 'Сериали', 
    },
    {
      name: "Settings",
      component: SettingsScreen,
      icon: 'settings',
      title: 'Настройки', 
    },
  ]