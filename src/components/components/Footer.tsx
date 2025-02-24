import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Facebook, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

const AccredianFooter = () => {
  return (
    <footer className="bg-[#282828] w-screen text-white py-8">
      <div className="container w-full mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 bp4:place-items-center w-full">
          {/* Programs Section - Mobile Accordion, Desktop List */}
          <div className="md:hidden w-full">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="programs"
                className="border-b border-zinc-700"
              >
                <AccordionTrigger className="text-left font-medium py-3">
                  Programs
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {[
                      "Data Science & AI",
                      "Product Management",
                      "Business Analytics",
                      "Digital Transformation",
                      "Business Management",
                      "Project Management",
                      "Strategy & Leadership",
                      "Senior Management",
                      "Fintech",
                    ].map((program, index) => (
                      <li key={index}>
                        <a href="#" className="hover:text-blue-400 block py-1">
                          {program}
                        </a>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="hidden md:block">
            <h3 className="font-medium text-lg mb-4">Programs</h3>
            <ul className="space-y-2">
              {[
                "Data Science & AI",
                "Product Management",
                "Business Analytics",
                "Digital Transformation",
                "Business Management",
                "Project Management",
                "Strategy & Leadership",
                "Senior Management",
                "Fintech",
              ].map((program, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-blue-400">
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="w-full">
            <h3 className="font-medium text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                Email (Data Science Queries):{" "}
                <a
                  href="mailto:admissions@accredian.com"
                  className="text-blue-400"
                >
                  admissions@accredian.com
                </a>
              </li>
              <li>
                Email (Product Management Queries):{" "}
                <a href="mailto:pm@accredian.com" className="text-blue-400">
                  pm@accredian.com
                </a>
              </li>
              <li>
                Data Science Admission:{" "}
                <a href="tel:+919078432570" className="text-blue-400">
                  +91 9078432570
                </a>{" "}
                (9 AM - 7 PM)
              </li>
              <li>
                Product Management Admission:{" "}
                <a href="tel:+919625811095" className="text-blue-400">
                  +91 9625811095
                </a>
              </li>
              <li>
                Enrolled Student Helpline:{" "}
                <a href="tel:+917969322507" className="text-blue-400">
                  +91 7969322507
                </a>
              </li>
              <li>
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector
                18, Gurugram, Haryana 122015
              </li>
            </ul>

            <h3 className="font-medium text-lg mt-6 mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              {[Facebook, Linkedin, Twitter, Instagram, Youtube].map(
                (Icon, index) => (
                  <a key={index} href="#" className="hover:text-blue-400">
                    <Icon size={20} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Accredian Section */}
          <div className="w-full">
            <h3 className="font-medium text-lg mb-4">Accredian</h3>
            <ul className="space-y-2">
              {[
                "About",
                "Career",
                "Blog",
                "Admission Policy",
                "Referral Policy",
                "Privacy Policy",
                "Terms Of Service",
                "Master FAQs",
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-blue-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full md:w-auto">
                Schedule 1-on-1 Call Now
              </Button>
            </div>
            <div className="mt-3">
              <a href="#" className="text-sm text-blue-400 hover:underline">
                Speak with our Learning Advisor
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-6 bg-zinc-700" />

        <div className="text-center text-sm text-zinc-400">
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
          Reserved
        </div>
      </div>
    </footer>
  );
};

export default AccredianFooter;
