import { motion } from 'framer-motion'

const icon = {
  hidden: {
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)',
  },
  visible: {
    pathLength: 1,
    fill: 'rgba(255, 255, 255, 1)',
  },
}

const AnimatedLogo = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 123 123"
    className="item"
    width="100%"
  >
    <motion.path
      d="M61.17 0a60.78 60.78 0 1 0 60.77 60.78A60.85 60.85 0 0 0 61.17 0zm0 4.37a56.11 56.11 0 0 1 31.28 9.5 7.8 7.8 0 0 0-1.17.15 14.61 14.61 0 0 0-3.82 1.45 20.65 20.65 0 0 0-7.58 6.83 11.21 11.21 0 0 0-1.79 3.89 6.93 6.93 0 0 0-.17 2.33h-4.38a22.57 22.57 0 0 0-.94-2.73 18.51 18.51 0 0 0-3.6-5.72l-.72-.72-7 7-7-7-.13.1-.15.14a17.62 17.62 0 0 0-3.38 4.7A23.77 23.77 0 0 0 49 28.52h-4.28a7.57 7.57 0 0 0 0-1.07 8.78 8.78 0 0 0-.81-3.14 19 19 0 0 0-4-5.54 18.18 18.18 0 0 0-3.12-2.48 17.22 17.22 0 0 0-4.69-2.21 8.26 8.26 0 0 0-2-.32 56 56 0 0 1 31.07-9.39zm33.56 64.35l-.19.27a10 10 0 0 0-1.63 4.83v.5L89 77.17a28.09 28.09 0 0 0-7.94-9.37l-.32-.25h0 .3a27.15 27.15 0 0 0 4.62-.55 28.54 28.54 0 0 0 7.68-2.6zM64.22 95.16a7.87 7.87 0 0 0-1.43-.36 11.72 11.72 0 0 0-2.9 0 6.94 6.94 0 0 0-1.76.41l-3.54-2.61 1.49-1.65a27.92 27.92 0 0 0 5-8.77l.18-.51v.06a1.17 1.17 0 0 1 0 .11 27.87 27.87 0 0 0 6.54 10.64zM29.6 74.44a8.41 8.41 0 0 0-.05-1.22 10.58 10.58 0 0 0-1.12-3.59 7.78 7.78 0 0 0-.75-1.17L29 64.37l.79.4a27.86 27.86 0 0 0 11.86 2.75h.21l-.18.14a26.73 26.73 0 0 0-3.56 3.16 28.69 28.69 0 0 0-4.59 6.47zm9-39.48a5.43 5.43 0 0 0 .53-.17 9.63 9.63 0 0 0 4.44-3.29l.06-.1h4.71l-.3 2.54a28.76 28.76 0 0 0 .1 5.33 26.75 26.75 0 0 0 .86 4.52l.27.92-1.07-.72a28.12 28.12 0 0 0-7-3.28 29 29 0 0 0-4.2-1zm27.55 23.47l15.32-5 .7 2.14-15.33 5a9.9 9.9 0 0 0 2.46 3.26A10 10 0 0 0 65.43 65l9.46 13-1.83 1.33-9.46-13a10 10 0 0 0-2.32 3.34 10 10 0 0 0-2.34-3.34l-9.46 13L47.66 78l9.45-13a10 10 0 0 0-3.86-1.16 10.18 10.18 0 0 0 2.46-3.26l-15.34-5 .7-2.14 15.32 5a7.59 7.59 0 0 0 .17-2c0-.66-.14-1.31-.2-2l1.79.78a7.23 7.23 0 0 0 2 .46v-3.21-3.21-9.64h2.25V55.7a6.56 6.56 0 0 0 2-.45l1.84-.8a10 10 0 0 0-.09 3.98zM83 40.21a28.09 28.09 0 0 0-8.94 3.94l-.76.52s0-.17.07-.26a27.44 27.44 0 0 0 1.21-7.25 29.14 29.14 0 0 0-.29-5.16c0-.2-.07-.41-.11-.61H79a8 8 0 0 0 .52.67A10.13 10.13 0 0 0 83 34.68q.36.15.72.27l1.55 4.78-2.27.48zM6.84 75.88a56.2 56.2 0 0 1 19.4-59.34 8.74 8.74 0 0 0-.33 2.64 15.49 15.49 0 0 0 .33 3.19 20.73 20.73 0 0 0 4.3 9.18 11 11 0 0 0 3 2.68 7.19 7.19 0 0 0 2 .81l-1.44 4.4a22.85 22.85 0 0 0-5.59.42 16.78 16.78 0 0 0-4.61 1.63l-.28.16 4.5 8.82L19.29 55a1.85 1.85 0 0 0 .11.24 17.59 17.59 0 0 0 3.93 5.21 23.28 23.28 0 0 0 3.14 2.48l-1.2 3.69a6.67 6.67 0 0 0-.92-.33 9 9 0 0 0-3.84-.12 20.53 20.53 0 0 0-10.23 5.11 15.68 15.68 0 0 0-2.72 3.19 8 8 0 0 0-.72 1.41zm1.52 4.7a9.08 9.08 0 0 0 2.21 1 18.82 18.82 0 0 0 5.82.85 18.28 18.28 0 0 0 3.54-.31 20.69 20.69 0 0 0 4.64-1.39 9.93 9.93 0 0 0 3.31-2.27 6.25 6.25 0 0 0 .85-1.12L32.3 80a22.91 22.91 0 0 0-1.48 6 17.15 17.15 0 0 0 .14 4.8 2.58 2.58 0 0 0 .04.2l9.76-1.55 1.56 9.8 1.48-.26a19.27 19.27 0 0 0 6.2-2.61 27.2 27.2 0 0 0 2.46-1.8l3.17 2.3a7.23 7.23 0 0 0-1.24 2 11.29 11.29 0 0 0-.82 3.85 21.75 21.75 0 0 0 .18 4.27 20.21 20.21 0 0 0 2.76 7.67A10.88 10.88 0 0 0 58.4 117l.08.07A56.51 56.51 0 0 1 8.36 80.58zm55.51 36.53a7.38 7.38 0 0 0 .69-.68 13.73 13.73 0 0 0 2.15-3.24A20.53 20.53 0 0 0 68.82 102a10.36 10.36 0 0 0-.72-3 7.08 7.08 0 0 0-1.31-2.09l3.27-2.37a23.66 23.66 0 0 0 2.4 1.78 18.68 18.68 0 0 0 7.06 2.85l.71.1 1.55-9.79L91.56 91v-.17a17.38 17.38 0 0 0 .11-5.29 21.89 21.89 0 0 0-1.16-4.79l-.36-.87 3.49-2.52A7.39 7.39 0 0 0 96 79.82a14.14 14.14 0 0 0 4 1.82 21 21 0 0 0 6.58 1l1.64-.11a17 17 0 0 0 3.93-.8 10 10 0 0 0 1.73-.78 56.5 56.5 0 0 1-50.01 36.16zm50.95-42.66a16.15 16.15 0 0 0-2.46-2.89 20.64 20.64 0 0 0-9.69-5.16 10 10 0 0 0-3.81-.16 6.42 6.42 0 0 0-1.74.53L95.88 63a22 22 0 0 0 5.68-5.2 15.63 15.63 0 0 0 1.69-2.85l-8.83-4.49 4.49-8.84-.54-.29a18.17 18.17 0 0 0-5.63-1.7 23.46 23.46 0 0 0-4.51-.18l-1.38-4.27a6.77 6.77 0 0 0 1.67-.54 9.35 9.35 0 0 0 2.56-1.85A18.72 18.72 0 0 0 94 28.92a20.12 20.12 0 0 0 2.82-9.69c0-.44 0-.9-.09-1.36a7.87 7.87 0 0 0-.18-1 56.27 56.27 0 0 1 19 58.89 10.54 10.54 0 0 0-.73-1.31zM89.12 94.1a4.63 4.63 0 1 0 4.54 4.64 4.61 4.61 0 0 0-4.54-4.64zm-55.31.22a4.63 4.63 0 1 0 4.63 4.61 4.61 4.61 0 0 0-4.63-4.61zm-17.28-43.2a4.63 4.63 0 1 0-4.61-4.76 4.61 4.61 0 0 0 4.61 4.76zm89.36-9.6a4.63 4.63 0 1 0 4.63 4.64 4.59 4.59 0 0 0-4.63-4.64zM61.09 18.5a4.63 4.63 0 1 0-4.63-4.63 4.64 4.64 0 0 0 4.63 4.63z"
      variants={icon}
      initial="hidden"
      animate="visible"
      transition={{
        default: { duration: 6, ease: 'easeInOut' },
        fill: { duration: 4, ease: [1, 0, 0.5, 1] },
      }}
      stroke="#fff"
      strokeWidth="0.5"
      strokeLinejoin="round"
    />
  </motion.svg>
)

export default AnimatedLogo
