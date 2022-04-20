import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
const Card = () => {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {/* <!--Card 1--> */}
      <div className="rounded overflow-hidden shadow-lg">
        <img className="w-full" src={"../images/japan.jpeg"} alt="Norway" />
        {/* card info without image */}
        <div className="flex flex-col items-start justify-start gap-x-8">
          {/* card title with country location */}
          <div
            className="inline-flex items-center justify-start gap-3
          "
          >
            <FaMapMarkerAlt className="fill-red-500" />
            <p className="text-xs  text-gray-800">JAPAN</p>
            <a
              href="https://www.google.com/maps/place/Mount+Fuji/@35.3606247,138.7185872,15z/data=!3m1!4b1!4m5!3m4!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634"
              className="text-xs underline text-gray-400"
            >
              View on Google Maps
            </a>
          </div>
          <div className="text-2xl font-bold text-gray-800">Mount Fuji</div>
          <div class="flex flex-col items-start justify-start gap-x-10">
            <p class="text-xs font-bold text-gray-800">
              12 Jan, 2021 - 24 Jan, 2021
            </p>
            <p class="w-full text-xs leading-none text-gray-800">
              Mount Fuji is the tallest mountain in Japan, standing at 3,776
              meters (12,380 feet). Mount Fuji is the single most popular
              tourist site in Japan, for both Japanese and foreign tourists.
            </p>
          </div>
        </div>
      </div>
      {/* <!--Card 2--> */}
      <div className="rounded overflow-hidden shadow-lg">
        <img className="w-full" src={"../images/norway.jpeg"} alt="Norway" />
        {/* card info without image */}
        <div className="flex flex-col items-start justify-start gap-x-8">
          {/* card title with country location */}
          <div
            className="inline-flex items-center justify-start gap-3
          "
          >
            <FaMapMarkerAlt className="fill-red-500" />
            <p className="text-xs  text-gray-800">JAPAN</p>
            <a
              href="https://www.google.com/maps/place/Mount+Fuji/@35.3606247,138.7185872,15z/data=!3m1!4b1!4m5!3m4!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634"
              className="text-xs underline text-gray-400"
            >
              View on Google Maps
            </a>
          </div>
          <div className="text-2xl font-bold text-gray-800">Mount Fuji</div>
          <div class="flex flex-col items-start justify-start gap-x-10">
            <p class="text-xs font-bold text-gray-800">
              12 Jan, 2021 - 24 Jan, 2021
            </p>
            <p class="w-full text-xs leading-none text-gray-800">
              Mount Fuji is the tallest mountain in Japan, standing at 3,776
              meters (12,380 feet). Mount Fuji is the single most popular
              tourist site in Japan, for both Japanese and foreign tourists.
            </p>
          </div>
        </div>
      </div>
      {/* <!--Card 3--> */}
      <div className="rounded overflow-hidden shadow-lg">
        <img className="w-full" src={"../images/australia.jpeg"} alt="Norway" />
        {/* card info without image */}
        <div className="flex flex-col items-start justify-start gap-x-8">
          {/* card title with country location */}
          <div
            className="inline-flex items-center justify-start gap-3
          "
          >
            <FaMapMarkerAlt className="fill-red-500" />
            <p className="text-xs  text-gray-800">JAPAN</p>
            <a
              href="https://www.google.com/maps/place/Mount+Fuji/@35.3606247,138.7185872,15z/data=!3m1!4b1!4m5!3m4!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634"
              className="text-xs underline text-gray-400"
            >
              View on Google Maps
            </a>
          </div>
          <div className="text-2xl font-bold text-gray-800">Mount Fuji</div>
          <div class="flex flex-col items-start justify-start gap-x-10">
            <p class="text-xs font-bold text-gray-800">
              12 Jan, 2021 - 24 Jan, 2021
            </p>
            <p class="w-full text-xs leading-none text-gray-800">
              Mount Fuji is the tallest mountain in Japan, standing at 3,776
              meters (12,380 feet). Mount Fuji is the single most popular
              tourist site in Japan, for both Japanese and foreign tourists.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
