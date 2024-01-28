import { configResponsive, useResponsive } from "ahooks";

import CreateH5Page from "./page/h5";
import CreatePcPage from "./page/pc";
import "react-photo-view/dist/react-photo-view.css";
import Footer from "./components/Footer";
import ArtworksProvider from "./context/ArtworksContext";
configResponsive({
  md: 768,
});

export default function App() {
  const responsive = useResponsive();

  return (
    <ArtworksProvider>
      <div className="bg-[#F5F8FA]">
        {responsive?.md ? <CreatePcPage /> : <CreateH5Page />}
        <Footer />
      </div>
    </ArtworksProvider>
  );
}
