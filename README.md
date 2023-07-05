# News-Time

News-Time is a simple web application built using the React framework that fetches news articles using the Api provided by `News API` website and displays them under various categories. The application utilizes React Router for seamless navigation between different news categories. It also includes two types of loaders: a horizontal progress bar that appears when navigating between pages, and a circular loader for infinite scrolling on the page.

## Features

- Fetches news articles from the News API website
- Displays news articles under various categories
- Seamless navigation using React Router

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Shreeyash01/News-Time.git
   ```

2. Change into the project directory:

   ```bash
   cd News-Time
   ```

3. Install the dependencies using npm or yarn:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

4. Create a `.env` file in the root directory and add your News API key:

   ```bash
   REACT_APP_NEWS_API_KEY=your-api-key
   ```

   Replace `your-api-key` with your actual News API key.

5. Start the development server:

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

   The application will be running at [http://localhost:3000](http://localhost:3000).

## Usage

Once the application is running, you can access it in your web browser at [http://localhost:3000](http://localhost:3000). The homepage will display news articles from various categories. Click on a category to view news articles specific to that category. As you scroll down the page, more news articles will be loaded dynamically.

## Dependencies

The following dependencies are used in this project:

- [React](https://reactjs.org) - A JavaScript library for building user interfaces.
- [React Router](https://reactrouter.com) - A routing library for React applications.
- [News API](https://newsapi.org) - An API that provides news articles from various sources.

## Contributing

Contributions to News-Time are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request. Ensure that your changes are well-documented and thoroughly tested.

## License

This project is licensed under the [MIT License](LICENSE).

**Screenshots -**

![news-time](https://user-images.githubusercontent.com/103109932/227759022-e0ccdc33-7d7e-4871-912d-4bec9f1010aa.png)
