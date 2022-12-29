import './container.css'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import ReactLoading from 'react-loading';



export default function Container(){

   
    
    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [loading,setLoading] = useState(false);
  
    const handleChange = (event) => {
      setUrl(event.target.value);
    }
  
    const handleSubmit = (event) => {

      event.preventDefault();
      
      if(url === ''){
        toast.error('enter a valid url');
        return;
      }

      setShortUrl('');
      setLoading(true);
      axios.post('/getshorturl',{
        'longurl' : url 
      }).then((res) => {

        setLoading(false);
        
        console.log(res.data);
  
        setShortUrl(res.data.shorturl)
  
  
      }).catch((err) => {
        setLoading(false);
        toast.error('Error, something went wrong')
        console.log(err.message);
      });
  
  
    }
  


    return (
       
        <div className="container">
		<h1>URL Shortener</h1>
		<form onSubmit={handleSubmit}>
			<label for="long-url">Enter long URL:</label>
            <br/>
			<input type="text" value={url} onChange={handleChange} placeholder="https://www.example.com"/>
			<br/>
			<input type="submit" value="Shorten URL"/>
		</form> 
		<br/>
        {
          loading && <ReactLoading className='loading' type='bars' color='#4CAF50' height='10%' width='10%' />
        }
        {
        shortUrl &&
		<div class="short-url">
			<p>Short URL: <a href={shortUrl}>{shortUrl}</a></p>
            <button class="copy-btn" onClick={() => {
                navigator.clipboard.writeText(shortUrl);
                toast.success('copied to clip board');
            }}>Copy</button>
		</div>
        }
	   </div>

    )
}