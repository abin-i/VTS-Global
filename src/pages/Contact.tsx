import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Contact <span className="text-gradient">VTS Global</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with our team. We're here to help with your logistics needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-8 border-border hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Headquarters</h3>
                    <p className="text-muted-foreground">
                      123 Maritime Boulevard<br />
                      Port City, PC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-border hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Phone</h3>
                    <p className="text-muted-foreground">
                      Main: <a href="tel:+1234567890" className="text-primary hover:underline">+1 (234) 567-890</a><br />
                      International: <a href="tel:+1234567891" className="text-primary hover:underline">+1 (234) 567-891</a><br />
                      Emergency 24/7: <a href="tel:+1234567892" className="text-primary hover:underline">+1 (234) 567-892</a>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-border hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      General Inquiries: <a href="mailto:info@vtsglobal.com" className="text-primary hover:underline">info@vtsglobal.com</a><br />
                      Quotes: <a href="mailto:quotes@vtsglobal.com" className="text-primary hover:underline">quotes@vtsglobal.com</a><br />
                      Support: <a href="mailto:support@vtsglobal.com" className="text-primary hover:underline">support@vtsglobal.com</a>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-border hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed<br />
                      <span className="text-primary font-medium">Emergency services available 24/7</span>
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Map */}
            <div>
              <Card className="p-0 border-border overflow-hidden h-full">
                <div className="w-full h-full min-h-[600px] bg-muted/50 flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-foreground mb-2">Find Us Here</h3>
                    <p className="text-muted-foreground mb-6">
                      Located in the heart of the maritime district
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Regional Offices */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Regional <span className="text-gradient">Offices</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              VTS Global operates regional offices worldwide to serve you better
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-border text-center hover-lift">
              <h3 className="text-xl font-semibold text-foreground mb-3">Asia Pacific</h3>
              <p className="text-muted-foreground text-sm mb-2">Singapore Office</p>
              <p className="text-muted-foreground text-sm">
                <a href="tel:+6512345678" className="text-primary hover:underline">+65 1234 5678</a>
              </p>
            </Card>

            <Card className="p-6 border-border text-center hover-lift">
              <h3 className="text-xl font-semibold text-foreground mb-3">Europe</h3>
              <p className="text-muted-foreground text-sm mb-2">Rotterdam Office</p>
              <p className="text-muted-foreground text-sm">
                <a href="tel:+31123456789" className="text-primary hover:underline">+31 12 345 6789</a>
              </p>
            </Card>

            <Card className="p-6 border-border text-center hover-lift">
              <h3 className="text-xl font-semibold text-foreground mb-3">Middle East</h3>
              <p className="text-muted-foreground text-sm mb-2">Dubai Office</p>
              <p className="text-muted-foreground text-sm">
                <a href="tel:+97112345678" className="text-primary hover:underline">+971 1 234 5678</a>
              </p>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
