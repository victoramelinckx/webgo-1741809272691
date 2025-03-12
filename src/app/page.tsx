
"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

            <Hero
              headline="Sitios Web Que Multiplican Tus Ventas"
              subheadline="Diseñamos y optimizamos tu sitio web para convertir visitantes en clientes, ¡incluso si estás empezando!"
              cta1="Impulsa Tus Ventas Hoy"
            />

            <How
              step1Title="Inicio Gratuito"
              step1Desc="Crea tu primer sitio web optimizado con Ai."
              step2Title="Rediseño Profesional"
              step2Desc="Aumenta tus ventas online con nuestro rediseño."
              step3Title="Especialistas en Ventas"
              step3Desc="Nos enfocamos 100% en mejorar tus ventas."
            />

            <Aboutus
              headline="Webgo: Transformando Ventas Online"
              subheadline="Descripción"
              beneficio1="Diseño Funcional"
              beneficio2="Sitios web creados para vender, no sólo para lucir bien."
              beneficiotitulo1="Arranque Gratuito"
              beneficiotitulo2="Website inicial gratis para emprendedores con optimización AI."
            />

            <Services
              heading="Impulsa tu conversión online"
              description="Sitios web gratuitos y profesionales optimizados con IA para principiantes. Rediseño para sitios web basados en diseño, no en ventas."
              services={[{"name":"Creación de Sitios Web","icon":"code","description":"Sitios web efectivos que impulsan las ventas."},{"name":"Diseño Web Gratuito","icon":"gift","description":"Comienza tu viaje online con un sitio web gratuito."},{"name":"Optimización con IA","icon":"brain","description":"La inteligencia artificial impulsa tu rendimiento online."},{"name":"Rediseño de Sitios Web","icon":"sync-alt","description":"Transformamos sitios bonitos en máquinas de ventas."}]}
            />
<BeforeAndAfter />

            <Faq
              faqs={[{"pregunta":"¿Por qué necesito un sitio web para mi negocio online?","respuesta":"Un sitio web es esencial para cualquier negocio online. No solo proporciona una plataforma para presentar tus productos o servicios, sino que también mejora tu reputación y te ayuda a conectarte con tus clientes. En Webgo, creamos y rediseñamos sitios web optimizados y profesionales para ayudarte a maximizar tus esfuerzos de venta online."},{"pregunta":"¿Puedo obtener un sitio web gratis en Webgo?","respuesta":"¡Sí, puedes! Sabemos que empezar un negocio online puede ser un desafío, por eso ofrecemos websites gratis para aquellos que recién están comenzando. Estos sitios web son creados con la ayuda de la inteligencia artificial y están 100% optimizados para ayudarte a empezar con el pie derecho."},{"pregunta":"Ya tengo un sitio web, pero no está basado en cómo funciona o vende. ¿Pueden ayudarme?","respuesta":"Definitivamente. En Webgo, no solo creamos sitios web desde cero, sino que también rediseñamos los existentes. Nuestro objetivo es que tu sitio web no solo se vea bien, sino que también funcione de manera eficiente y efectiva para vender tus productos o servicios. Te ayudamos a convertir tu sitio web en una herramienta de ventas eficaz."},{"pregunta":"No tengo experiencia en crear sitios web. ¿Cómo puede Webgo ayudarme?","respuesta":"No tienes que preocuparte si no tienes experiencia en diseño web. En Webgo, nuestro equipo de profesionales con amplia experiencia en el campo se encargará de todo el proceso. Desde la creación hasta la optimización, nos encargamos de cada detalle para garantizar que tu sitio web se destaque y venda."},{"pregunta":"¿Cómo puede un sitio web de Webgo mejorar la conversión de mi negocio?","respuesta":"En Webgo, nos enfocamos en crear sitios web que no solo se vean bien, sino que también estén optimizados para vender. Utilizamos técnicas de SEO y optimización de conversión para asegurar que tu sitio web atraiga a la audiencia adecuada y los guíe a través del proceso de compra. Al final, ayudamos a tu negocio a crecer y a alcanzar tus metas de venta online."}]}
            />

            <BookAppointment
              heading="Transforma Tu Negocio Online"
              description="Con Webgo, mejora tus conversiones con sitios web diseñados para vender, no solo para lucir bien. Incluso si estás empezando, te ofrecemos un sitio web gratis totalmente optimizado y profesional."
            />
<Footer />
    </main>
  );
}
    