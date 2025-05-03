import { FacebookLogo, InstagramLogo, LinkedinLogo, Moon } from "phosphor-react"
import Button from "./components/Button"

function App() {
  return (
    <div className="w-full h-screen bg-white">
      <header className="bg-white flex justify-end p-4">
        <button className="cursor-pointer">
          <Moon size={16} />
        </button>
      </header>
      <main className="w-full h-full flex justify-center items-center">
        <section className="border border-gray-400 bg-white p-6 rounded-lg w-fit flex flex-col justify-center items-center gap-4">
          <img className="w-32 h-32 rounded-full border-4 border-gray-300" src="https://github.com/gabrielangelo0.png" alt="Foto de perfil do usuário" />

          <h1 className="font-bold text-2xl">Gabriel Angelo</h1>

{/* Web Developer */}
          <p className="text-slate-500">Desenvolvedor Full Stack</p>

          {/* Seção de Links */}
          <div className="space-y-4">
            <Button>
              <InstagramLogo size={24} />
              <p>Instagram</p>
            </Button>

            <Button>
              <LinkedinLogo size={24} />
              <p>Linkedin</p>
            </Button>

            <Button>
              <FacebookLogo size={24} />
              <p>Facebook</p>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
