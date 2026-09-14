import { zodResolver } from '@hookform/resolvers/zod';
import SendIcon from '@mui/icons-material/Send';
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Grid,
  MenuItem,
  Stack,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { doctors } from '../../data/doctors';
import { specialities } from '../../data/specialities';
import {
  appointmentSchema,
  submitAppointment,
  type AppointmentInput,
  type AppointmentResult,
} from '../../services/appointmentService';

const defaults: AppointmentInput = {
  guardianName: '',
  childName: '',
  childAge: '',
  phone: '',
  email: '',
  doctor: '',
  speciality: '',
  preferredDate: '',
  preferredTime: '',
  reason: '',
  message: '',
};

export function AppointmentForm() {
  const [result, setResult] = useState<AppointmentResult | null>(null);
  const [error, setError] = useState('');
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentInput>({ resolver: zodResolver(appointmentSchema), defaultValues: defaults });

  async function onSubmit(values: AppointmentInput) {
    setError('');
    setResult(null);
    try {
      const response = await submitAppointment(values);
      setResult(response);
      reset(defaults);
    } catch {
      setError('We could not submit the request. Please call the hospital directly.');
    }
  }

  const field = (name: keyof AppointmentInput, label: string, props = {}) => (
    <Controller
      name={name}
      control={control}
      render={({ field: input }) => (
        <TextField
          {...input}
          {...props}
          label={label}
          fullWidth
          error={Boolean(errors[name])}
          helperText={errors[name]?.message}
        />
      )}
    />
  );

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>{field('guardianName', 'Parent / Guardian Name')}</Grid>
        <Grid item xs={12} md={6}>{field('childName', 'Patient / Child Name')}</Grid>
        <Grid item xs={12} sm={6} md={3}>{field('childAge', 'Child Age')}</Grid>
        <Grid item xs={12} sm={6} md={3}>{field('phone', 'Phone Number')}</Grid>
        <Grid item xs={12} md={6}>{field('email', 'Email')}</Grid>
        <Grid item xs={12} md={6}>
          {field('doctor', 'Doctor', { select: true, children: [
            <MenuItem key="any" value="">Any available doctor</MenuItem>,
            ...doctors.map((doctor) => <MenuItem key={doctor.slug} value={doctor.name}>{doctor.name}</MenuItem>),
          ] })}
        </Grid>
        <Grid item xs={12} md={6}>
          {field('speciality', 'Speciality', { select: true, children: specialities.map((item) => (
            <MenuItem key={item.slug} value={item.name}>{item.name}</MenuItem>
          )) })}
        </Grid>
        <Grid item xs={12} sm={6}>{field('preferredDate', 'Preferred Date', { type: 'date', InputLabelProps: { shrink: true } })}</Grid>
        <Grid item xs={12} sm={6}>{field('preferredTime', 'Preferred Time', { type: 'time', InputLabelProps: { shrink: true } })}</Grid>
        <Grid item xs={12}>{field('reason', 'Reason for Visit')}</Grid>
        <Grid item xs={12}>{field('message', 'Message', { multiline: true, rows: 4 })}</Grid>
      </Grid>
      <Stack spacing={2} sx={{ mt: 3 }}>
        {result && <Alert severity="success">Request received. Reference: {result.referenceId}</Alert>}
        {error && <Alert severity="error">{error}</Alert>}
        <Button type="submit" variant="contained" size="large" disabled={isSubmitting} startIcon={isSubmitting ? <CircularProgress size={18} color="inherit" /> : <SendIcon />}>
          {isSubmitting ? 'Submitting...' : 'Submit Appointment Request'}
        </Button>
      </Stack>
    </Box>
  );
}
