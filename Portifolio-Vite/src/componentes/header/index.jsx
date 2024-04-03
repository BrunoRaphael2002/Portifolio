import Navegacao from "../navegacao"
import './index.css'

export default function Header() {
  return (
    <>
     <div className="sticky">
        <header>
        <Navegacao/>
        </header>
      </div>
    </>
  )
}
