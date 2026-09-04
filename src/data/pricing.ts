export type ServiceCategory = 'ac' | 'pool' | 'solar' | 'mep';

export interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
  unitLabel: string;
  minUnit: number;
  maxUnit: number;
}

export const pricingData: Record<ServiceCategory, ServiceOption[]> = {
  ac: [
    { id: 'ac-cuci', name: 'Cuci AC (Maintenance Rutin)', basePrice: 75000, unitLabel: 'Unit', minUnit: 1, maxUnit: 20 },
    { id: 'ac-freon', name: 'Isi/Tambah Freon', basePrice: 150000, unitLabel: 'Unit', minUnit: 1, maxUnit: 10 },
    { id: 'ac-repair', name: 'Perbaikan Kerusakan', basePrice: 250000, unitLabel: 'Unit', minUnit: 1, maxUnit: 5 },
  ],
  pool: [
    { id: 'pool-routine', name: 'Perawatan Rutin (Bulanan)', basePrice: 500000, unitLabel: 'Bulan', minUnit: 1, maxUnit: 12 },
    { id: 'pool-deep', name: 'Deep Clean / Kuras', basePrice: 800000, unitLabel: 'Kali', minUnit: 1, maxUnit: 3 },
    { id: 'pool-pump', name: 'Servis Pompa/Filter', basePrice: 350000, unitLabel: 'Unit', minUnit: 1, maxUnit: 5 },
  ],
  solar: [
    { id: 'solar-clean', name: 'Pembersihan Modul', basePrice: 15000, unitLabel: 'Panel', minUnit: 4, maxUnit: 100 },
    { id: 'solar-check', name: 'Cek Inverter & Output', basePrice: 300000, unitLabel: 'Sistem', minUnit: 1, maxUnit: 3 },
  ],
  mep: [
    { id: 'mep-electrical', name: 'Instalasi Listrik / Wiring', basePrice: 50000, unitLabel: 'Titik', minUnit: 1, maxUnit: 50 },
    { id: 'mep-plumbing', name: 'Pipa Air / Plumbing', basePrice: 45000, unitLabel: 'Meter', minUnit: 1, maxUnit: 100 },
    { id: 'mep-general', name: 'General Maintenance', basePrice: 150000, unitLabel: 'Jam', minUnit: 1, maxUnit: 24 },
  ],
};

export const serviceNames: Record<ServiceCategory, string> = {
  ac: 'AC Maintenance',
  pool: 'Kolam Renang',
  solar: 'Solar Panel',
  mep: 'MEP / Engineering',
};
