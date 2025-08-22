import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-6">
            <Image src="/images/citha-logo.jpeg" alt="CITHA Logo" width={50} height={50} className="rounded-md" />
            <Image src="/images/ifam-logo.png" alt="IFAM Logo" width={50} height={50} />
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#cursos" className="text-sm font-medium hover:underline">
              Cursos
            </Link>
            <Link href="#inscricao" className="text-sm font-medium hover:underline">
              Inscrição
            </Link>
            <Link href="#local" className="text-sm font-medium hover:underline">
              Local
            </Link>
          </nav>
          <div>
            <Button asChild className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfIYCNt1K3o2yiaxvw3KjivwxpQACNNzJo0SRwUF_7ze9g_OA/viewform"
                target="_blank"
              >
                Inscreva-se
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0f172a] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Capacitação e Interiorização de Tecnologias Habilitadoras na Amazônia
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Aprenda Tecnologias Habilitadoras com o projeto CITHA.
              </p>
            </div>
            <div>
              <Button asChild size="lg" className="bg-[#22c55e] hover:bg-[#22c55e]/90 text-white">
                <Link href="#cursos">Ver Cursos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="cursos" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0f172a]">
                Nossos Cursos
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Conheça os cursos gratuitos oferecidos pelo projeto CITHA
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {/* Card 4 - Internet das Coisas (IoT) */}
              <Card className="w-full max-w-md mx-auto cursor-pointer hover:shadow-lg transition-shadow group">
                <CardHeader className="bg-[#0ea5e9] text-white rounded-t-lg">
                  <CardTitle>Internet das Coisas (IoT)</CardTitle>
                  <CardDescription className="text-gray-100">Conceitos e aplicações práticas</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-[#1e3a8a]" />
                      <span>25/08 a 23/09/2025</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-[#1e3a8a]" />
                      <span>Turma 1: 08:00 às 12:00 hrs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-[#1e3a8a]" />
                      <span>Turma 2: 18:00 às 22:00 hrs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-[#1e3a8a]" />
                      <span>Inscrições Abertas</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-4 group-hover:text-gray-700 transition-colors">
                      Descubra como conectar dispositivos e criar soluções inteligentes com Internet das Coisas.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <Button asChild className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">
                    <Link
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfIYCNt1K3o2yiaxvw3KjivwxpQACNNzJo0SRwUF_7ze9g_OA/viewform"
                      target="_blank"
                    >
                      Inscreva-se
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              {/* Card 5 - Realidade Virtual */}
              <Card className="w-full max-w-md mx-auto cursor-pointer hover:shadow-lg transition-shadow group">
                <CardHeader className="bg-[#a21caf] text-white rounded-t-lg">
                  <CardTitle>Realidade Virtual</CardTitle>
                  <CardDescription className="text-gray-100">Imersão e experiências digitais</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-[#1e3a8a]" />
                      <span>29/09 a 24/10/2025</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-[#1e3a8a]" />
                      <span>Turma 1: 08:00 às 12:00 hrs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-[#1e3a8a]" />
                      <span>Turma 2: 18:00 às 22:00 hrs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-[#1e3a8a]" />
                      <span>Inscrições Abertas</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-4 group-hover:text-gray-700 transition-colors">
                      Mergulhe no universo da Realidade Virtual e desenvolva experiências digitais inovadoras.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <Button asChild className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">
                    <Link
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfIYCNt1K3o2yiaxvw3KjivwxpQACNNzJo0SRwUF_7ze9g_OA/viewform"
                      target="_blank"
                    >
                      Inscreva-se
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              {/* Card 6 - Conectividade e Segurança Cibernética */}
              <Card className="w-full max-w-md mx-auto cursor-pointer hover:shadow-lg transition-shadow group">
                <CardHeader className="bg-[#f59e42] text-white rounded-t-lg">
                  <CardTitle>Conectividade e Segurança Cibernética</CardTitle>
                  <CardDescription className="text-gray-100">Proteção e redes digitais</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-[#1e3a8a]" />
                      <span>29/10 a 02/12/2025</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-[#1e3a8a]" />
                      <span>Turma 1: 08:00 às 12:00 hrs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-[#1e3a8a]" />
                      <span>Turma 2: 18:00 às 22:00 hrs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-[#1e3a8a]" />
                      <span>Inscrições Abertas</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-4 group-hover:text-gray-700 transition-colors">
                      Aprenda sobre redes, conectividade e como proteger sistemas digitais contra ameaças cibernéticas.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <Button asChild className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">
                    <Link
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfIYCNt1K3o2yiaxvw3KjivwxpQACNNzJo0SRwUF_7ze9g_OA/viewform"
                      target="_blank"
                    >
                      Inscreva-se
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="inscricao" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0f172a]">
                Inscrições Abertas
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                As inscrições para os cursos de Redes Neurais e Visão Computacional estão abertas!
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Button asChild size="lg" className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfIYCNt1K3o2yiaxvw3KjivwxpQACNNzJo0SRwUF_7ze9g_OA/viewform"
                  target="_blank"
                >
                  Formulário de Inscrição
                </Link>
              </Button>
              <p className="text-xs text-gray-500">Clique no botão acima para acessar o formulário de inscrição</p>
              <p className="text-xs text-gray-400 mt-4">* Idade mínima: 16 anos</p>
              <p className="text-xs text-gray-400">* Cada aluno pode se inscrever em todos os cursos ofertados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="local" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0f172a]">
                Local das Aulas
              </h2>
            </div>
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-[#1e3a8a] mt-1" />
                <div className="text-left">
                  <h3 className="font-bold">Laboratório de Robótica - SEDECTI</h3>
                  <p className="text-gray-500">Rua Campinas, 26</p>
                  <p className="text-gray-500">Santa Teresa, Tefé - AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-[#0f172a] text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Sobre o Projeto</h3>
              <p className="text-sm text-gray-300">
                O projeto de Capacitação e Interiorização de Tecnologias Habilitadoras na Amazônia - CITHA oferece
                cursos de formação inicial e continuada (FIC) gratuitos para a comunidade de Tefé através do Instituto
                Federal de Educação, Ciência e Tecnologia do Amazonas - IFAM.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Parceiros</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>IFAM - Instituto Federal de Educação, Ciência e Tecnologia do Amazonas</li>
                <li>FAEPI - Fundação de Apoio ao Ensino, Pesquisa, Extensão e Interiorização do IFAM</li>
                <li>SEDECTI - Secretaria de Desenvolvimento Econômico, Ciência, Tecnologia e Inovação de Tefé</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Contato</h3>
              <div className="space-y-3">
                <Link
                  href="https://www.instagram.com/ifamcampustefe/"
                  target="_blank"
                  className="flex items-center space-x-2 text-white hover:text-[#22c55e]"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Instagram</span>
                </Link>
                <Link
                  href="https://wa.me/5597981283734"
                  target="_blank"
                  className="flex items-center space-x-2 text-white hover:text-[#22c55e]"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M20.472 3.5C18.483 1.5 15.76 0.4 12.9 0.4C6.12 0.4 0.6 5.93 0.6 12.7C0.6 14.8 1.12 16.9 2.06 18.7L0.5 24L5.9 22.5C7.6 23.4 9.4 23.8 11.3 23.8H11.4C18.1 23.8 23.7 18.3 23.7 11.5C23.7 8.7 22.5 6 20.5 3.9L20.472 3.5ZM12.9 21.8C11.2 21.8 9.5 21.4 8 20.6L7.6 20.4L4.3 21.2L5.1 18L4.8 17.6C3.9 16.1 3.5 14.3 3.5 12.6C3.5 7.5 7.7 3.3 12.9 3.3C15.2 3.3 17.4 4.2 19 5.8C20.6 7.4 21.6 9.6 21.6 12C21.5 17.1 17.3 21.3 12.1 21.3L12.9 21.8ZM17.8 15.2C17.5 15.1 16.1 14.4 15.8 14.3C15.5 14.2 15.3 14.2 15.1 14.5C14.9 14.8 14.3 15.4 14.1 15.6C13.9 15.8 13.7 15.8 13.4 15.7C13.1 15.6 12.2 15.3 11.1 14.3C10.2 13.5 9.6 12.6 9.4 12.3C9.2 12 9.4 11.8 9.5 11.6C9.6 11.5 9.8 11.3 9.9 11.1C10 10.9 10.1 10.8 10.2 10.6C10.3 10.4 10.2 10.2 10.1 10.1C10 10 9.4 8.6 9.1 8C8.8 7.4 8.5 7.5 8.3 7.5C8.1 7.5 7.9 7.5 7.7 7.5C7.5 7.5 7.1 7.6 6.8 7.9C6.5 8.2 5.8 8.9 5.8 10.3C5.8 11.7 6.8 13 6.9 13.2C7 13.4 9.4 17.1 13 18.7C13.8 19.1 14.5 19.3 15 19.4C15.8 19.7 16.6 19.6 17.2 19.5C17.9 19.4 19 18.8 19.3 18.1C19.6 17.4 19.6 16.8 19.5 16.7C19.4 16.6 19.2 16.5 18.9 16.4L17.8 15.2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>+55 97981283734</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-6 text-center">
            <p className="text-sm text-gray-300">© 2025 Projeto CITHA. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
