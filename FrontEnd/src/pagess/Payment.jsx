import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function PaymentForm() {
  const Navigate = useNavigate();
  const eventNavigate = () => {
    Navigate('/home');
  };

  return (
    <React.Fragment>
      <div
        style={{
          margin: 'auto',
          maxWidth: '600px',
          padding: '20px',
        }}
      >
        <Typography variant="h6" gutterBottom style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
          Payment method
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardName"
              label="Name on card"
              fullWidth
              autoComplete="cc-name"
              variant="standard"
              style={{ marginBottom: '20px' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardNumber"
              label="Card number"
              fullWidth
              autoComplete="cc-number"
              variant="standard"
              style={{ marginBottom: '20px' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="expDate"
              label="Expiry date"
              fullWidth
              autoComplete="cc-exp"
              variant="standard"
              style={{ marginBottom: '20px' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              label="CVV"
              helperText="Last three digits on signature strip"
              fullWidth
              autoComplete="cc-csc"
              variant="standard"
              style={{ marginBottom: '20px' }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveCard" value="yes" />}
              label="Remember credit card details for next time"
              style={{ marginBottom: '10px' }}
            />
          </Grid>
        </Grid>
        <Button onClick={eventNavigate} style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}>
          CheckOut
        </Button>
      </div>
    </React.Fragment>
  );
}
