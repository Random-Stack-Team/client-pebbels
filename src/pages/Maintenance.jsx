import logo from "../assets/logo.png";

export default function Maintenance() {
  return (
    <main
      className="min-h-screen min-h-[100dvh] flex items-center justify-center px-6"
      style={{ background: "#FAF7F2", fontFamily: "Inter, sans-serif" }}
    >
      <div className="text-center">
        <img
          src={logo}
          alt="Pebbles Serviced Apartments"
          className="h-14 md:h-16 w-auto object-contain mx-auto mb-8"
        />
        <h1
          className="font-serif font-medium text-[#3A3A3A] tracking-[-0.02em]"
          style={{ fontFamily: '"EB Garamond", serif', fontSize: "clamp(28px, 4vw, 36px)" }}
        >
          We&apos;ll be back soon
        </h1>
        <p className="mt-3 text-[14px] tracking-[0.08em] uppercase text-[#8A7A5A] font-medium">
          Under Maintenance
        </p>
      </div>
    </main>
  );
}
