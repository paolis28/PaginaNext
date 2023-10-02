import Head from 'next/head'; 

export const metadata = {
  title: 'Inicio - Burger King México',
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href='/favicon.ico'/>
      </Head>
      <body style={{background: '#f5ebdc'}}>
        {children}
      </body>
    </html>
  );
}

