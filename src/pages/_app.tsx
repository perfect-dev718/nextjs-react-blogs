import { ApolloProvider } from '@apollo/react-hooks';
import { AuthProvider } from 'components/auth-provider';
import { Layout } from 'components/layouts';
import { LoadingBar } from 'components/loading-bar';
import { ThemeProvider } from 'emotion-theming';
import { initializeApollo } from 'lib/apollo-client';
import { AppContext } from 'lib/context';
import { ClientWrapper } from 'lib/wrapper';
import 'normalize.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { CookieBanner } from 'shared';
import 'swiper/swiper-bundle.min.css';
import { admiralTheme } from 'theme/admiral';
import '../assets/styles/custom.css';
import '../assets/styles/main.css';
import '../assets/styles/wp-content.css';

function App({ Component, pageProps }) {
  const apolloClient = initializeApollo();

  return (
    <ThemeProvider theme={admiralTheme}>
      <ApolloProvider client={apolloClient}>
        <AppContext>
          <ClientWrapper>
            <AuthProvider>
              <CookieBanner />
              <Layout>
                <LoadingBar />
                <Component {...pageProps} />
              </Layout>
            </AuthProvider>
          </ClientWrapper>
        </AppContext>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
