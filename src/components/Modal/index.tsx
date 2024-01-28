/**
 * @ Author: ZhengHui
 * @ Create Time: 2024-01-27 14:30:51
 * @ Modified by: ZhengHui
 * @ Modified time: 2024-01-27 23:53:11
 * @ Description:
 */

import { useSpring, animated } from "@react-spring/web";
import { Artwork } from "../../model/listworks/type";
import { useEffect, useRef, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

interface IModalProps extends Artwork {
  children?: React.ReactNode;
  openModal?: boolean;
  closeModal?: () => void;
}
const Modal = ({
  description,
  imageUrl,
  openModal,
  author,
  category,
  creationYear,
  source,
  name,
  closeModal,
}: IModalProps) => {
  const childRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const styles = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: openModal ? 1 : 0,
    },
    config: { duration: 420, ease: [0.43, 0.13, 0.23, 0.96] },
  });

  const { opacity } = useSpring({
    opacity: scrollY > 200 ? 0 : 1,
  });
  const handleChildScroll = () => {
    setScrollY(childRef.current?.scrollTop || 0);
  };
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  useEffect(() => {
    if (childRef.current) {
      childRef.current.addEventListener("scroll", handleChildScroll);
    }
    return () => {
      if (childRef.current) {
        childRef.current.removeEventListener("scroll", handleChildScroll);
      }
    };
  }, []);

  return (
    <>
      {openModal && (
        <animated.div
          style={styles}
          onClick={(e) => e.stopPropagation()}
          className="w-screen h-screen fixed overflow-hidden inset-0 md:bg-[#000000B2] bg-white"
        >
          <div className="w-full h-full overflow-scroll" ref={childRef}>
            <div className="px-[65px] md:px-[32.5px] pt-[40px] md:pt-[33.5px] pb-[300px] md:pb-[20px] md:bg-white md:mx-[40%] md:my-[82px]">
              <PhotoProvider maskClosable>
                <PhotoView src={imageUrl}>
                  <img
                    src={imageUrl}
                    alt=""
                    className="px-[40px] md:px-[24px] mb-[40px] md:mb-[20px]"
                  />
                </PhotoView>
              </PhotoProvider>
              <div className="text-center">
                <h2 className="text-[#000] text-[36px] font-medium md:text-[18px] md:mb-[15px] mb-[30px]">
                  {name}
                </h2>
                <div className="flex flex-row justify-between px-[30px] md:px-[15px] leading-[56px] md:leading-[28px] font-normal text-[30px] md:text-[14px] text-[#4F4F4F]">
                  <ul className="mb-[16px] md:mb-[20px] text-left">
                    <li>作者：{author}</li>
                    <li>品类：{category}</li>
                  </ul>
                  <ul className="text-left">
                    <li>创作年代：{creationYear}</li>
                    <li>来源：{source}</li>
                  </ul>
                </div>
                <p className="text-justify md:leading-[26px] md:mt-[0px] mt-[30px] md:text-[14px] text-[30px] font-normal text-[#4F4F4F]">
                  {description}
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
            className="md:w-[44px] md:h-[44px] cursor-pointer flex items-center justify-center rounded-full md:top-[30px] md:right-[30px] absolute"
            onClick={() => {
              closeModal && closeModal();
            }}
          >
            <img
              src="./close.svg"
              alt=""
              width={24}
              className="md:*:w-[24px]"
            />
          </div>

          <animated.div
            style={{
              opacity,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
            className="md:hidden flex items-center justify-center bottom-[90px] left-[50%] ml-[-45px] cursor-pointer rounded-full absolute w-[88px] h-[88px]"
            onClick={() => {
              closeModal && closeModal();
            }}
          >
            <img src="./close.svg" alt="" width={48} className="w-[48px]" />
          </animated.div>
        </animated.div>
      )}
    </>
  );
};

export default Modal;
