## Weatherable

Weatherable is a React web application that allows users to search for the weather in any location in the world. Users can enter a city or place name in the search bar, and the app will display the current weather conditions in that location. The app also keeps a history of the user's search queries.

### Code Structure

The app is organized into several components, each of which handles a specific aspect of the app's functionality:

- **App.js**: the top-level component that contains all other components and renders them to the DOM.
- **Header.js**: a simple component that displays the Weatherable logo at the top of the page.
- **Hero.js**: a component that displays a hero image and text, inviting users to search for the weather in any location.
- **Search.js**: a component that provides the search bar and handles the user's input.
- **Grid.js**: a component that displays the user's search history and renders the search results.
- **Item.js**: a component that displays the weather information for a single location.
- **SearchContext.js**: a context component that provides state and functionality related to the user's search history.
- **useWeatherFetch.js**: a custom hook that fetches weather data from the OpenWeatherMap API.


### Limitations

- The app only displays the current weather conditions for a location and does not provide any forecast information.
- The app uses the OpenWeatherMap API to retrieve weather data, which has usage limits and may not always provide accurate or up-to-date information.
- The app does not support searching for locations by zip code or other identifiers, only by name.
