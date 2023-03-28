import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import eslintIcon from './public/tech-icons/ESLint-icon.svg';
import prettierIcon from './public/tech-icons/Prettier-icon.svg';
import reactIcon from './public/tech-icons/React-icon.svg';
import tailwindIcon from './public/tech-icons/Tailwind-icon.svg';
import typescriptIcon from './public/tech-icons/Typescript-icon.svg';
import viteIcon from './public/tech-icons/Vite-icon.svg';
import framermotionIcon from './public/tech-icons/framer-motion-icon.svg';
import reduxIcon from './public/tech-icons/Redux-icon.svg';

const techWheel = [
  { name: 'Vite', src: viteIcon },
  { name: 'Typescript', src: typescriptIcon },
  { name: 'Redux', src: reduxIcon },
  { name: 'Tailwind', src: tailwindIcon },
  { name: 'Framer-motion', src: framermotionIcon },
  { name: 'ESLint', src: eslintIcon },
  { name: 'Prettier', src: prettierIcon },
];

const checkList = [
  'Rename `name` and `author` in `package.json`',
  'Change the `author name` in `LICENSE`',
  'Change the `title` in `index.html`',
  'Change the `favicon` in `public`',
  'Modify the `manifest` in `public`',
  'Change the `README`',
];

export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-around bg-gradient-to-r from-gray-800 to-charcoal p-10">
      <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-20">
        <div className=" text-center text-white">
          <div className="mx-auto flex max-w-3xl flex-col gap-8 text-left">
            <h1 className="text-left text-4xl font-bold">
              <span>Jumpstart </span>
              your next&nbsp;
              <span className="bg-gradient-to-r from-skyblue to-violet-400 bg-clip-text text-transparent">
                React project
              </span>
            </h1>
            <p className="prose prose-invert">
              Template comes with: Typescript, Tailwind, Husky, ESLint, Prettier
              and more. <br />
              Configured and ready to go 🚀
            </p>
          </div>
        </div>

        <div className="flex h-60 w-60 items-center justify-center">
          {techWheel.map((tech, index: number) => {
            return (
              <motion.div
                className="fixed h-60 overflow-hidden"
                key={tech.name}
                initial="initial"
                animate={['animate', 'initialHide']}
                variants={{
                  initial: {
                    opacity: 0,
                  },
                  initialHide: {
                    opacity: 1,
                    transition: {
                      delay: index + 1,
                    },
                  },
                  animate: {
                    rotate: -360,
                    transition: {
                      duration: techWheel.length,
                      repeat: Infinity,
                      delay: index + 1,
                      ease: 'linear',
                    },
                  },
                }}
              >
                <div className="h-8">
                  <img
                    className="pointer-events-none h-8"
                    src={tech.src}
                    alt={tech.name}
                  />
                </div>
              </motion.div>
            );
          }, [])}

          <motion.div
            className="fixed h-20 w-20"
            initial={{ opacity: 1 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          >
            <div>
              <img
                className=" pointer-events-none absolute top-0 left-0 h-20 w-20"
                src={reactIcon}
                alt="react"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="prose prose-sm prose-invert prose-p:my-0">
        <h2 className="mb-8 text-center">To clean up template:</h2>
        <ul className="list-none px-0">
          {checkList.map((item) => (
            <li key={item}>
              <label className="prose prose-invert my-0 flex items-center">
                <input type="checkbox" className="mx-2 rounded-full" />
                <ReactMarkdown>{item}</ReactMarkdown>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
