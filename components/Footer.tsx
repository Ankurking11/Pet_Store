export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white pb-24 pt-10 md:pb-10">
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 text-sm text-gray-600 sm:px-6 lg:px-8 md:grid-cols-2">
        <div>
          <p className="text-base font-semibold text-gray-900">Pet’s Bay & Co</p>
          <p>Shop no.1, Elite Premio, Balewadi, Pune</p>
        </div>
        <div className="md:text-right">
          <p>Mon - Sun: 9:00 AM - 9:30 PM</p>
          <a className="font-medium text-amber-600" href="tel:+918484086474">
            Call: +91 84840 86474
          </a>
        </div>
      </div>
    </footer>
  );
}
