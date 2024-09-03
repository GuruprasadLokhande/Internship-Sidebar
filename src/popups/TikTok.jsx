import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const TikTokImportDialog = () => {
  const [open, setOpen] = useState(true);
  const [username, setUsername] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <Box p={2}>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          Import from TikTok
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500]
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <TextField
            label="TikTok Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={handleUsernameChange}
          />
        </DialogContent>
        <DialogActions>
        <Box sx={{ width: '100%', textAlign: 'center' }}>
            
            <Box display="flex" justifyContent="center" gap={2}>
              <Button onClick={handleClose} color="secondary" variant="outlined">
                Cancel
              </Button>
              <Button variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </Box>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TikTokImportDialog;
