import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [url,setUrl] = useState("");
  const [downloadLink, setDownloadLink] = useState(null);
  const [err, setErr] = useState(null);

  const handleDownload = async()=>{
    try{
      const response = await axios.post("http://localhost:3001/api/download",{
        url:url,}
      );
      setDownloadLink(response.data.downloadLink);
      setErr(response.data.error);

    } catch (error) {
      console.error("Error fetching video link:", error);
      setErr("Something went wrong. Try again.");
    }
  };

  return (
    <div>

      <h1>Instagram Reel Downloader</h1>

      <div className="input-group mb-3">
        <input onChange={(event) => setUrl(event.target.value)} value={url} type="text" placeholder="Enter the video url to be downloaded username"  className="form-control" aria-label="Recipient’s username" aria-describedby="button-addon2"/>
        <button onClick={handleDownload} disabled={!url.trim()} type="button" className="btn btn-primary">Download</button>
      </div>

      {downloadLink && (<div>

        <video width= "320" height="240" controls>
          <source src={downloadLink} type="video/mp4" />
          Your browser does not support the video tag.
          </video>
        
        <h2>Right Click on the Video and Save it !!</h2>

        </div>)}
      
      {err && (<h2>{err}</h2>)}

    </div>
  )
};

export default App;
