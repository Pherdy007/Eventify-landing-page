# Eventify-landing-page
Website for EVENTIFY 
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mail, Star, Users, CalendarCheck, ShieldCheck, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function EventifyLandingPage() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="bg-[url('/images/african-party.jpg')] bg-cover bg-center text-soft-white p-10 md:p-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gold">Plan Your Next Big Event Without the Stress</h1>
        <p className="text-xl md:text-2xl mb-6">Discover trusted vendors. Compare prices. Pay securely. All in one place.</p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button className="bg-gold text-black text-lg px-6 py-3 rounded-2xl">Get Early Access</Button>
          <Button variant="outline" className="border-gold text-gold text-lg px-6 py-3 rounded-2xl">Become a Vendor</Button>
        </div>
        <p className="mt-6 text-sm">Built for Nigeria. Scaled for Africa.</p>
      </section>

      {/* How It Works */}
      <section className="py-16 px-8 text-center bg-[#111]">
        <h2 className="text-3xl font-semibold mb-10 text-gold">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Browse or Post Your Event Need", "Compare Offers or Pick a Vendor", "Pay Securely & Celebrate with Peace of Mind"].map((step, i) => (
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 rounded-2xl bg-black shadow-lg" key={i}>
              <p className="text-xl text-white font-medium">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-8 bg-soft-white text-black">
        <h2 className="text-3xl font-semibold mb-10 text-center text-gold">Top Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Users />, text: "Smart Vendor Marketplace" },
            { icon: <Star />, text: "Bid for Big Events (₦5M+)" },
            { icon: <ShieldCheck />, text: "Secure Escrow Payment" },
            { icon: <CalendarCheck />, text: "Real Reviews, Real Results" },
            { icon: <MapPin />, text: "Tailored to Your City & Style" },
          ].map((feature, i) => (
            <Card key={i} className="bg-white text-black rounded-2xl shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="text-gold mb-4">{feature.icon}</div>
                <p className="text-lg font-medium">{feature.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Vendor CTA */}
      <section className="py-20 px-8 bg-[#111] text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gold">Are You an Event Vendor?</h2>
        <p className="mb-4">Grow your business with Eventify</p>
        <Button className="bg-gold text-black text-lg px-6 py-3 rounded-2xl">Join as a Vendor</Button>
        <ul className="mt-6 text-sm text-white space-y-2">
          <li>• Free profile setup during beta</li>
          <li>• More visibility</li>
          <li>• Safe and fast payments</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-8 bg-soft-white text-black text-center">
        <h2 className="text-3xl font-semibold mb-10 text-gold">What People Are Saying</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {["Eventify made planning my wedding feel like magic!", "I found all my vendors on one platform. No stress."].map((quote, i) => (
            <blockquote key={i} className="bg-white shadow p-6 rounded-2xl italic">“{quote}”</blockquote>
          ))}
        </div>
      </section>

      {/* Waitlist */}
      <section className="py-20 px-8 bg-black text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gold">Be the First to Know</h2>
        <p className="mb-6">Join the waitlist and get notified when we launch in your city.</p>
        <div className="flex justify-center gap-4 flex-col md:flex-row">
          <Input type="email" placeholder="Enter your email" className="w-full md:w-96" />
          <Button className="bg-gold text-black">Join the Waitlist</Button>
        </div>
        <p className="mt-4 text-xs">Vendors will get free onboarding support.</p>
      </section>

      {/* Footer */}
      <footer className="bg-[#111] text-sm text-white p-8 mt-10 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-gold text-lg font-semibold mb-2">About EVENTIFY</h3>
          <p>EVENTIFY is redefining how Africans plan and celebrate life’s moments. All-in-one platform for event vendors and customers.</p>
        </div>
        <div>
          <h3 className="text-gold text-lg font-semibold mb-2">Follow Us</h3>
          <ul>
            <li>Instagram: @eventify.ng</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
        <div>
          <h3 className="text-gold text-lg font-semibold mb-2">Contact & Legal</h3>
          <ul>
            <li>Email: hello@eventify.ng</li>
            <li>Phone: +234-913-031-1041</li>
            <li>Terms of Use | Privacy Policy</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
