import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img 
              src='./logo.png'
              alt="logo"
              className="w-50 h-10 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                ESSAYEZ <br className="xl:block hidden" />MAINTENANT.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
              Créez votre T-shirt unique et exclusive avec notre tout nouvel outil de personnalisation 3D. <strong> Laissez libre cours à votre imagination</strong>{" "}et définissez votre propre style.
           
               


             </p>

              <CustomButton 
                type="filled"
                title="Personaliser"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm scale-125 drop-shadow-md"
                
              />
              
            </motion.div>
            

          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home