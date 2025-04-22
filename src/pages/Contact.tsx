import Footer from "../components/Footer"
import Form from "./sections/ContactPage/Form"
import Hero from "./sections/ContactPage/Hero"

const Contact = () => {
  return (
    <div className="bg-[#192026] pt-10 lg:pt-5">
      <Hero />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact