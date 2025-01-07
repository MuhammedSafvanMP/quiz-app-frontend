import { answerAquiz } from "../../axios/userAxios";

export default function Quiz({
  aquiz,
  page,
  totalCount,
  handleNext,
  handlePrev,
}) {
  
  const handleSubmit = (val) => {
    answerAquiz(aquiz?.aQuiz[0]?._id, { options: val });
  };
  
  return (
    // <section className="w-[70%] h-[65vh] flex flex-col justify-center gap-4">
    //   <div className="shadow-xl w-full h-[10vh] p-3 rounded-md">
    //     <h5>Question {aquiz?.aQuiz[0]?.count}</h5>
    //     <p className="text-lg w-[85%] leading-2 overflow-wrap break-word">
    //       {aquiz?.aQuiz[0].question}
    //     </p>
    //   </div>

    //   <ul className="flex flex-col gap-3">
    //     {aquiz?.aQuiz[0].options.map((val, index) => {
    //       let bgColor = "";
    //       if (aquiz?.aQuiz[0]?.isAnswer[0] !== 0) {
    //         if (val === aquiz?.aQuiz[0]?.answer) {
    //           bgColor = "bg-green-300"; 
    //         } else if (val === aquiz?.aQuiz[0]?.userAnswer) {
    //           bgColor = "bg-red-300"; 
    //         }
    //       }

    //       return (
    //         <li
    //           key={index}
    //           className={`shadow-xl cursor-pointer p-3 rounded-md ${bgColor}`}
    //           onClick={() => handleSubmit(val)}
    //           style={{
    //             pointerEvents:
    //               aquiz?.aQuiz[0]?.isAnswer[0] !== 0 ? "none" : "auto",
    //           }}
    //         >
    //           {val}
    //         </li>
    //       );
    //     })}

    //     <div className="flex justify-center gap-14">
    //       <button
    //         className={`shadow-xl py-3 px-5 rounded-md ${
    //           page === 1 ? "opacity-50 cursor-not-allowed" : ""
    //         }`}
    //         onClick={handlePrev}
    //         disabled={page === 1}
    //       >
    //         Prev
    //       </button>
    //       <button
    //         className={`shadow-xl py-3 px-5 rounded-md ${
    //           page === totalCount ? "opacity-50 cursor-not-allowed" : ""
    //         }`}
    //         onClick={handleNext}
    //         disabled={page === totalCount}
    //       >
    //         Next
    //       </button>
    //     </div>
    //   </ul>

    //   {aquiz?.aQuiz[0]?.isAnswer[0] !== 0 && (
    //     <div className="shadow-xl w-full h-[12vh] p-3 rounded-md mt-8">
    //       <h5>Explanation</h5>
    //       <p className="pl-4 text-lg w-[85%] leading-2 overflow-wrap break-word">
    //         {aquiz?.aQuiz[0].explanation}
    //       </p>
    //     </div>
    //   )}
    // </section>

    <section className="w-full sm:w-[70%] h-auto sm:h-[65vh] flex flex-col justify-center gap-4 p-4 sm:p-0">
  <div className="shadow-xl w-full h-auto sm:h-[10vh] p-3 rounded-md">
    <h5 className="text-sm sm:text-base">Question {aquiz?.aQuiz[0]?.count}</h5>
    <p className="text-sm sm:text-lg w-full sm:w-[85%] leading-5 overflow-wrap break-word">
      {aquiz?.aQuiz[0].question}
    </p>
  </div>

  <ul className="flex flex-col gap-3">
    {aquiz?.aQuiz[0].options.map((val, index) => {
      let bgColor = "";
      if (aquiz?.aQuiz[0]?.isAnswer[0] !== 0) {
        if (val === aquiz?.aQuiz[0]?.answer) {
          bgColor = "bg-green-300"; 
        } else if (val === aquiz?.aQuiz[0]?.userAnswer) {
          bgColor = "bg-red-300"; 
        }
      }

      return (
        <li
          key={index}
          className={`shadow-xl cursor-pointer p-3 text-sm sm:text-base rounded-md ${bgColor}`}
          onClick={() => handleSubmit(val)}
          style={{
            pointerEvents: aquiz?.aQuiz[0]?.isAnswer[0] !== 0 ? "none" : "auto",
          }}
        >
          {val}
        </li>
      );
    })}

    <div className="flex justify-center gap-4 sm:gap-14">
      <button
        className={`shadow-xl py-2 px-3 sm:py-3 sm:px-5 rounded-md ${
          page === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handlePrev}
        disabled={page === 1}
      >
        Prev
      </button>
      <button
        className={`shadow-xl py-2 px-3 sm:py-3 sm:px-5 rounded-md ${
          page === totalCount ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handleNext}
        disabled={page === totalCount}
      >
        Next
      </button>
    </div>
  </ul>

  {aquiz?.aQuiz[0]?.isAnswer[0] !== 0 && (
    <div className="shadow-xl w-full h-auto sm:h-[12vh] p-3 rounded-md mt-8">
      <h5 className="text-sm sm:text-base">Explanation</h5>
      <p className="pl-4 text-sm sm:text-lg w-full sm:w-[85%] leading-5 overflow-wrap break-word">
        {aquiz?.aQuiz[0].explanation}
      </p>
    </div>
  )}
</section>

  );
}
