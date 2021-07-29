import Header from './header';
import Nav from './nav';

export default function Layout({ children }) {
  return (
    <>
      <Header/>
      <Nav/>
      <main>{children}</main>
      <h1>Foot</h1>
    </>
  )
}