import axios from 'axios'

export async  function GET( requesr : Request){
   //0cd389f393mshd56506638eb8440p1ac181jsnb82accf375e6
   const options = {
     method: 'GET',
     url: 'https://instagram-downloader.p.rapidapi.com/index',
     params: {
       url: 'https://www.instagram.com/reel/C1CNy_bRLO2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
     },
     headers: {
       'X-RapidAPI-Key': '0cd389f393mshd56506638eb8440p1ac181jsnb82accf375e6',
       'X-RapidAPI-Host': 'instagram-downloader.p.rapidapi.com'
     }
   };
   
   try {
       const response = await axios.request(options);
       console.log(response.data);
       return Response.json(response.data);
   } catch (error) {
       console.error(error);
       return Response.json(error);
   }
}