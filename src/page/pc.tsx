/**
 * @ Author: ZhengHui
 * @ Create Time: 2024-01-25 22:58:34
 * @ Modified by: ZhengHui
 * @ Modified time: 2024-01-28 12:48:04
 * @ Description:
 */

import "swiper/css";
import "swiper/css/effect-fade";

import WapperCard from "../components/WapperCard";
import PictureCard from "../components/PictureCard";
import { useArtworks } from "../context/ArtworksContext";
import Modal from "../components/Modal";
import React from "react";
import { Artwork } from "../model/listworks/type";
import { exhibitionInfo } from "../model/listworks/data";

export default function CreatePcPage() {
  const artworks = useArtworks();

  const [openModal, setOpenModal] = React.useState(false);
  const [modalData, setModalData] = React.useState<Artwork>();

  return (
    <div className="bg-[#F5F8FA]">
      {/* bg box */}
      <div className="w-full relative">
        <img src="./pc_banner.png" className="md:w-full md:block" alt="" />
        <div className="absolute inset-0 container mx-auto">
          <img
            src="./banner_logo.png"
            className="absolute md:top-[48px] right-[0px] "
            alt=""
          />
          <img
            src="./banner_title.png"
            alt=""
            className="absolute md:top-[165px] right-[0px] md:w-[403px]"
          />
          <img
            src="./pc_banner_des.png"
            className="absolute bottom-0 right-0"
            alt=""
          />
        </div>
      </div>

      {/* red bar pc */}
      <div className="md:h-[80px] bg-[#B81B22] hidden md:block">
        <div className="flex flex-row h-full justify-between mx-auto container items-center">
          <div className="text-white">
            <span className="md:mr-[20px] text-base font-medium">主办:</span>
            {[
              "中华艺术宫（上海美术馆）",
              "清华大学艺术博物馆",
              "上海中国画院",
              "上海市美术家协会",
            ].map((v) => (
              <span key={v} className="mr-[10px]">
                {v}
              </span>
            ))}
          </div>
          <img src="./bar_icon.svg" alt="" />
        </div>
      </div>
      <div className="container mx-auto md:mb-[60px]">
        <div className="flex flex-row">
          {/* left */}
          <div className="flex-1">
            <div className="text-center md:h-[92px] flex items-center justify-center">
              <img src="./title3.svg" alt="" className="md:w-[196px]" />
            </div>
            <div className="grid xl:grid-cols-3 md:gap-y-[24px] md:gap-x-[20px] md:grid-cols-2">
              <PictureCard
                data={artworks}
                onPress={(v) => {
                  setModalData(v);
                  setOpenModal(true);
                }}
              />
            </div>
          </div>
          {/* right */}
          <div className="md:w-[350px] md:ml-[20px] md:pt-[92px]">
            <section className="md:mb-[20px]">
              <WapperCard
                title={
                  <img src="./title1.svg" alt="" className="md:w-[148px]" />
                }
              >
                <ul>
                  {exhibitionInfo.map((i) => {
                    return (
                      <li className="md:mb-[12px]" key={i.info}>
                        <div className="flex items-start">
                          <div className="flex flex-row ">
                            <img
                              width={14}
                              height={14}
                              src={i.icon}
                              alt=""
                              className="md:w-[14px] md:h-[14px] md:mr-[4px]"
                            />
                            <div className="md:text-[12px] md:w-[60px] text-[#000] font-medium">
                              {i.title}
                            </div>
                          </div>
                          <div className="md:text-[12px] flex-[2]">
                            <span className="text-[#4F4F4F] font-normal">
                              {i.info}
                            </span>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </WapperCard>
            </section>
            <section>
              <WapperCard
                title={
                  <img src="./title2.svg" alt="" className="md:w-[148px]" />
                }
              >
                <span className="md:text-[14px] md:indent-[28px] inline-block font-normal md:leading-[24px] text-[#4F4F4F]">
                  今年是中法建交60周年，也是中法文化旅游年，因此上海市文化和旅游局指导中华艺术宫（上海美术馆）联手清华大学艺术博物馆、中国上海画院、上海市美术家协会，策划了林风眠、吴冠中艺术大展，以“中国式风景”为主题，遴选了两位艺术家大约200幅佳作，涵盖他们在不同时期创作的中国画、油画、水彩、素描各门类艺术精品，展现他们师生二人融通中西古今的开放视野，传统精髓与时代经验兼备的中国气派。我们真诚欢迎更多市民游客走进上海美术馆，沉浸式体验“中国式风景”，从中华文化和中华美学中得到心灵的滋养、汲取奋进的力量。
                </span>
              </WapperCard>
            </section>
          </div>
        </div>
      </div>
      {/* modal */}
      <div>
        <Modal
          {...modalData}
          openModal={openModal}
          closeModal={() => setOpenModal(false)}
        />
      </div>
    </div>
  );
}
