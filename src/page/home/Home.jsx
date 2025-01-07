import React, { useState, useEffect } from "react";
import Quiz from "../../components/quiz/Quiz";
import Points from "../../components/points/Points";
import { getAQuiz } from "../../axios/userAxios";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [aquiz, setAquiz] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);

  const getData = async () => {
    try {
      const response = await getAQuiz(page);
      setAquiz(response.data);
      setTotalCount(response.data.quizCounts);
    } catch (error) {
      console.error("Error fetching quizzes:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [aquiz]);

  const handleNext = () => {
    setSearchParams({ page: page + 1 });
  };

  const handlePrev = () => {
    if (page > 1) {
      setSearchParams({ page: page - 1 });
    }
  };

  return (

    // <header className="  h-[100vh] w-[100%] bg-[#3686FF] flex flex-col gap-20 items-center justify-center">
    //   <div className="bg-white p-6 w-[50%] text-center rounded-xl text-2xl font-bold">
    //     <h1 className="text-red-600">Quiz Application UI</h1>
    //   </div>

    //   <div className="w-[70%] bg-white h-[70vh] rounded-xl">
    //     <h1 className="text-center p-5">Quiz Title</h1>
    //     <div className="flex items-center  justify-evenly ">
    //       <Quiz
    //         aquiz={aquiz}
    //         page={page}
    //         totalCount={totalCount}
    //         handleNext={handleNext}
    //         handlePrev={handlePrev}
    //       />
    //       <Points aquiz={aquiz} />
    //     </div>
    //   </div>
    // </header>

    <header className="h-screen w-full bg-[#3686FF] flex flex-col gap-6 sm:gap-10 items-center justify-center">
  <div className="bg-white p-4 sm:p-6 w-[90%] sm:w-[50%] text-center rounded-xl text-lg sm:text-2xl font-bold">
    <h1 className="text-red-600">Quiz Application UI</h1>
  </div>

  {/* <div className="w-[90%]   sm:w-[70%] bg-white h-[80vh] sm:h-[70vh] rounded-xl"> */}
  <div className="w-[90%] bg-white rounded-xl h-[80vh] sm:w-[70%] sm:h-[75vh] lg:h-[73vh]">

    <h1 className="text-center p-3 sm:p-5 text-lg sm:text-xl font-semibold">Quiz Title</h1>
    <div className="flex flex-col sm:flex-row items-center justify-evenly p-4">
      <Quiz
        aquiz={aquiz}
        page={page}
        totalCount={totalCount}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
      <Points aquiz={aquiz} />
    </div>
  </div>
</header>

  );
}
