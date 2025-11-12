import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Award, Users, Globe2, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Globe2, value: "150+", label: "Ports Worldwide" },
    { icon: Users, value: "5000+", label: "Global Team" },
    { icon: Award, value: "30+", label: "Years Experience" },
    { icon: TrendingUp, value: "99.7%", label: "On-Time Delivery" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              About <span className="text-gradient">VTS Global</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three decades of maritime excellence, logistics innovation, and global infrastructure development
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover-lift border-border">
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Founded in 1993, VTS Global began as a regional maritime shipping company with a vision to connect continents through reliable, efficient logistics. Today, we've grown into a comprehensive logistics powerhouse serving clients across 80 countries with marine transportation, land logistics, and construction infrastructure solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our success is built on a foundation of trust, innovation, and an unwavering commitment to exceeding client expectations. Every shipment, every project, every delivery represents our dedication to excellence.
              </p>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To deliver world-class logistics and infrastructure solutions that empower businesses to thrive in the global marketplace. We bridge distances, connect markets, and build the foundation for tomorrow's commerce through reliable marine transportation, efficient land logistics, and transformative construction projects.
              </p>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Reliability</h3>
                  <p className="text-muted-foreground">
                    We deliver on our promises with 99.7% on-time performance and zero-compromise standards.
                  </p>
                </Card>
                <Card className="p-6 border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Innovation</h3>
                  <p className="text-muted-foreground">
                    Leveraging cutting-edge technology and processes to optimize every aspect of logistics.
                  </p>
                </Card>
                <Card className="p-6 border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Safety</h3>
                  <p className="text-muted-foreground">
                    ISO-certified operations ensuring the highest safety standards for cargo and personnel.
                  </p>
                </Card>
                <Card className="p-6 border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Sustainability</h3>
                  <p className="text-muted-foreground">
                    Committed to reducing environmental impact through green logistics initiatives.
                  </p>
                </Card>
              </div>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-6">Global Network</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Our extensive network spans 150+ international ports across six continents, providing unparalleled reach and flexibility for your shipping needs. With regional offices strategically located in major commercial hubs, we offer localized expertise backed by global resources.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're shipping across oceans, moving freight overland, or building critical infrastructure, VTS Global's integrated network ensures seamless coordination from origin to destination.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
