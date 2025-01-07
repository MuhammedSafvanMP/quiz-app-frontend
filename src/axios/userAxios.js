import axiosInstance from "./Axios";

export const answerAquiz = async ( id, options ) => {
    console.log(id, options);
    
    return await axiosInstance.put(`/users/quizzes/${id}`, options);
};


export const getAQuiz = (page) => {
    return axiosInstance.get("/users/quizzes", {
      params: { page },
    });
  };

export const  getAllQuizzes = () => {
    return  axiosInstance.get("/users/quizzes/answers")
}