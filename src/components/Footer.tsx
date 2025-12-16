
export default function Footer() {
  return (
    <footer className="bg-[#d9d5cd] py-16">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-10">
        {/* Replace Next.js Image with standard img */}
        <img
          src="/CITADEL-HOUSING.png"
          alt="Citadel Housing"
          width={390}
          height={174}
          className="mx-auto"
        />

        <div className="flex flex-col md:flex-row justify-center gap-8 text-sm text-black">
          {/* Replace Next.js Link with standard a */}
          <a href="/about-us">About Us</a>
          <a href="/candidate-services">Candidate Services</a>
          <a href="/cv">Quick Drop CV</a>
        </div>
      </div>
    </footer>
  );
}
