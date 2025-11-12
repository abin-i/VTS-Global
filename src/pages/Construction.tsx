import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Building2, HardHat, Layers, Users, ChevronRight } from "lucide-react";
import constructionImage from "@/assets/construction.jpg";

const Construction = () => {
  const blueprintRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const paths = entry.target.querySelectorAll("path");
            paths.forEach((path, index) => {
              setTimeout(() => {
                path.classList.add("draw-line");
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (blueprintRef.current) {
      observer.observe(blueprintRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Building2,
      title: "Commercial Infrastructure",
      description: "Large-scale commercial buildings, warehouses, and distribution centers",
    },
    {
      icon: Layers,
      title: "Civil Engineering",
      description: "Roads, bridges, ports, and public infrastructure projects",
    },
    {
      icon: HardHat,
      title: "Project Management",
      description: "End-to-end oversight ensuring on-time, on-budget delivery",
    },
    {
      icon: Users,
      title: "Expert Teams",
      description: "Skilled engineers, architects, and construction professionals",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <style>{`
        .draw-line {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawLine 2s ease-out forwards;
        }
        
        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>

      <div className="pt-32 pb-24">
        {/* Hero Section */}
        <div className="container mx-auto px-4 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Construction & <span className="text-gradient">Building Infrastructure</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Building tomorrow's infrastructure today. From concept to completion, we deliver large-scale construction projects with precision, safety, and unmatched expertise.
              </p>
              <Link to="/quote">
                <Button size="lg" className="shadow-ocean hover:shadow-xl transition-all">
                  Request Construction Quote
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative animate-fade-in">
              <img
                src={constructionImage}
                alt="VTS Global Construction"
                className="rounded-lg shadow-ocean w-full hover:scale-105 transition-transform duration-500"
              />
              
              {/* Blueprint Animation Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <svg
                  ref={blueprintRef}
                  className="w-full h-full opacity-30"
                  viewBox="0 0 400 300"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50,250 L50,100 L150,50 L250,100 L250,250"
                    fill="none"
                    stroke="hsl(var(--accent))"
                    strokeWidth="3"
                  />
                  <path
                    d="M50,150 L250,150"
                    fill="none"
                    stroke="hsl(var(--accent))"
                    strokeWidth="2"
                  />
                  <path
                    d="M100,250 L100,150 M150,250 L150,100 M200,250 L200,150"
                    fill="none"
                    stroke="hsl(var(--accent))"
                    strokeWidth="2"
                  />
                  <path
                    d="M300,100 L350,100 L350,250 L300,250 Z"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
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
              Comprehensive <span className="text-gradient">Construction Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From foundation to finish, we manage every aspect of your project
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 hover-lift border-border hover:border-primary transition-all">
                <div className="bg-accent/20 w-14 h-14 rounded-full flex items-center justify-center mb-6">
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

        {/* Capabilities Section */}
        <div className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
                Our Construction Capabilities
              </h2>
              
              <div className="space-y-8">
                <Card className="p-8 border-border">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Large-Scale Infrastructure</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We specialize in delivering complex infrastructure projects that form the backbone of modern commerce. From port facilities to logistics hubs, our team has the expertise and resources to handle projects of any scale.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Commercial warehouses and distribution centers</li>
                    <li>Port terminals and maritime facilities</li>
                    <li>Transportation infrastructure (roads, bridges)</li>
                    <li>Industrial complexes and manufacturing plants</li>
                  </ul>
                </Card>

                <Card className="p-8 border-border">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Turnkey Project Delivery</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our comprehensive approach covers every phase from initial design to final handover. We coordinate architects, engineers, contractors, and suppliers to ensure seamless execution and quality outcomes.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Feasibility studies and site analysis</li>
                    <li>Design development and engineering</li>
                    <li>Procurement and construction management</li>
                    <li>Quality assurance and safety compliance</li>
                  </ul>
                </Card>

                <Card className="p-8 border-border">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Safety & Compliance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Safety is paramount in all our construction activities. We maintain rigorous safety protocols, regular training programs, and strict adherence to local and international building codes and regulations.
                  </p>
                </Card>

                <Card className="p-8 border-border">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Track Record</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    With over 30 years of experience, we've successfully delivered 500+ infrastructure projects across multiple continents. Our portfolio includes some of the region's most iconic logistics and commercial facilities.
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
              Ready to Build Your Vision?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Partner with construction experts who deliver on time and on budget
            </p>
            <Link to="/quote">
              <Button size="lg" variant="secondary" className="shadow-xl hover:shadow-2xl transition-all">
                Discuss Your Project
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

export default Construction;
