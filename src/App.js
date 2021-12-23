import React, {useState, useEffect} from 'react';
import './App.css';


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
          obj.push({'name':data[i].name, 'link':data[i].web_pages[0]})
          
        }
        setDetails(obj)
      }
    )
    },[]
  )

  console.log(details)

  return (
    <div className="App">
      <h1 className='header'>Universities in India</h1>
      <div className='university_link'>

      {
        details.map(
          detail => {
            return (
              <div>
                <li className='list'>
                <a href={detail.link} target={"_blank"} rel={'noopener noreferrer'}>{detail.name}</a>
                </li>
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
