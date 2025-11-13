import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Ship, Truck, Building2, Clock, Shield, Globe, TrendingUp, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-ship.jpg";
import logoImage from "@/assets/logo-vts.png";

const Index = () => {
  const services = [
    {
      icon: Ship,
      title: "Marine Transportation",
      description: "Global shipping routes, port operations, and container logistics excellence",
      path: "/marine",
      color: "text-primary",
    },
    {
      icon: Truck,
      title: "Land Logistics",
      description: "Reliable road freight capabilities with advanced tracking systems",
      path: "/land",
      color: "text-secondary",
    },
    {
      icon: Building2,
      title: "Construction Infrastructure",
      description: "Large-scale building projects with proven capability and scale",
      path: "/construction",
      color: "text-accent",
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "99.7% on-time delivery rate with real-time tracking",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "ISO-certified operations with zero-compromise safety standards",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Operations in 150+ ports across 80 countries worldwide",
    },
    {
      icon: TrendingUp,
      title: "Cost Efficiency",
      description: "Optimized routes and processes for competitive pricing",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="VTS Global Marine Transportation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background/90" />
          
          {/* Wave Animation Overlay */}
          <div className="absolute inset-0 wave-animation opacity-30">
            <svg
              className="absolute bottom-0 w-full h-64"
              viewBox="0 0 1440 320"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                className="text-ocean-pale"
                fillOpacity="0.8"
                d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <img src={logoImage} alt="VTS Global" className="mx-auto h-20 w-auto mb-6" />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Global Marine Transportation
            <br />
            <span className="text-secondary">& Logistics</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in">
            Delivering seamless logistics and marine excellence worldwide.
          </p>
          <Link to="/quote">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-ocean hover:shadow-xl transition-all animate-scale-in">
              Get Quote
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              About <span className="text-gradient">VTS Global</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 animate-fade-in">
              With over three decades of experience in maritime and logistics excellence, VTS Global has established itself as a trusted partner for businesses worldwide. Our comprehensive network spans 150+ international ports across 80 countries, ensuring your cargo reaches its destination safely and on time.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in">
              From marine transportation to land logistics and large-scale construction projects, we deliver integrated solutions that drive your business forward. Our commitment to innovation, safety, and reliability makes us the preferred choice for global logistics.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.path}>
                <Card className="p-8 hover-lift cursor-pointer group border-border hover:border-primary transition-all h-full">
                  <service.icon className={`h-12 w-12 mb-6 ${service.color} group-hover:scale-110 transition-transform`} />
                  <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose <span className="text-gradient">VTS Global</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Excellence backed by proven results and trusted partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover-lift border-border hover:border-primary transition-all">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-ocean text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Ship with VTS Global?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get a customized quote for your logistics needs and experience world-class service.
          </p>
          <Link to="/quote">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all">
              Request a Quote
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
