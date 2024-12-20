import CaseStudy from "@/components/CaseStudy/CaseStudy";
import FormRequest from "@/components/FormRequest/FormRequest";
import Menu from "@/components/Header/Menu/Menu";
import TopNav from "@/components/Header/TopNav/TopNav";
import PaymentGateway from "@/components/PaymentGateway/PaymentGateway";
import PaymentGatewayTwo from "@/components/PaymentGateway/PaymentGatewayTwo";
import Service from "@/components/Service/Service";
import Slider from "@/components/Slider/Slider";
import services from "@/data/service.json"

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <header id="header">
        <TopNav />
        <Menu />
      </header>

      <main className="content">
        <Slider />
        <Service data={services} />
        <PaymentGateway />
        <CaseStudy />
        <PaymentGatewayTwo />
        <FormRequest />
      </main>
    </div>
  );
}
