import './App.css'
import Button from '@mui/material/Button';
import RatingDemo from './RatingDemo';
import FormDemo from './FormDemo';

function App() {

  return (
    <div>
      <Button variant="contained" color='error'>Contained</Button>
      <Button variant="contained" color='secondary'>Contained</Button>
      <Button variant="text" color='success'>Text</Button>
      <Button variant="outlined" size='large'>Outlined</Button>
      <RatingDemo />
      <FormDemo />
    </div>
  )
}

export default App
