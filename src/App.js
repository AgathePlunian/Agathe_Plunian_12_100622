import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from "react";



function App() {
  const baseURL = "http://localhost:3000/user/12/performance";

    const [post, setPost] = React.useState(null);
  
    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setPost(response.data);
      });
    }, []);
  
    if (!post) return null;
  
    return (
      post
    );
  }


export default App;
