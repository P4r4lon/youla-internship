import Timer from "./components/Timer";
import Box from '@mui/material/Box';
function App() {


  return (
    <div>
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
        >
            <Timer/>
        </Box>
    </div>
  );

}

export default App;
