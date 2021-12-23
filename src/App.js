import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/header';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function App() {

  const [details, setDetails] = useState([])

  useEffect(() => {
    fetch('data.json' ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    })
      .then(resp => {
        return resp.json()
      })
      .then(data => {
        let obj = [];
        for(let i=0; i < data.length; i++){
          obj.push({'name':data[i].name, 'link':data[i].web_pages[0], 'domain': data[i].domains[0]})
          
        }
        setDetails(obj)
      }
    )
    },[]
  )

  console.log(details)

  return (
    <div className="App">
      <Header/>
      <h1 className='header'>Universities in India</h1>
      <div className='university_link'>

      {
        details.map(
          detail => {
            return (
              <div>
              <Card className='card'>
              <CardActionArea>
                
              <CardContent>
                  <Typography className='individual_card' sx={{maxWidth: 720, width: 720, }} gutterBottom variant="h5" component="div">
                  <a href={detail.link} target={"_blank"} rel={'noopener noreferrer'}>{detail.name}</a>
                  </Typography>
                  
                </CardContent>
              </CardActionArea>
            </Card>
                
                
                
              </div>
            )
          
        }
        )
      }
      </div>
    </div>
  );
}

export default App;
