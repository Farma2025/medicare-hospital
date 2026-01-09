export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  image: string;
  description?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Appointment {
  id: string;
  patientName: string;
  doctorId: string;
  date: string;
  time: string;
  service: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'doctor' | 'patient';
  phone?: string;
}

export interface Stats {
  doctors: string;
  patients: string;
  years: string;
}