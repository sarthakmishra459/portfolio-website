import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
const Services = () => {
  return (
    <div className='bg-primary/30 py-16 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/*text*/}
          <div className='text-center flex xl:w-[30nw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2 variants={fadeIn('up', 0.3)} initial="hidden" animate="show" exit="hidden" className='h2 xl:mt-8'>
              My Services <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p variants={fadeIn('up', 0.4)} initial="hidden" animate="show" exit="hidden" className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
            </motion.p>
          </div>
          {/*slider*/}
          <motion.div variants={fadeIn('down', 0.6)} initial="hidden" animate="show" exit="hidden" className='w-full xl:max-w-[65%]'>

            <ServiceSlider />
          </motion.div>

        </div>
      </div>
      <Bulb />
    </div>
  );

};

export default Services;
