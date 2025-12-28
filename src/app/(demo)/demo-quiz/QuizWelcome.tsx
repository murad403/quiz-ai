"use client";
import { FileText, Clock } from "lucide-react";
import { useForm } from "react-hook-form";

interface QuizWelcomeProps {
  title: string;
  description: string;
  totalQuestions: number;
  estimatedTime: number;
  onStart: (name: string) => void;
}

interface FormData {
  userName: string;
}

const QuizWelcome = ({ title, description, totalQuestions, estimatedTime, onStart}: QuizWelcomeProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    onStart(data.userName);
    console.log(data)
  };

  return (
    <div>
      <div className="w-full rounded-xl border border-gray-700/50 bg-card md:p-7 p-4">
        <h1 className="text-subheading font-bold text-main mb-2">
          {title}
        </h1>
        <p className="text-title text-paragraph">{description}</p>

        <div className="flex items-center gap-6 my-6 border-y border-gray-700/50 py-4">
          <div className="flex items-center gap-2">
            <FileText className="text-green-500" size={20} />
            <span className="text-sm font-medium text-main">{totalQuestions} Questions</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="text-green-500" size={20} />
            <span className="text-sm font-medium text-main">~{estimatedTime} minutes</span>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label htmlFor="userName" className="text-main font-semibold text-paragraph block mb-2">
              Your Name
            </label>
            <input
              id="userName"
              type="text"
              {...register("userName", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
              className="w-full appearance-none px-4 py-2 border border-gray-700/70 rounded-lg focus:outline-2 outline-header text-title"
              placeholder="Enter your name"
            />
            {errors.userName && (
              <p className="mt-2 text-sm text-red-500">{errors.userName.message}</p>
            )}
          </div>

          <button
            type="submit"
             className="text-main font-semibold w-full text-center py-2 rounded-lg transition-colors bg-header hover:bg-header/90"
          >
            Start Quiz
          </button>
        </form>
      </div>
    </div>
  );
}

export default QuizWelcome;