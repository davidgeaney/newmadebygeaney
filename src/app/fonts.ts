import localFont from 'next/font/local';

export const ppNeueMontreal = localFont({
  src: [
    {
      path: '../../public/fonts/PPNeueMontreal/ppneuemontreal-thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPNeueMontreal/ppneuemontreal-book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPNeueMontreal/ppneuemontreal-medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPNeueMontreal/ppneuemontreal-bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-ppneue',
});

export const untitledSans = localFont({
  src: [
    {
      path: '../../public/fonts/Untitled-Sans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-untitled-sans',
});
