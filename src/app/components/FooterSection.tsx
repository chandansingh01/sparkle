import StretchText from "./StretchText";

interface MainPageProps {
  title: string;
  subText: string;
  textLinkLeft: string;
  textLinkRight: string;
}

const MainPage = ({title,subText,textLinkLeft,textLinkRight}: MainPageProps) => {
  return (
    <div className=" flex flex-col bg-black text-white">
     
      <div className="flex-1 flex flex-col justify-start items-center">
      <p className="text-center text-slate-400 text-l max-w-xl -mb-24 -mt-24">
         {subText}
        </p>
        <StretchText word={title} transformOrigin={"top center"}/>
      </div>
      <div className="absolute bottom-0 right-16 left-16 flex justify-between items-end p-4">
        <div>
          <button className="text-gray-400 hover:text-white">
            {textLinkLeft}
          </button>
        </div>
        
        <div>
          <button className="text-gray-400 hover:text-white">
            {textLinkRight}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
