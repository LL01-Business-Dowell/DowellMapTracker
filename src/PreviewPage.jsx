import { useGlobalContext } from "./Context/PreviewContext";
import QRCode from "qrcode.react";

const PreviewPage = () => {
  const { surveys, loading } = useGlobalContext();
  return (
    <main className="w-full h-full">
      <div>
        {loading ? (
          <div className="w-full h-screen flex justify-center items-center text-[20px] md:text-[24px]">
            Loading..........
          </div>
        ) : (
          <div className="w-full h-full flex flex-col justify-center items-center">
            {surveys.map((survey) => (
              <div
                key={survey.id}
                className="w-full h-full flex  justify-center items-center mt-[40px]"
              >
                <div>
                  <QRCode value={survey.qr_link} size={80} />
                </div>
                <div className="ml-[10px]">
                  <p>{survey.brand_name}</p>
                  <p>{survey.promotional}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* <h1 className="text-red-600 ">i am preview</h1> */}
      </div>
    </main>
  );
};

export default PreviewPage;
