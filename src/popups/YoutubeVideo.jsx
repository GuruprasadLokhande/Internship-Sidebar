
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
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const YoutubeShort = () => {
  const [open, setOpen] = useState(true);
  const [title, setTitle] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <Box p={2}>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          Add Short Video
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
            label="Short Video Title"
            variant="outlined"
            fullWidth
            margin="normal"
            value={title}
            onChange={handleTitleChange}
          />
          <Box
            sx={{
              mt: 2,
              mb: 2,
              border: '2px dashed grey',
              borderRadius: '4px',
              height: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              backgroundColor: '#f8f8f8'
            }}
          >
            <AddAPhotoIcon sx={{ fontSize: 50, color: '#BDBDBD' }} />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            Cancel
          </Button>
          <Button variant="contained" color="primary">
            Select Products
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default YoutubeShort;