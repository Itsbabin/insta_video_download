"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface responseType {
  caption: string;
  id: string;
  image_url: string;
  is_album: boolean;
  is_video: boolean;
  username: string;
  video_img?: string;
  video_url?: string;
  video_url_1?: string;
  video_url_2?: string;
}

export default function Video() {
  const [url, seturl] = useState("");
  const [display, setDisplay] = useState("none");
  const [response, setResponse] = useState<responseType>();
  const [isDownlodable, setIsDownlodable] = useState(false)


  // const getData = async () => {
  //   const options = {
  //     method: "GET",
  //     url: "https://instagram-downloader.p.rapidapi.com/index",
  //     params: {
  //       url: url,
  //     },
  //     headers: {
  //       "X-RapidAPI-Key": "0cd389f393mshd56506638eb8440p1ac181jsnb82accf375e6",
  //       "X-RapidAPI-Host": "instagram-downloader.p.rapidapi.com",
  //     },
  //   };

  //   try {
  //     const response = await axios.request(options);
  //     console.error(response);
  //     setResponse(response.data.result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const result = {
    caption:
      "Day 25/75 🫂 Collecting HipHop fans(2549/3000)\nKR$NA verse on a drill beat >>>\n.\n.\n.\n#fyp #fypシ #fypppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp #fy #fypage #viralvideos #viral #trendingreels #trending #trendingsongs #divine #gullygang #gullyganglive #hiphop #rap #instagram #instagood #pune #india #75hard",
    id: "63497567663",
    image_url:
      "https://scontent.cdninstagram.com/v/t51.2885-15/414724273_383844404181367_6844177166470299902_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMTcweDIwNzguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=Wu1H-PUAYPkAX-EB8GA&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3MTQ4Mzc2MjMxMzE5MzI3MQ%3D%3D.2-ccb7-5&oh=00_AfCxUOvn6PuVQl90eLZW8RFkMlj7f1TP_qhSqtT_LRJ--A&oe=659DB08A&_nc_sid=10d13b",
    is_album: false,
    is_video: true,
    username: "gig.glimpses",
    video_img:
      "https://scontent.cdninstagram.com/v/t51.2885-15/414724273_383844404181367_6844177166470299902_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMTcweDIwNzguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=Wu1H-PUAYPkAX-EB8GA&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3MTQ4Mzc2MjMxMzE5MzI3MQ%3D%3D.2-ccb7-5&oh=00_AfCxUOvn6PuVQl90eLZW8RFkMlj7f1TP_qhSqtT_LRJ--A&oe=659DB08A&_nc_sid=10d13b",
    video_url:
      "https://scontent.cdninstagram.com/v/t50.2886-16/414713015_1317188608846462_7983224886790031903_n.mp4?_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=a7cVndCio5kAX_8jNYf&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfCKgVvJztOShzlmbEPenkShbp4ufMHwJh--YKASWc8lWQ&oe=6599CD1D&_nc_sid=10d13b",
    video_url_1:
      "https://scontent.cdninstagram.com/v/t50.2886-16/414713015_1317188608846462_7983224886790031903_n.mp4?_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=a7cVndCio5kAX_8jNYf&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfCKgVvJztOShzlmbEPenkShbp4ufMHwJh--YKASWc8lWQ&oe=6599CD1D&_nc_sid=10d13b",
    video_url_2:
      "https://scontent.cdninstagram.com/v/t50.2886-16/414713015_1317188608846462_7983224886790031903_n.mp4?_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=a7cVndCio5kAX_8jNYf&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfCKgVvJztOShzlmbEPenkShbp4ufMHwJh--YKASWc8lWQ&oe=6599CD1D&_nc_sid=10d13b",
  };
  

  const handlePasteClick = async () => {
    const text = await navigator.clipboard.readText()
    seturl(text)
      setDisplay("block")
  };

  useEffect(() => {
    setResponse(result);
  }, []);

  return (
    <>
      <div id="video_container">
        <h1>Download Your Instagram Video</h1>
        <div id="input_container">
          <input
            type="text"
            id="video_url"
            placeholder="pate your link"
            value={url}
            onChange={(e) => {
              seturl(e.target.value);
              if (e.target.value.length == 0) {
                setDisplay("none");
              }
              else{
                setDisplay("block")
              }
            }}
          />
          <button onClick={handlePasteClick}>Paste</button>
          <button style={{display : display}} onClick={() => {
            setIsDownlodable(true)
          }}>Download</button>
        </div>
        {
          (!isDownlodable)? <div></div> : <div className="download_information">
          <div id="image"></div>
          <a href={`${response?.video_url_1}`} download>
            download
          </a>
        </div>
        }
        
      </div>
    </>
  );
}

