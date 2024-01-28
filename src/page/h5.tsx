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
          <span className="text-[28px] font-normal text-[#4F4F4F]">
            今年是中法建交60周年，也是中法文化旅游年，因此上海市文化和旅游局指导中华艺术宫（上海美术馆）联手清华大学艺术博物馆、中国上海画院、上海市美术家协会，策划了林风眠、吴冠中艺术大展，以“中国式风景”为主题，遴选了两位艺术家大约200幅佳作，涵盖他们在不同时期创作的中国画、油画、水彩、素描各门类艺术精品，展现他们师生二人融通中西古今的开放视野，传统精髓与时代经验兼备的中国气派。我们真诚欢迎更多市民游客走进上海美术馆，沉浸式体验“中国式风景”，从中华文化和中华美学中得到心灵的滋养、汲取奋进的力量。
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
