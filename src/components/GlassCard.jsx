

const GlassCard = ({imgURL, changeBigGlassImage, bigGlassImg}) => {

    const handleClick = () => {
        if(bigGlassImg !== imgURL.bigGlasses)
        {
            changeBigGlassImage(imgURL.bigGlasses);
        }
    }

  return (
    <div className={`border-2 rounded-xl 
         ${ bigGlassImg === imgURL.bigGlasses ? 'border-red-600' : 'border-transparent'}
         cursor-pointer max-sm:flex-1 `}
         onClick={handleClick}
         >

            <div className="flex justify-center items-center bg-card bg-cover bg-center
            sm:h-40 sm:w-40 rounded-xl max-sm:p-4">
                <img src={imgURL.thumbnail} alt="glasses collection"
                height={103} width={127} className="object-contain" />
            </div>
    </div>
  )
}

export default GlassCard