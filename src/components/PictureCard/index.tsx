/**
 * @ Author: ZhengHui
 * @ Create Time: 2024-01-25 20:34:03
 * @ Modified by: ZhengHui
 * @ Modified time: 2024-01-29 22:27:19
 * @ Description:
 */

import { Artwork } from "../../model/listworks/type";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
interface IPictureCardProps {
  data?: Artwork[];
  onPress: (item: Artwork) => void;
}

const PictureCard = ({ data = [], onPress }: IPictureCardProps) => {
  const onPressCallback = (item: Artwork) => {
    if (item) {
      onPress(item);
    }
  };
  return (
    <>
      {data?.map((item, index) => {
        return (
          <div key={index}>
            <div
              className="h-[464px] md:h-auto md:p-[10px] cursor-pointer group md:hover:bg-[#B81C22] transition-all duration-300 ease-linear text-white bg-white"
              onClick={() => {
                onPressCallback(item);
              }}
            >
              <LazyLoadImage
                placeholderSrc="./placeholder.png"
                effect="blur"
                title={item?.description}
                src={item?.imageUrl ?? "./placeholder.png"}
                alt={item.name}
                width={"100%"}
                className="h-[320px] md:h-[346px] w-full object-cover object-top bg-[#EDEFF2] border-none"
              />
              <div className="p-[20px] md:px-[12px] md:py-[10px]">
                <span className="text-[#000000] font-medium text-[30px] md:font-normal md:text-[18px] md:mb-[10px] md:group-hover:text-[#fff]">
                  {item?.name}
                </span>
                <p className="text-[#4F4F4F] text-[26px] font-normal md:text-[14px] md:group-hover:text-[#fff] md:group-hover:opacity-80 ">
                  {item?.author}
                </p>
              </div>
            </div>
          </div>
          //
        );
      })}
    </>
  );
};

export default PictureCard;
