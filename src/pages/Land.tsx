import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Truck, MapPin, Clock, Shield, ChevronRight } from "lucide-react";
import landImage from "@/assets/land-transport.jpg";

const Land = () => {
  const truckRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (truckRef.current) {
      observer.observe(truckRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Truck,
      title: "Full Truckload (FTL)",
      description: "Dedicated vehicles for large shipments requiring exclusive capacity",
    },
    {
      icon: MapPin,
      title: "Route Optimization",
      description: "AI-powered routing ensures fastest delivery times and fuel efficiency",
    },
    {
      icon: Clock,
      title: "24/7 Tracking",
      description: "Real-time GPS tracking with automated delivery notifications",
    },
    {
      icon: Shield,
      title: "Secure Transport",
      description: "Advanced security protocols and insurance coverage for all cargo",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <style>{`
        .slide-in {
          animation: slideInFromLeft 1s ease-out forwards;
        }
        
        @keyframes slideInFromLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>

      <div className="pt-32 pb-24">
        {/* Hero Section */}
        <div className="container mx-auto px-4 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Land <span className="text-gradient">Transportation Logistics</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Efficient, reliable road freight solutions connecting businesses across continents. Our modern fleet and advanced tracking systems ensure your cargo arrives safely and on schedule.
              </p>
              <Link to="/quote">
                <Button size="lg" className="shadow-ocean hover:shadow-xl transition-all">
                  Request Land Quote
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div ref={truckRef} className="relative opacity-0">
              <img
                src={landImage}
                alt="VTS Global Land Transportation"
                className="rounded-lg shadow-ocean w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="container mx-auto px-4 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Complete <span className="text-gradient">Land Logistics</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From first mile to last mile, we handle every aspect of road freight
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 hover-lift border-border hover:border-primary transition-all">
                <div className="bg-secondary/20 w-14 h-14 rounded-full flex items-center justify-center mb-6">
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
                Our Land Transport Capabilities
              </h2>
              
              <div className="space-y-8">
                <Card className="p-8 border-border">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Domestic & Cross-Border Freight</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Comprehensive inland transportation services including full truckload (FTL), less than truckload (LTL), and dedicated fleet solutions. Our experienced drivers and modern equipment ensure safe, timely delivery.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Standard dry van trailers up to 53 feet</li>
                    <li>Temperature-controlled refrigerated trucks</li>
                    <li>Flatbed trailers for oversized loads</li>
                    <li>Specialized vehicles for hazardous materials</li>
                  </ul>
                </Card>

                <Card className="p-8 border-border">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Advanced Tracking & Visibility</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Real-time GPS tracking on all vehicles provides complete shipment visibility from pickup to delivery. Automated alerts keep you informed of any delays or route changes, ensuring transparency throughout the journey.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Live location tracking via web portal and mobile app</li>
                    <li>Automated delivery notifications and ETAs</li>
                    <li>Electronic proof of delivery (ePOD)</li>
                    <li>Historical route and performance analytics</li>
                  </ul>
                </Card>

                <Card className="p-8 border-border">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Cost-Effective Solutions</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Optimized routing algorithms and fuel-efficient fleet operations deliver competitive pricing without compromising service quality. Flexible scheduling and consolidation options help minimize costs while maintaining reliability.
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
              Get Your Freight Moving Today
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Reliable land transportation with real-time tracking and competitive rates
            </p>
            <Link to="/quote">
              <Button size="lg" variant="secondary" className="shadow-xl hover:shadow-2xl transition-all">
                Request Land Transport Quote
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

export default Land;
