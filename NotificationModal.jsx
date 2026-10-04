import React from 'react';
import {
  Dialog,
  DialogContent,
  Typography,
  Button,
  Box,
  Zoom,
} from '@mui/material';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

export const NotificationModal = ({ isOpen, message, onClose }) => {
  return (
    <Dialog
      open={Boolean(isOpen)}
      onClose={onClose}
      TransitionComponent={Zoom}
      keepMounted
      PaperProps={{
        sx: {
          borderRadius: '24px',
          padding: '12px',
          maxWidth: '360px',
          width: '90%',
          textAlign: 'center',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
          backgroundColor: '#ffffff',
        },
      }}
      BackdropProps={{
        sx: {
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(4px)',
        },
      }}
    >
      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          p: 2,
        }}
      >
        {/* Иконка успешного действия */}
        <Box
          sx={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            backgroundColor: 'rgba(233, 30, 99, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CheckCircleOutlinedIcon sx={{ fontSize: '2.5rem', color: '#e91e63' }} />
        </Box>

        {/* Текст сообщения */}
        <Typography
          variant="h6"
          component="p"
          sx={{
            fontWeight: 600,
            color: '#2d2d2d',
            fontSize: '1.1rem',
            lineHeight: 1.4,
          }}
        >
          {message}
        </Typography>

        {/* Кнопка действия */}
        <Button
          fullWidth
          variant="contained"
          onClick={onClose}
          sx={{
            mt: 1,
            background: 'linear-gradient(135deg, #ff4081 0%, #e91e63 100%)',
            color: '#fff',
            fontWeight: 600,
            textTransform: 'none',
            borderRadius: '16px',
            py: 1.2,
            boxShadow: '0 4px 14px rgba(233, 30, 99, 0.35)',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              background: 'linear-gradient(135deg, #e91e63 0%, #c2185b 100%)',
              boxShadow: '0 6px 20px rgba(233, 30, 99, 0.45)',
              transform: 'translateY(-1px)',
            },
          }}
        >
          Отлично
        </Button>
      </DialogContent>
    </Dialog>
  );
};