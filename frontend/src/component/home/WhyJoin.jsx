import { motion } from "motion/react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function WhyJoin() {
  return (
    <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-16 bg-brand2 hero2 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="mb-14 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 textGradient">
            Why ASOC?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A global platform empowering developers to contribute, collaborate,
            and thrive in the open-source ecosystem.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          <motion.div
            variants={fadeUpVariant}
            className="group border border-brand4 rounded-2xl p-8 bg-brand1/30 backdrop-blur-sm hover:-translate-y-1 transition-all"
          >
            <div className="w-14 h-14 rounded-lg bg-white p-3 flex items-center justify-center">
              <img
                className="w-full h-full object-contain"
                src="https://www.jsdelivr.com/assets/c84fc1badc58b6071e439e123685bdd99fc02601/img/jsdelivr-horizontal-regular.svg"
                alt="Real Impact"
              />
            </div>

            <h3 className="text-xl font-bold mt-5">Real Impact</h3>

            <p className="text-slate-400 mt-3">
              Work on meaningful open-source projects used by thousands of
              developers daily.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUpVariant}
            className="group border border-brand4 rounded-2xl p-8 bg-brand1/30 backdrop-blur-sm hover:-translate-y-1 transition-all"
          >
            <div className="w-14 h-14 rounded-lg bg-white p-3 flex items-center justify-center">
              <img
                className="w-full h-full object-contain"
                src="https://www.jsdelivr.com/assets/c84fc1badc58b6071e439e123685bdd99fc02601/img/jsdelivr-horizontal-regular.svg"
                alt="Learn And Grow"
              />
            </div>

            <h3 className="text-xl font-bold mt-5">Learn And Grow</h3>

            <p className="text-slate-400 mt-3">
              Enhance your skills, collaborate with mentors and grow together.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUpVariant}
            className="group border border-brand4 rounded-2xl p-8 bg-brand1/30 backdrop-blur-sm hover:-translate-y-1 transition-all sm:col-span-2 lg:col-span-1"
          >
            <div className="w-14 h-14 rounded-lg bg-white p-3 flex items-center justify-center">
              <img
                className="w-full h-full object-contain"
                src="https://www.jsdelivr.com/assets/c84fc1badc58b6071e439e123685bdd99fc02601/img/jsdelivr-horizontal-regular.svg"
                alt="Strong Community"
              />
            </div>

            <h3 className="text-xl font-bold mt-5">Strong Community</h3>

            <p className="text-slate-400 mt-3">
              Join a strong community of contributors and maintainers.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
