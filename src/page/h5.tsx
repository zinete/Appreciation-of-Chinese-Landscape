import "swiper/css";
import "swiper/css/effect-fade";

import WapperCard from "../components/WapperCard";
import PictureCard from "../components/PictureCard";
import { useArtworks } from "../context/ArtworksContext";
import Modal from "../components/Modal";
import React from "react";
import { Artwork } from "../model/listworks/type";
import { exhibitionInfo } from "../model/listworks/data";

export default function CreateH5Page() {
  const artworks = useArtworks();
  const [openModal, setOpenModal] = React.useState(false);
  const [modalData, setModalData] = React.useState<Artwork>();

  return (
    <main className="container mx-auto bg-[#F5F8FA]">
      {/* bg box */}
      <section className="w-full relative h-[500px]">
        <img src="./mobile_banner.png" alt="" className="w-full h-full" />
        <div className="absolute inset-0">
          <img
            src="./banner_logo.png"
            className="absolute top-[30px] right-[30px] w-[98px]"
            alt=""
          />
          <img
            src="./banner_title.png"
            alt=""
            width={430}
            className="w-[403px] absolute top-[152px] right-[30px]"
          />
          <img
            src="./mobile_banner_des.png"
            className="absolute bottom-0 px-[23px]"
            alt=""
          />
        </div>
      </section>

      {/* red bar h5 */}
      <section
        className="md:hidden block px-[25px] mb-[80px]"
        style={{
          background: "linear-gradient(180deg, #B81C22 30%, #F5F8FA 70%)",
        }}
      >
        <div className="flex flex-row items-end justify-between mb-[28px] pt-[30px]">
          <div className="flex-2 text-white">
            <h3 className="text-[20px] font-medium">主办：</h3>
            <div className="text-[20px] mt-[10px]  leading-[32px] font-normal opacity-80 flex flex-row">
              <div>
                <div>中华艺术宫（上海美术馆）</div>
                <div>上海中国画院</div>
              </div>
              <div className="ml-[10px]">
                <div>清华大学艺术博物馆</div>
                <div>上海市美术家协会</div>
              </div>
            </div>
          </div>
          <div className="w-[224px]">
            <img src="./bar_icon.svg" alt="" />
          </div>
        </div>
        <WapperCard
          title={<img src="./title1.svg" alt="" className="w-[296px]" />}
        >
          <ul>
            {exhibitionInfo.map((i) => {
              return (
                <li className="mb-[24px]" key={i.info}>
                  <div className="flex items-start">
                    <div className="flex flex-row ">
                      <img
                        width={28}
                        height={28}
                        src={i.icon}
                        alt=""
                        className="w-[28px] h-[28px] mr-[8px]"
                      />
                      <div className="text-[24px] w-[120px] mr-[6px] text-[#000] font-medium">
                        {i.title}
                      </div>
                    </div>
                    <div className="text-[24px] flex-1">
                      <span className="text-[#4F4F4F] font-normal text-justify">
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
      <section className="px-[25px] mb-[80px]">
        <WapperCard
          title={<img src="./title2.svg" alt="" className="w-[296px]" />}
        >
          <span className="text-[28px] font-normal text-justify  text-[#4F4F4F] leading-[46px] indent-[56px] inline-block">
            由上海市文化和旅游局指导，中华艺术宫（上海美术馆）联手清华大学艺术博物馆、上海中国画院、上海市美术家协会共同主办的“中国式风景——林风眠吴冠中艺术大展”在中华艺术宫（上海美术馆）正式拉开帷幕，汇聚两位中国艺术大师200件（组）代表性作品，以全新的策展和恢弘的气魄，为观众奉献一场两大画坛巨匠的史诗级艺术对话。
          </span>
          <span className="text-[28px] font-normal text-justify  text-[#4F4F4F] leading-[46px] indent-[56px] inline-block">
            作为首次全面回顾两位艺术大师艺术成就的大型展览，“中国式风景——林风眠吴冠中艺术大展”以沪上国有美术机构馆藏精品为核心，集聚京、沪、粤、浙各大艺术机构林风眠、吴冠中珍贵藏品，以全新学术脉络深度梳理两位艺术大师的探索、成就与影响，呈现林风眠、吴冠中对时代之问的“回答”——融通中西古今的创新精神，用艺术探索开创的“中国式风景”。
          </span>
        </WapperCard>
      </section>
      <section className="px-[25px] mb-[80px]">
        <WapperCard
          title={<img src="./title3.svg" alt="" className="w-[380px]" />}
          isPadding={false}
        >
          <div className="grid grid-cols-2 gap-x-[10px] gap-y-[40px]">
            <PictureCard
              data={artworks}
              onPress={(v) => {
                setModalData(v);
                setOpenModal(true);
              }}
            />
          </div>
        </WapperCard>
      </section>
      {/* modal */}
      <div>
        <Modal
          {...modalData}
          openModal={openModal}
          closeModal={() => setOpenModal(false)}
        />
      </div>
    </main>
  );
}
