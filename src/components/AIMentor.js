import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

export default function AIMentor() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [history, setHistory] = useState([]);

  const getSuggestion = async () => {
    if (!question.trim()) return;

    setIsTyping(true);
    setAnswer("");

    try {
      const response = await axios.post("http://localhost:5000/api/ask", {
        question,
      });

      setAnswer(response.data.answer);
      setHistory((prev) => [
        ...prev,
        { question: question, response: response.data.answer },
      ]);
    } catch (error) {
      console.error(error);
      setAnswer("⚠️ Error fetching AI response. Try again ");
    } finally {
      setIsTyping(false);
      setQuestion(""); // for  clear the  input
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-purple-800 to-pink-900 text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Your AI Mentor 🤖</h2>
        <p className="text-lg md:text-xl mb-8">
          Ask anything and get personalized guidance about your course.
        </p>

        {/* Input and Button */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="What do you want to learn today?"
            className="w-full md:w-2/3 px-4 py-3 rounded-lg text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={getSuggestion}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-600 transition-all"
          >
            Ask 
          </motion.button>
        </div>

        {/* AI Response */}
        <div className="min-h-[60px] mb-6">
          <AnimatePresence mode="wait">
            {isTyping && (
              <motion.p
                key="typing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-lg md:text-xl italic text-yellow-300"
              >
                🤖 AI is typing......
              </motion.p>
            )}
            {!isTyping && answer && (
              <motion.p
                key="answer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-lg md:text-xl text-green-200"
              >
                {answer}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* History */}
        {history.length > 0 && (
          <div className="text-left max-w-2xl mx-auto space-y-4">
            <h3 className="text-xl font-semibold mb-2">History</h3>
            {history.map((h, i) => (
              <motion.div
                key={i}
                className="bg-white/10 p-3 rounded-lg backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="font-semibold text-yellow-300">Q: {h.question}</p>
                <p className="text-green-200">A: {h.response}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
