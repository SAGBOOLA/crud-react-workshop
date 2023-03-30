import ReactDOM from 'react-dom/client';
import DemoRouter from './DemoRouter';
import 'bootstrap/dist/css/bootstrap.css'



const greetingMessage = <div>Welcome to my React Workshop2</div>;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DemoRouter />);