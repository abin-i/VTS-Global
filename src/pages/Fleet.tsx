import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Ship, Truck, Building2 } from "lucide-react";

const Fleet = () => {
  const marineFleet = [
    { name: "Container Vessels", count: "45", capacity: "Up to 15,000 TEU" },
    { name: "Bulk Carriers", count: "12", capacity: "30,000 - 180,000 DWT" },
    { name: "Tankers", count: "8", capacity: "50,000 - 120,000 DWT" },
    { name: "RoRo Vessels", count: "6", capacity: "4,000 - 7,000 units" },
  ];

  const landFleet = [
    { name: "Standard Dry Vans", count: "350", capacity: "53ft trailers" },
    { name: "Refrigerated Trucks", count: "120", capacity: "Temperature controlled" },
    { name: "Flatbed Trailers", count: "85", capacity: "Oversized cargo" },
    { name: "Heavy Haul", count: "40", capacity: "Up to 80 tons" },
  ];

  const equipment = [
    { name: "Mobile Cranes", count: "45", capacity: "50 - 500 ton capacity" },
    { name: "Tower Cranes", count: "30", capacity: "Various heights" },
    { name: "Excavators", count: "60", capacity: "Multiple sizes" },
    { name: "Concrete Equipment", count: "40", capacity: "Mixers & pumps" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Fleet</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern, well-maintained assets ensuring reliable service across all our operations
            </p>
          </div>

          {/* Marine Fleet */}
          <div className="mb-20">
            <div className="flex items-center justify-center mb-8">
              <Ship className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-4xl font-bold text-foreground">Marine Fleet</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marineFleet.map((vessel, index) => (
                <Card key={index} className="p-6 hover-lift border-border hover:border-primary transition-all text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{vessel.count}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{vessel.name}</h3>
                  <p className="text-sm text-muted-foreground">{vessel.capacity}</p>
                </Card>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8 max-w-3xl mx-auto">
              Our modern marine fleet includes state-of-the-art container vessels, bulk carriers, tankers, and specialized ships. All vessels are regularly maintained and comply with international maritime standards.
            </p>
          </div>

          {/* Land Fleet */}
          <div className="mb-20 bg-muted/30 py-16 -mx-4 px-4">
            <div className="container mx-auto">
              <div className="flex items-center justify-center mb-8">
                <Truck className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-4xl font-bold text-foreground">Land Transportation Fleet</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {landFleet.map((vehicle, index) => (
                  <Card key={index} className="p-6 hover-lift border-border hover:border-primary transition-all text-center">
                    <div className="text-4xl font-bold text-secondary mb-2">{vehicle.count}</div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{vehicle.name}</h3>
                    <p className="text-sm text-muted-foreground">{vehicle.capacity}</p>
                  </Card>
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-8 max-w-3xl mx-auto">
                Our extensive land fleet features GPS-tracked vehicles equipped with the latest safety and communication technology. Regular maintenance schedules ensure reliability and minimize downtime.
              </p>
            </div>
          </div>

          {/* Construction Equipment */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <Building2 className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-4xl font-bold text-foreground">Construction Equipment</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {equipment.map((item, index) => (
                <Card key={index} className="p-6 hover-lift border-border hover:border-primary transition-all text-center">
                  <div className="text-4xl font-bold text-accent mb-2">{item.count}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.capacity}</p>
                </Card>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8 max-w-3xl mx-auto">
              Our construction division operates a comprehensive range of heavy machinery and specialized equipment, all maintained to the highest standards and operated by certified professionals.
            </p>
          </div>

          {/* Fleet Standards */}
          <Card className="p-12 bg-gradient-ocean text-white border-0">
            <h2 className="text-3xl font-bold mb-6 text-center">Fleet Standards & Maintenance</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-3">100%</div>
                <p className="text-lg opacity-90">ISO Certified Operations</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-3">24/7</div>
                <p className="text-lg opacity-90">Maintenance Support</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-3">&lt;5</div>
                <p className="text-lg opacity-90">Years Average Fleet Age</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Fleet;
