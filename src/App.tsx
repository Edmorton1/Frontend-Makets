import { Images } from "./components/common/Images";
import { imagesData } from "./components/common/data";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { UiKit } from "./components/ui-kit/uiKit";
import { ZeroDesign } from "./components/zero-deign/ZeroDesign";

function App() {
  return (
    <>
      <Header />
      <UiKit />
      <ZeroDesign />
      {Object.entries(imagesData).map(([name, data]) => {
        return <Images key={name} name={name} cards={data} />;
      })}
      <Footer />
    </>
  );
}

export default App;
