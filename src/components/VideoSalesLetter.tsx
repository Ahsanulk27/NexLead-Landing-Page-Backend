import React from "react";
import { motion } from "framer-motion";

const VideoSalesLetter: React.FC = () => {
  return (
    <section className="relative bg-primary-bg py-16 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 text-primary-yellow text-center font-sans"
        >
          Watch How NexLead Becomes Your Growth Autopilot
        </motion.h2>

        <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-700">
          <iframe
            src="https://www.loom.com/embed/f6f5c6c5a2af45db9058a594722f9bd7?sid=ce3e5595-a566-4272-a6c6-987a5bc50d6b"
            frameBorder="0"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSalesLetter;
