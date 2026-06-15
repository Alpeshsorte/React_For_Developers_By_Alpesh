import Data from './Data'
import Cart from './Cart'

export default function Item() {
  return (
    <div style={{display:"grid", gridTemplateColumns:'repeat(3,1fr)'}}>
      <Data />
      <Cart/>
    </div>
  )
}