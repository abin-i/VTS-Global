import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Home, Mail } from "lucide-react";

const QuoteSuccess = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="p-12 shadow-ocean border-border animate-scale-in">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-12 w-12 text-primary" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Quote Submitted <span className="text-gradient">Successfully!</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Thank you for choosing VTS Global. Our team will review your requirements and get back to you within 24 hours with a detailed quote.
              </p>

              <div className="bg-muted/50 rounded-lg p-6 mb-8">
                <div className="flex items-start space-x-3 text-left">
                  <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">What Happens Next?</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Our logistics experts will review your requirements</li>
                      <li>• You'll receive a detailed quote via email</li>
                      <li>• A dedicated account manager will be assigned to your project</li>
                      <li>• We're available 24/7 for any questions you may have</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button size="lg" className="shadow-ocean hover:shadow-xl transition-all">
                    <Home className="mr-2 h-5 w-5" />
                    Return Home
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </Card>

            <p className="mt-8 text-muted-foreground">
              Reference Number: <span className="font-mono text-primary">VTS-{Date.now().toString().slice(-8)}</span>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default QuoteSuccess;
