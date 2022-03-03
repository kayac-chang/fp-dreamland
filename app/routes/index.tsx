import info from "~/assets/svgs/info.svg";
import more from "~/assets/svgs/more.svg";

export default function Index() {
  return (
    <html className=" bg-fp-black">
      <div className="container mx-auto">
        <h1 className="text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-bl from-lavender to-violets">
          Product
        </h1>

        <div className="flex">
          <img src={info} alt="info" />
          <p className="text-fp-gray font-rubik px-4 leading-loose">
            Updated 3 hours ago
          </p>
          <img src={more} alt="more" />
        </div>

        <p className="text-white pt-9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ut dignissim sapien. Vivamus convallis massa sit amet justo varius
          ornare. Cras nibh tortor, tristique sit amet tortor nec, ullamcorper
          euismod enim. Aliquam tortor diam, pharetra in varius sit amet, mollis
          ut massa.
        </p>

        {/* image */}

        <h2 className="text-white text-2xl">
          Efficient, lightweight and simple
        </h2>
        <ul className="text-white list-disc ml-5 marker:text-violets">
          <li>Intuitive and quick to use</li>
          <li>Structure your content the way you need it</li>
        </ul>
      </div>
    </html>
  );
}
