import Image from "next/image";

const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none">
    <Image
      src={'/midjourney-removebg-preview.png'}
      width={737}
      height={678}
      alt=''
      className='translate-z-0 w-full h-full opacity-95'

    />
  </div>;
};

export default Avatar;
