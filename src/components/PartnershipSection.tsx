import { Handshake } from "lucide-react";

const PartnershipSection = () => {
  return (
    <div className="relative py-16 px-6 md:px-8">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-primary-glow/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 shadow-glow">
            <Handshake className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-space font-bold text-foreground mb-4">
            Strategic Partnership
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proud to collaborate with industry leaders who share our vision for innovation and excellence
          </p>
        </div>

        {/* Partnership Card */}
        <div className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-elegant border border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* TSALEX Logo Section */}
            <div className="flex-shrink-0">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-primary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border/30 group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <img 
                    src="/tsalex-logo.png" 
                    alt="TSALEX Logo" 
                    className="w-32 h-32 md:w-40 md:h-40 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Partnership Details */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-space font-semibold text-foreground mb-4">
              Techne Summit Partnership
              </h3>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              We're excited to announce our strategic partnership with Techne Summit Alexandria, combining our expertise to deliver cutting-edge solutions in Digital health industry and our exceptional value to our clients.
              </p>
              
              {/* Partnership Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Shared Vision</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Innovation Focus</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Quality Excellence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Client Success</span>
                </div>
              </div>

               {/* Call to Action */}
               <a 
                 href="https://technesummit.com/2025" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center space-x-2 text-primary font-medium group hover:text-primary-glow transition-colors duration-300"
               >
                 <span>Learn More About Our Partnership</span>
                 <div className="w-1 h-1 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></div>
               </a>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center mt-8 space-x-2">
          <div className="w-1 h-1 bg-primary/60 rounded-full animate-pulse"></div>
          <div className="w-1 h-1 bg-primary-glow/60 rounded-full animate-pulse delay-150"></div>
          <div className="w-1 h-1 bg-primary/60 rounded-full animate-pulse delay-300"></div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipSection;
