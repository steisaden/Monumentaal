import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./dialog";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface InfoModalProps {
    trigger: React.ReactNode;
    title: string;
    description: string;
    imageAlt?: string;
    imageSrc?: string;
}

export function InfoModal({ trigger, title, description, imageAlt, imageSrc }: InfoModalProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-[#F5F5F0] border-[#1A1A1A]/20 rounded-none">
                {imageSrc && (
                    <div className="relative h-48 sm:h-64 w-full">
                        <ImageWithFallback
                            src={imageSrc}
                            alt={imageAlt || title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}
                <div className="p-8">
                    <DialogHeader className="mb-6">
                        <DialogTitle className="font-['Cormorant_Garamond'] text-[#1A1A1A] text-3xl font-bold">
                            {title}
                        </DialogTitle>
                    </DialogHeader>
                    <DialogDescription className="font-['Space_Mono'] text-[#1A1A1A]/80 text-[15px] leading-relaxed">
                        {description}
                    </DialogDescription>
                </div>
            </DialogContent>
        </Dialog>
    );
}
