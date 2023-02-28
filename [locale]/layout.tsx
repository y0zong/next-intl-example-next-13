import {useLocale} from 'next-intl';
import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

export default async function LocaleLayout({children}: Props) {
  const locale = useLocale();
  return (
    <html lang={locale}>
      <head>
        <title>next-intl-example-next-13</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </head>
      <body>{children}</body>
    </html>
  );
}
