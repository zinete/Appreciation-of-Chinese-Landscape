/**
 * @ Author: ZhengHui
 * @ Create Time: 2024-01-25 22:27:56
 * @ Modified by: ZhengHui
 * @ Modified time: 2024-01-28 10:56:35
 * @ Description:
 */

import React, { useMemo } from "react";

interface IWapperCardProps {
  title: JSX.Element | null;
  children: React.ReactNode;
  isPadding?: boolean;
}

const WapperCard = ({
  children,
  title = null,
  isPadding = true,
}: IWapperCardProps) => {
  const isPaddingClassX = useMemo(() => {
    return isPadding
      ? "px-[30px] bg-white md:px-[20px] py-[60px] md:py-[30px]"
      : "pb-[60px] md:py-[30px]";
  }, [isPadding]);
  return (
    <main className={`${isPaddingClassX} `}>
      <section>
        <div className="flex flex-row items-center justify-center mb-[40px] md:mb-[20px]">
          {title}
        </div>
        {children}
      </section>
    </main>
  );
};
export default WapperCard;
