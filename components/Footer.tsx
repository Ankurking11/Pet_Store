export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12 md:py-16">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:px-8 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-gray-900">Pet&apos;s Bay & Co</p>
          <p className="mt-2 text-gray-600">Shop no.1, Elite Premio</p>
          <p className="text-gray-600">Balewadi, Pune</p>
        </div>
        <div>
          <p className="font-bold text-gray-900">Hours</p>
          <p className="mt-2 text-gray-600">Monday - Sunday</p>
          <p className="text-gray-600">9:00 AM - 9:30 PM</p>
        </div>
        <div className="md:text-right">
          <p className="font-bold text-gray-900">Contact</p>
          <a className="mt-2 block font-semibold text-orange-600 hover:text-orange-700" href="tel:+918484086474">
            Call: +91 84840 86474
          </a>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-100 pt-6 text-center text-sm text-gray-500">
        <p>&copy; 2024 Pet&apos;s Bay & Co. All rights reserved.</p>
      </div>
    </footer>
  );
}
