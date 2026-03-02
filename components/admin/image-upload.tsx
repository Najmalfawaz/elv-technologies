"use client";

import { UploadButton, UploadDropzone } from "@/lib/uploadthing";
import { OurFileRouter } from "@/app/api/uploadthing/core";
import Image from "next/image";
import { useState } from "react";
import { X, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface ImageUploadProps {
    value: string;
    onChange: (url: string) => void;
    onRemove: () => void;
    endpoint: keyof OurFileRouter;
}

export const ImageUpload = ({
    value,
    onChange,
    onRemove,
    endpoint,
}: ImageUploadProps) => {
    const [isUploading, setIsUploading] = useState(false);

    if (value) {
        return (
            <div className="relative aspect-video w-full max-w-[400px] mt-2 rounded-2xl overflow-hidden group">
                <Image
                    fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
src={value}
                    alt="Upload"
                    className="object-cover transition-transform group-hover:scale-105"
                />
                <button
                    onClick={onRemove}
                    className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-red-700 active:scale-95"
                    type="button"
                >
                    <X className="h-4 w-4" />
                </button>
            </div>
        );
    }

    return (
        <div className="mt-2 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl p-8 bg-slate-50/50 dark:bg-slate-900/50 transition-colors hover:border-red-500/50">
            <UploadDropzone
                endpoint={endpoint}
                onUploadBegin={() => setIsUploading(true)}
                onClientUploadComplete={(res) => {
                    onChange(res?.[0].url);
                    setIsUploading(false);
                    toast.success("Image uploaded successfully");
                }}
                onUploadError={(error: Error) => {
                    setIsUploading(false);
                    toast.error(`Upload failed: ${error.message}`);
                }}
                appearance={{
                    button: "bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl px-6 py-2 transition-all",
                    container: "border-none bg-transparent",
                    allowedContent: "text-slate-500 dark:text-slate-400 text-sm mt-2",
                    label: "text-slate-900 dark:text-white font-semibold text-lg"
                }}
            />
            {isUploading && (
                <div className="flex items-center justify-center mt-4 text-red-600 gap-2 font-medium">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Uploading to secure storage...
                </div>
            )}
        </div>
    );
};
