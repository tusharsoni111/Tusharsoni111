import React from 'react';
import { motion } from 'framer-motion';

const Message = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-0 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Dear preety,
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          Even though we have met recently & i guess we know nothing about eachother but this
          is my kindness to show you how much i value people who are close to me. 
          And i regret not being there today as things are nt in favour of me these days. 
          i might not have a better gift to give but i can assure even if i wont be there in your better days
          i ll be just one call away in your worst phase. dont hesistate even if we re not talking or part aways.
        </p>
        <p className="text-lg text-pink-600 font-semibold">
          and on My special day, i wish you the happiest birthday Preety
        </p>
      </motion.div>
    </div>
  );
};

export default Message;