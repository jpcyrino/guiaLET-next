import Header from './header';
import Footer from './footer';
import Nav from './nav';

export default function Layout({ children }) {
  return (
    <>
      <Header/>
      <Nav/>
      <main>{children}</main>
      <Footer />
    </>
  )
}