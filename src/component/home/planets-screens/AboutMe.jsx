import { motion } from "framer-motion";
import useTranslations from "../../../hooks/useTranslation";
import Planet from "../planet/Planet";
const AboutMe = () => {
  const { data } = useTranslations("home");

  return (
    <div className="min-h-screen w-full flex items-center justify-center dark:bg-slate-900 relative overflow-hidden">
      <motion.div
        initial={{ opacity:0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative p-10"
      >
        <motion.div
          whileTap={{ scale: 0.95 }}
          className="size-96 flex flex-col items-center justify-center gap-4 bg-white/20 backdrop-blur-lg rounded-3xl shadow-slate-950 dark:bg-slate-700/30 overflow-hidden relative border border-white/20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-400/20 opacity-50"></div>

          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-200/50 shadow-lg dark:shadow-slate-700 relative z-10"
          >
            <div className="absolute top-0 left-0 w-full h-full">
              <Planet name="saturn" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl font-bold text-black dark:text-slate-100 relative z-10"
          >
            {data?.nameTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-gray-600 dark:text-slate-300 text-lg relative z-10"
          >
            {data?.nameDescription}
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
