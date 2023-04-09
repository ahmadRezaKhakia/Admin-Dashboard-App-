import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {ColorModeContext , useMode} from './Theme'
import { CssBaseline,ThemeProvider } from '@mui/material';
import TopBar from './scenes/global/TopBar';
import Dashboard from './scenes/dashboard';
import Sidebar from './scenes/global/Sidebar';
import Team from './scenes/team';
import Invoices from './scenes/invoices';
import Contacts from './scenes/contacts';
import Form from './scenes/form';
import Calendar from './scenes/calendar';
// import Bar from './scenes/bar';
// import Line from './scenes/line';
// import Pie from './scenes/pie';
// import FAQ from './scenes/faq';
// import Geography from './scenes/geography';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app" style={{display:'flex'}}>
          <Sidebar/>
            <main className='content'>
              <TopBar />
                <Routes>
                  <Route path='/' element={<Dashboard/>} />
                  <Route path='/team' element={<Team/>} />
                  <Route path='/invoices' element={<Invoices/>} />
                  <Route path='/contacts' element={<Contacts/>} />
                  <Route path='/form' element={<Form/>} />
                  <Route path='/calendar' element={<Calendar/>} /> 
              {
                  /* 
                  <Route path='/bar' element={<Bar/>} />
                  <Route path='/pie' element={<Pie/>} />
                  <Route path='/line' element={<Line/>} />
                  <Route path='/faq' element={<FAQ/>} />
                  <Route path='/geography' element={<Geography/>} />
                  <Route path='/faq' element={<FAQ/>} />
                
                */}
                </Routes>
            </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
      
  )
}

export default App;
