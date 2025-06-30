import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [url,setUrl] = useState("");
  const [downloadLink, setDownloadLink] = useState(null);
  const [err, setErr] = useState(null);

  const handleGetReel = async()=>{
    try{
      const response = await axios.post("https://instagram-video-downloader-nho9.onrender.com/",{
        url:url,}
      );
      setDownloadLink(response.data.downloadLink);
      setErr(response.data.error);

    } catch (error) {
      console.error("Error fetching video link:", error);
      setErr("Something went wrong. Try again.");
    }
  };


  const handleSaveVideo = async () => {
  try {
    const response = await fetch(downloadLink);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'instagram-video.mp4';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  } catch (err) {
    console.error('Error downloading video:', err);
  }
};

  const nextDownload = () =>{
    setUrl("");
    setDownloadLink(null);
    setErr(null);
  };

  return (
    <div>

      <h1 className="title">Instagram Reel Downloader</h1>
      <h2 className="title-tag">Just Paste the URL and Download your Reel.</h2>

      <div className="input-group mb-3">
        <input onChange={(event) => setUrl(event.target.value)} value={url} type="text" placeholder="Paste Instagram Reel URL here"  className="form-control" aria-label="Recipient’s username" aria-describedby="button-addon2"/>
        <button onClick={handleGetReel} disabled={!url.trim()} type="button" className="btn btn-primary">Get Reel</button>
      </div>

      {downloadLink && (<div className="Save-Section">

        <video key={downloadLink} width= "50%" controls>
          <source src={downloadLink} type="video/mp4" />
          Your browser does not support the video tag.
          </video>

        <button onClick={() => {
                        handleSaveVideo();
                        setTimeout(()=>{
                          nextDownload();
                        },3000);
                          }} className="btn btn-success">Save Video</button>

        </div>)}
      
      {err && (<h2 className="Error_Display">{err}</h2>)}

    </div>
  )
};

export default App;
