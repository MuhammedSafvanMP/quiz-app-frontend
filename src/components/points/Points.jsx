import React, { useEffect, useState } from 'react'
import { getAllQuizzes } from '../../axios/userAxios';

export default function Points({ aquiz }) {

   const [quizzesCounts, setQuizzesCounts] = useState([])
  
    const getData = async () => {
       const response  = await getAllQuizzes()
       return setQuizzesCounts(response.data);
    }
  
    useEffect(() => {
     getData(); 
    }, [quizzesCounts])


  return (
    // <aside className="w-[25%] h-[59vh] flex flex-col gap-8 shadow-xl rounded-md">
    //     <div className='flex justify-around gap-8'>
    //         <h5>Question {aquiz?.aQuiz[0]?.count}/{quizzesCounts.quizCounts}</h5>
    //         <h5>Need Help?</h5>
    //     </div>

    //     <ul className='flex flex-wrap justify-center gap-5 '>
    //       {
    //         quizzesCounts?.allQuiz?.map((number) => {
    //           let backgroundColor = '';
    //           let textColor = '';
    //           if (number?.isAnswer?.[0] === 1) {
    //             backgroundColor = 'bg-[#A8BCF9]';
    //             textColor = 'text-white';
    //           } else if (number?.isAnswer?.[0] === 2) {
    //             backgroundColor = 'bg-[#F9AFB0]';
    //              textColor = 'text-white';
    //           } else {
    //             backgroundColor = 'bg-[#C2C2C2]';
    //             textColor = 'text-balck';
    //           }

    //           return (
    //             <li key={number?._id} className={`w-10 h-10 text-center p-2 rounded-full ${backgroundColor} ${textColor}`}>
    //               {number?.count}
    //             </li>
    //           )
    //         })
    //       }
    //     </ul>
    // </aside>

    <aside className="w-full sm:w-[25%] h-auto sm:h-[59vh] flex flex-col gap-4 sm:gap-8 shadow-xl rounded-md p-4 sm:p-0">
  <div className="flex flex-wrap justify-around gap-2 sm:gap-8 text-sm sm:text-base">
    <h5>Question {aquiz?.aQuiz[0]?.count}/{quizzesCounts.quizCounts}</h5>
    <h5 className="text-blue-500">Need Help?</h5>
  </div>

  <ul className="flex flex-wrap justify-center gap-5">
    {quizzesCounts?.allQuiz?.map((number) => {
      let backgroundColor = '';
      let textColor = '';
      if (number?.isAnswer?.[0] === 1) {
        backgroundColor = 'bg-[#A8BCF9]';
        textColor = 'text-white';
      } else if (number?.isAnswer?.[0] === 2) {
        backgroundColor = 'bg-[#F9AFB0]';
        textColor = 'text-white';
      } else {
        backgroundColor = 'bg-[#C2C2C2]';
        textColor = 'text-black';
      }

      return (
        <li
          key={number?._id}
          className={`w-10 h-10 sm:w-10 sm:h-10 text-center p-2 rounded-full ${backgroundColor} ${textColor}`}
        >
          {number?.count}
        </li>
      );
    })}
  </ul>
</aside>

  )
}
