import { Metadata } from 'next';
import InfoPageClient from './InfoPageClient';

export const metadata: Metadata = {
  title: 'Info | Made By Geaney',
  description: 'Learn more about our studio and team',
};

export default function InfoPage() {
  return <InfoPageClient />;
}
