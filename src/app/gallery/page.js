import Image from "next/image";
// import nextImage from "./../../../src/assets/next js image.jpeg";
import nextImage from "@/assets/next js image.jpeg";

const GalleryPage = () => {
  return (
    <div className="space-y-1">
      <h1 className="text-4xl text-center">This is Next JS Gallery Page</h1>
      <h3 className="text-xl text-center">Regular Image Tag</h3>
      <img
        src={nextImage}
        alt="next image"
        className="mx-auto w-[500px]"
      />
      <h3 className="text-xl text-center">Next JS Image component</h3>

      <Image
        className="mx-auto"
        src="https://images.unsplash.com/photo-1724596314963-c71d1e58204d?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="next image"
        width={500}
        height={500}
      />

      <h3 className="text-xl text-center">Local Image</h3>

      <Image
        className="mx-auto"
        src={nextImage}
        alt="next image"
        width={500}
        height={500}
      />
    </div>
  );
};

export default GalleryPage;
