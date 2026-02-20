import React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./dialog";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { MapPin, Star, Shield, Calendar, CheckCircle, Phone, Mail } from "lucide-react";
import { Link } from "react-router";

export interface ExpertData {
    id: number;
    name: string;
    company: string;
    specialization: string;
    location: string;
    experience: number;
    rating: number;
    reviews: number;
    certified: boolean;
    tags: string[];
    description: string;
    image: string;
}

export function ProfileModal({ expert, trigger }: { expert: ExpertData, trigger: React.ReactNode }) {
    // Add some believable dummy copy to extend the basic expert object
    const bio = `${expert.name} is a renowned specialist in ${expert.specialization.toLowerCase()} with over ${expert.experience} years of dedicated experience in heritage conservation. Leading ${expert.company}, they have successfully completed numerous monumental restoration projects throughout ${expert.location} and the wider 's-Hertogenbosch area. Their work is characterized by a deep respect for historical accuracy and the use of authentic, traditional materials.`;

    const services = [
        `${expert.specialization} and repair`,
        "Historical material sourcing",
        "Monumental regulation compliance",
        "Traditional craftsmanship techniques"
    ];

    return (
        <Dialog>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden bg-[#F5F5F0] border-[#1A1A1A]/20 rounded-none max-h-[90vh] overflow-y-auto">
                {/* Banner Image */}
                <div className="relative h-48 sm:h-64 w-full bg-[#E8E8E0]">
                    <ImageWithFallback
                        src={expert.image}
                        alt={expert.name}
                        className="w-full h-full object-cover"
                    />
                    {expert.certified && (
                        <div className="absolute top-4 right-4 bg-[#2A4D69] text-[#F5F5F0] p-2 flex items-center gap-2">
                            <Shield className="w-4 h-4" />
                            <span className="font-['Space_Mono'] text-[11px] uppercase tracking-wider">Certified</span>
                        </div>
                    )}
                </div>

                <div className="p-6 sm:p-8">
                    <DialogHeader className="mb-6 text-left">
                        <DialogTitle className="font-['Cormorant_Garamond'] text-[#1A1A1A] text-4xl sm:text-5xl font-bold mb-2">
                            {expert.name}
                        </DialogTitle>
                        <p className="font-['Space_Mono'] text-[#1A1A1A]/70 text-base">
                            {expert.company}
                        </p>
                        <p className="font-['Space_Mono'] text-[#2A4D69] text-sm uppercase tracking-widest mt-2">
                            {expert.specialization}
                        </p>
                    </DialogHeader>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 bg-white border border-[#1A1A1A]/10 p-4">
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-1 text-[#2A4D69]">
                                <Star className="w-4 h-4 fill-current" />
                                <span className="font-['Space_Mono'] font-bold text-[13px]">{expert.rating}</span>
                            </div>
                            <span className="font-['Space_Mono'] text-[#1A1A1A]/50 text-[11px] uppercase">{expert.reviews} Reviews</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-1 text-[#2A4D69]">
                                <MapPin className="w-4 h-4" />
                                <span className="font-['Space_Mono'] font-bold text-[13px]">{expert.location}</span>
                            </div>
                            <span className="font-['Space_Mono'] text-[#1A1A1A]/50 text-[11px] uppercase">Service Area</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-1 text-[#2A4D69]">
                                <Calendar className="w-4 h-4" />
                                <span className="font-['Space_Mono'] font-bold text-[13px]">{expert.experience} Yrs</span>
                            </div>
                            <span className="font-['Space_Mono'] text-[#1A1A1A]/50 text-[11px] uppercase">Experience</span>
                        </div>
                        <div className="flex flex-col gap-1 justify-center">
                            <Link
                                to="/lead-form"
                                onClick={() => document.body.click()} // Close dialog implicitly
                                className="inline-flex items-center justify-center gap-1 bg-[#2A4D69] text-[#F5F5F0] px-3 py-2 hover:bg-[#1A3A4F] transition-colors font-['Space_Mono'] text-[11px] uppercase tracking-widest mt-1"
                            >
                                Hire
                            </Link>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Bio & Tags */}
                        <div>
                            <h3 className="font-['Cormorant_Garamond'] text-2xl font-bold mb-4">About the Specialist</h3>
                            <p className="font-['Space_Mono'] text-[#1A1A1A]/80 text-[14px] leading-relaxed mb-6">
                                {bio}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {expert.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="font-['Space_Mono'] px-2 py-1 bg-[#E8E8E0] text-[#1A1A1A] text-[11px]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Services & Contact */}
                        <div>
                            <h3 className="font-['Cormorant_Garamond'] text-2xl font-bold mb-4">Core Competencies</h3>
                            <div className="flex flex-col gap-3 mb-8">
                                {services.map((service, index) => (
                                    <div key={index} className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 mt-0.5 text-[#2A4D69] flex-shrink-0" />
                                        <span className="font-['Space_Mono'] text-[13px] text-[#1A1A1A]/80">
                                            {service}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="p-4 bg-[#2A4D69]/5 border border-[#2A4D69]/10">
                                <h4 className="font-['Space_Mono'] text-[11px] uppercase tracking-widest text-[#2A4D69] mb-4">Direct Contact Dummy</h4>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-2 text-[#1A1A1A]/70">
                                        <Phone className="w-4 h-4" />
                                        <span className="font-['Space_Mono'] text-[13px]">+31 73 {expert.id}00 0000</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[#1A1A1A]/70">
                                        <Mail className="w-4 h-4" />
                                        <span className="font-['Space_Mono'] text-[13px]">contact@{expert.company.toLowerCase().replace(/ /g, '')}.nl</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </DialogContent>
        </Dialog>
    );
}
