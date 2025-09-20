 // src/App.jsx
import { useState, useEffect } from 'react'; // Import hooks
import './App.css';
import FileExplorer from './components/FileExplorer';
import CodeEditor from './components/CodeEditor';
import Terminal from './components/Terminal';

function App() {
   const [message, setMessage] = useState(''); // State to store the message

   // useEffect runs once after the component mounts
   useEffect(() => {
     // Fetch data from our backend API
     fetch('/api/hello')
       .then((res) => res.json())
       .then((data) => setMessage(data.message));
   }, []); // The empty array means this effect runs only once

   return (
     <div className="app-container">
       <div className="main-layout">
         <FileExplorer />
         <div className="main-content">
           <CodeEditor />
           <Terminal />
         </div>
       </div>
       {/* Display the message from the server */}
       <div style={{ position: 'absolute', top: 10, right: 10, color: 'lightgreen' }}>
         {message}
       </div>
     </div>
   );
 }

 export default App;