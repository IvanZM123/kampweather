<p align="center">
  <a href="https://kampweather.web.app" target="__blank">
    <img src="https://res.cloudinary.com/dlkfpx8lb/image/upload/v1609967502/App_banners/kampweather_vnsrti.png" width="100%">
   </a>
</p>

# Kampweather
Kampweather is a weather app. It is developed in [Vue](https://vuejs.org) and the resources obtained come from [OpenWeather](https://openweathermap.org). Also use the [Geolocation](https://developer.mozilla.org/es/docs/WebAPI/Using_geolocation) to obtain the current climate of my location. If you want to know how it works, click here: [Kampweather](https://kampweather.web.app) or on the image.

## Cloning the project.
To get the source code of the app on your computer, run the following command: `git clone https://github.com/IvanZM123/kampweather.git`
it is worth mentioning that you need to have [Git](https://git-scm.com)

## Prerequisites
1. You need to have `Node.js` installed, visit this page to install it on your computer: https://nodejs.org/es/
2. You need to have `Vue.js` installed, visit this page to install it on your computer: https://vuejs.org
3. To use the `OpenWeather` services you need to create an account and then an API_KEY to consume the resources,
visit this page for more information: https://openweathermap.org
4. Enter the `.env.example` files and copy all the environment variables, then create a `.env` 
file and paste the previously copied variables, now add the `OpenWeather` API_KEY

## Development server
At this section, run the following commands:
1. `npm i` This command will download all the necessary packages to run the app, and will create a `node_modules` folder for it, this is a sign that it has been downloaded successfully.
2. `npm run serve` This command would create a development server.
3. `npm run build` This command should be executed when you have finished your app, and it will create a `dist` folder for you.
