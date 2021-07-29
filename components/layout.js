
export default function Layout({ children }) {
  return (
    <>
      <h1>Nav</h1>
      <main>{children}</main>
      <h1>Foot</h1>
    </>
  )
}