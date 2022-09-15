import React from "react";
import "./Home.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


function Home() {
  return (
    <div className="divMain">
      <div className="sectionOne">
        <div className="fullSize"></div>
        <div className="fullSize">
          <div className="rightSectionOne">
            <Typography variant="h1" gutterBottom>
              Bienvenido a
              <Box sx={{ fontWeight: 'bold', m: 1 }}>HappyCake</Box>
            </Typography>
            <Typography variant="h5" gutterBottom>
              El lugar de los pasteles felices
            </Typography>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
