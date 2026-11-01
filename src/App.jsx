import axios from "axios";
import { useEffect } from "react";

function App() {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2RmZjAwYTljMmIyMTMzMjI3MzU3ZTQ1NWNkMTkzMSIsIm5iZiI6MTY2MjcyNDAzOS44MjIsInN1YiI6IjYzMWIyN2M3NjJmMzM1MDA4MzUzNjcyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u_R84FhGEzqMxc2nKvQCrssk_8aUz1odkx34Eeg5Okk";

  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated",
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          },
        );
        console.log(data.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <div className="App">
      <h1>THis is project</h1>
    </div>
  );
}

export default App;
