import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import axios from "axios";
import API_KEY from "./Components/Key";
import NavContents from "./Components/NavContents/NavContents";

function App() {
  const [category, setCategory] = useState("Health");
  const [newResults, setNewResults] = useState();
  const [newsArray, setNewsArray] = useState([]);
  const [loadMore, setLoadMore] = useState(5);
  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}&category=${category}&pageSize=${loadMore}`
      );
      console.log(news);
      setNewsArray(news.data.articles);
      setNewResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
  }, [category, loadMore, newResults]);
  return (
    <div className="App">
      <Nav setCategory={setCategory} />
      <NavContents
        newsArray={newsArray}
        newResults={newResults}
        loadMore={loadMore}
        setLoadMore={setLoadMore}
      />
    </div>
  );
}

export default App;
