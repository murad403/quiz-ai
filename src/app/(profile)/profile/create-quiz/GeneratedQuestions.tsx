"use client"
import { useState } from 'react';
import { Check } from 'lucide-react';

const GeneratedQuestions = () => {
    const [questions, setQuestions] = useState([
        {
            id: 1,
            questionText: "Sample question 1 about df",
            options: [
                { id: 'A', text: 'Option A' },
                { id: 'B', text: 'Option B' },
                { id: 'C', text: 'Option C' },
                { id: 'D', text: 'Option D' }
            ],
            correctOption: 'A'
        },
        {
            id: 2,
            questionText: "Sample question 2",
            options: [
                { id: 'A', text: 'Option A' },
                { id: 'B', text: 'Option B' },
                { id: 'C', text: 'Option C' },
                { id: 'D', text: 'Option D' }
            ],
            correctOption: 'B'
        },
        {
            id: 3,
            questionText: "Sample question 3",
            options: [
                { id: 'A', text: 'Option A' },
                { id: 'B', text: 'Option B' },
                { id: 'C', text: 'Option C' },
                { id: 'D', text: 'Option D' }
            ],
            correctOption: 'C'
        },
        {
            id: 4,
            questionText: "Sample question 4",
            options: [
                { id: 'A', text: 'Option A' },
                { id: 'B', text: 'Option B' },
                { id: 'C', text: 'Option C' },
                { id: 'D', text: 'Option D' }
            ],
            correctOption: 'A'
        },
        {
            id: 5,
            questionText: "Sample question 5",
            options: [
                { id: 'A', text: 'Option A' },
                { id: 'B', text: 'Option B' },
                { id: 'C', text: 'Option C' },
                { id: 'D', text: 'Option D' }
            ],
            correctOption: 'D'
        }
    ]);

    const handleQuestionTextChange = (questionId: number, value: string) => {
        setQuestions(questions.map(q => 
            q.id === questionId ? { ...q, questionText: value } : q
        ));
    };

    const handleOptionChange = (questionId: number, optionId: string, value: string) => {
        setQuestions(questions.map(q => 
            q.id === questionId 
                ? { 
                    ...q, 
                    options: q.options.map(opt => 
                        opt.id === optionId ? { ...opt, text: value } : opt
                    )
                }
                : q
        ));
    };

    const handleMarkCorrect = (questionId: number, optionId: string) => {
        setQuestions(questions.map(q => 
            q.id === questionId ? { ...q, correctOption: optionId } : q
        ));
    };

    return (
        <div className="mt-8">
            <div className=" space-y-6">
                {questions.map((question, index) => (
                    <div key={question.id} className="bg-card border border-gray-700/50 rounded-lg p-4">
                        <h2 className="text-main text-subheading font-medium mb-3">Question {index + 1}</h2>

                        {/* Question Text */}
                        <div className="mb-6">
                            <label className="text-main font-medium text-paragraph block mb-2">
                                Question Text
                            </label>
                            <textarea
                                value={question.questionText}
                                onChange={(e) => handleQuestionTextChange(question.id, e.target.value)}
                                className="w-full appearance-none px-4 py-2 border border-gray-700/50 rounded-lg focus:outline-2 outline-header text-main min-h-25 resize-y"
                                placeholder="Enter your question here"
                            />
                        </div>

                        {/* Answer Options */}
                        <div>
                            <label className="text-main font-medium text-paragraph block mb-3">
                                Answer Options
                            </label>
                            <div className="space-y-2">
                                {question.options.map((option) => (
                                    <div key={option.id} className="flex items-center gap-2">
                                        <input
                                            value={option.text}
                                            onChange={(e) => handleOptionChange(question.id, option.id, e.target.value)}
                                            className="flex-1 appearance-none px-4 py-2 border border-gray-700/50 rounded-lg focus:outline-2 outline-header text-main"
                                            placeholder={`Option ${option.id}`}
                                        />
                                        <button
                                            onClick={() => handleMarkCorrect(question.id, option.id)}
                                            className={`px-4 py-2 rounded-lg text-sm transition-colors whitespace-nowrap ${
                                                question.correctOption === option.id
                                                    ? 'bg-header text-main hover:bg-header/90'
                                                    : 'bg-card text-main hover:bg-gray-700 border border-gray-700/50'
                                            }`}
                                        >
                                            {question.correctOption === option.id ? (
                                                <span className="flex items-center gap-2">
                                                    <Check size={16} />
                                                    Correct
                                                </span>
                                            ) : (
                                                'Mark Correct'
                                            )}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GeneratedQuestions;