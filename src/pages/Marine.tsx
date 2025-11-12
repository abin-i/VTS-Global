import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Anchor, Ship, Container, MapPin, ChevronRight } from "lucide-react";
import marineImage from "@/assets/marine-transport.jpg";

const Marine = () => {
  const features = [
    {
      icon: Ship,
      title: "Global Shipping Routes",
      description: "Comprehensive coverage across major trade lanes connecting all continents",
    },
    {
      icon: Container,
      title: "Container Logistics",
      description: "Full container load (FCL) and less than container load (LCL) services",
    },
    {
      icon: MapPin,
      title: "Port Operations",
      description: "Strategic partnerships at 150+ ports for seamless cargo handling",
    },
    {
      icon: Anchor,
      title: "Specialized Cargo",
      description: "Handling oversized, refrigerated, and hazardous materials with expertise",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-24">
        {/* Hero Section */}
        <div className="container mx-auto px-4 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Marine <span className="text-gradient">Transportation</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Navigate global trade with confidence through our comprehensive marine transportation services. With decades of maritime expertise and a fleet of modern vessels, we connect your business to markets worldwide.
              </p>
              <Link to="/quote">
                <Button size="lg" className="shadow-ocean hover:shadow-xl transition-all">
                  Request Marine Quote
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative animate-fade-in">
              <img
                src={marineImage}
                alt="VTS Global Marine Transportation"
                className="rounded-lg shadow-ocean w-full hover:scale-105 transition-transform duration-500"
              />
              {/* Wave Animation Overlay */}
              <div className="absolute inset-0 wave-animation opacity-20 pointer-events-none">
                <svg
                  className="absolute bottom-0 w-full h-32"
                  viewBox="0 0 1440 320"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    className="text-primary"
                    fillOpacity="0.3"
                    d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="container mx-auto px-4 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Comprehensive <span className="text-gradient">Marine Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From port to port, we handle every aspect of your ocean freight needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 hover-lift border-border hover:border-primary transition-all">
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Services Detail */}
        <div className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
                Our Marine Capabilities
              </h2>
              
              <div className="space-y-8">
                <Card className="p-8 border-border">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Ocean Freight Services</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Full Container Load (FCL) and Less than Container Load (LCL) services across all major trade routes. Our partnerships with leading shipping lines ensure competitive rates and reliable schedules.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>20ft, 40ft, and 40ft High Cube containers</li>
                    <li>Refrigerated containers for perishable goods</li>
                    <li>Open top and flat rack for oversized cargo</li>
                    <li>Tank containers for liquid bulk</li>
                  </ul>
                </Card>

                <Card className="p-8 border-border">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Global Port Network</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Strategic presence at 150+ international ports ensures efficient cargo handling, customs clearance, and onward distribution. Our port agents provide local expertise backed by global standards.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Major Asian ports: Singapore, Shanghai, Hong Kong, Dubai</li>
                    <li>European hubs: Rotterdam, Hamburg, Antwerp, Felixstowe</li>
                    <li>Americas: Los Angeles, New York, Santos, Buenos Aires</li>
                    <li>Emerging markets: Lagos, Mombasa, Colombo</li>
                  </ul>
                </Card>

                <Card className="p-8 border-border">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Real-Time Tracking</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Advanced vessel tracking systems provide real-time visibility of your shipments from departure to arrival. Automated notifications keep you informed at every milestone, ensuring complete transparency and peace of mind throughout the shipping journey.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="container mx-auto px-4 mt-20">
          <Card className="p-12 text-center bg-gradient-ocean text-white border-0">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Ship Worldwide?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get expert marine logistics support and competitive ocean freight rates
            </p>
            <Link to="/quote">
              <Button size="lg" variant="secondary" className="shadow-xl hover:shadow-2xl transition-all">
                Get Your Marine Quote
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Marine;
