import localFont from 'next/font/local';

export const ppNeueMontreal = localFont({
  src: [
    {
      path: '../../public/fonts/UntitledSans/PPNeue/ppneuemontreal-thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/UntitledSans/PPNeue/ppneuemontreal-book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/UntitledSans/PPNeue/ppneuemontreal-medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/UntitledSans/PPNeue/ppneuemontreal-bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-ppneue',
});
