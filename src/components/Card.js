import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
const Card = (props) => {
  return (
    <>
      {/* <!--Card 1--> */}
      <div className="rounded overflow-hidden shadow-lg pb-9">
        <img
          className="w-full mb-2"
          src={`../images/${props.item.image}`}
          alt="Norway"
        />
        {/* card info without image */}
        <div className="flex flex-col items-start justify-start gap-x-8 p-6">
          {/* card title with country location */}
          <div
            className="inline-flex items-center justify-start gap-3 mb-1
          "
          >
            <FaMapMarkerAlt className="fill-red-500" />
            <p className="text-xs  text-gray-800">{props.item.location}</p>
            <a
              href={props.item.googleMapsUrl}
              className="text-xs underline text-gray-400"
            >
              View on Google Maps
            </a>
          </div>
          <div className="text-xl lg:text-2xl font-bold text-gray-800 mb-1">
            {props.item.title}
          </div>
          <div class="flex flex-col items-start justify-start gap-x-10">
            <p class="text-xs font-bold text-gray-800 mb-1">
              {props.item.startDate} - {props.item.endDate}
            </p>
            <p class="w-full text-xs leading-none text-gray-800">
              {props.item.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
