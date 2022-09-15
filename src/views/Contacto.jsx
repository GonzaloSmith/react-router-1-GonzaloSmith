import React from "react";
import "./Contacto.css";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

function Contacto() {
  const label1 = "Nombre";
  const label2 = "E-mail";
  return (
    <div className="divMain">
      <div className="section">
        <div className="divText">
          <Typography className="textBold titleContact" variant="h2" gutterBottom>
            Cuentanos ¿En que te podemos ayudar?
          </Typography>
        </div>
        <div className="divForm">
          <div className="divContactName">
            <TextField
              className="inputContact textWhite"
              label={
                <Typography className="textWhite" variant="h6" gutterBottom>
                  {label1}
                </Typography>
              }
              variant="outlined"
            />
            <TextField
              className="inputContact textWhite"
              label={
                <Typography className="textWhite" variant="h6" gutterBottom>
                  {label2}
                </Typography>
              }
              variant="outlined"
            />
            <Button variant="contained">Enviar datos</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
