import "@/styles/globals.css";
import Head from "next/head";
import { ErrorBoundary } from 'react-error-boundary';
import { FavoritesProvider } from '../context/FavoritesContext';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <FavoritesProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Head>
          <title>Food-pickup</title>
          <meta name="description" content="YOUR SITE DESCRIPTION HERE" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </ErrorBoundary>
    </FavoritesProvider>
  );
}
