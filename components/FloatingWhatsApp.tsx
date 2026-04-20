import { WHATSAPP_BASE } from "@/lib/utils";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_BASE}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-22 right-4 z-40 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-xl transition hover:scale-105 md:bottom-6 md:right-6"
    >
      WhatsApp Order
    </a>
  );
}
