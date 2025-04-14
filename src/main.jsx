import { createRoot } from 'react-dom/client';
import App from './App.jsx';

//createRoot(document.getElementById('root')).render(<App/>);
// import App from './App.jsx';
import LoginPage from './Login_SignUp/components/LoginPage';

createRoot(document.getElementById('root')).render(<LoginPage/>);

