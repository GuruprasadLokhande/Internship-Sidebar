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

const InstagramImportDialog = () => {
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
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        sx={{
          '& .MuiDialog-paper': {
            border: '1px solid #d3d3d3', // Faint grey border
            borderRadius: '8px', // Rounded corners
          },
        }}
      >
        <DialogTitle>
          Import from Instagram
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <TextField
            label="Instagram Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={handleUsernameChange}
          />
        </DialogContent>
        <DialogActions>
          <Box sx={{ width: '100%', textAlign: 'center' }}>
            <Box
              sx={{
                mb: 2,
                p: 2,
                backgroundColor: '#f0f0f0', // Grey background
                borderRadius: '8px', // Rounded corners
              }}
            >
              <Typography variant="body2" sx={{ color: '#000' }}> 
                Note: We use a 3rd party app to fetch the reels from Instagram. This process usually takes around 1-2 minutes.
              </Typography>
            </Box>
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

export default InstagramImportDialog;
