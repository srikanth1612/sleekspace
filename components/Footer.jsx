export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 text-sm py-4 px-6">
      
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        
        {/* LEFT */}
        <p>
          © {new Date().getFullYear()} Sleekspace Interiors. All rights reserved.
        </p>

        {/* RIGHT */}
        {/* <p>
          Designed by{" "}
          <span className="text-white font-medium">
            Nettem Software
          </span>
        </p> */}

      </div>

    </footer>
  );
}