import { useState } from 'react';
import './App.css';
import Main from './component/Main';

import Bar from './component/Bar';
function App() {
  
  const [content, setcontent] = useState("Sweets")
  return (
    <>
    <Bar content={content} setcontent={setcontent} />
<Main content = {content}/>
    </>
    
  );
}

export default App;
