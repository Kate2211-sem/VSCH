import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
  Box,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const BookingModal = ({ open, onClose, onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    service: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    if (onSubmitSuccess) {
      onSubmitSuccess(`Спасибо, ${formData.name}! Ваша запись на услугу оформлена.`);
    }

    setFormData({ name: '', phone: '', date: '', service: '' });
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '20px',
          p: 1,
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <CalendarMonthIcon sx={{ color: '#e91e63' }} />
          <Typography variant="h6" fontWeight="bold">
            Онлайн-запись на процедуру
          </Typography>
        </Box>
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <form onSubmit={handleSubmit}>
        <DialogContent dividers sx={{ borderBottom: 'none' }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Заполните контактные данные, и наш администратор свяжется с вами для подтверждения записи.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            <TextField
              required
              fullWidth
              label="Ваше имя"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Анна"
            />

            <TextField
              required
              fullWidth
              label="Номер телефона"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+375 (29) 000-00-00"
            />

            <TextField
              fullWidth
              type="date"
              label=""
              name="date"
              value={formData.date}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              fullWidth
              label="Комментарий или желаемая услуга"
              name="service"
              value={formData.service}
              onChange={handleChange}
              multiline
              rows={2}
              placeholder="Стрижка, уход за волосами, консультация..."
            />
          </Box>
        </DialogContent>

        <DialogActions sx={{ p: 2, pt: 0 }}>
          <Button onClick={onClose} color="inherit" sx={{ borderRadius: '10px' }}>
            Отмена
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{
              bgcolor: '#e91e63',
              '&:hover': { bgcolor: '#c2185b' },
              borderRadius: '10px',
              px: 3,
            }}
          >
            Записаться
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};