import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavbarComponent, HomeScreen } from './constants/path'

type Props = {}

export default function App({ }: Props) {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>

  )
}