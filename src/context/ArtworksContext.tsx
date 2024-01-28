/**
 * @ Author: ZhengHui
 * @ Create Time: 2024-01-26 23:46:06
 * @ Modified by: ZhengHui
 * @ Modified time: 2024-01-27 18:24:46
 * @ Description:
 */

import React, { createContext, useContext } from "react";
import { Artwork } from "../model/listworks/type";
import { artworkList } from "../model/listworks/data";
const ArtworksContext = createContext<{ data?: Artwork[] } | undefined>(
  undefined
);

const ArtworksProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ArtworksContext.Provider value={{ data: artworkList }}>
      {children}
    </ArtworksContext.Provider>
  );
};

export default ArtworksProvider;

const useArtworks = () => {
  const context = useContext(ArtworksContext);

  if (!context) {
    throw new Error("useArtworks must be used within an ArtworksProvider");
  }

  return context.data;
};

export { ArtworksProvider, useArtworks };
