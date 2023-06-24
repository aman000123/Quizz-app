

// Question Types
// 1. MCQs | Multiple Choice | single

export const quiz = {
  topic: 'Javascript',
  level: 'Beginner',
  totalQuestions: 4,
  perQuestionScore: 5,
  questions: [
    {
      question:
        'What is yours profession?',
      choices: ['Engineering', 'Medicals','Sports', 'None of the above'],
      type: 'MCQs',
      correctAnswer: 'Engineering',
    },
    {
      question:
        'What is your hobby?',
      choices: ['Playing', 'Walking', 'Watching movie', 'None of the above'],
      type: 'MCQs',
      correctAnswer: 'Playing',
    },
    {
      question:
        'What is Your City name?',
      choices: [
        'Lucknow',
        'Delhi',
        'Mumbai',
        'Chennai',
      ],
      type: 'MCQs',
      correctAnswer: 'Lucknow',
    },
    {
      question: 'Who is your best cricketers?',
      choices: ['Virat Kohli', 'Sachin Tendulkar', 'Mahendra Singh Dhoni', 'Virendra Sahvag'],
      type: 'MCQs',
      correctAnswer: 'Virat Kohli',
    },
  ],
}