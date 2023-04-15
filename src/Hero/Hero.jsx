const Hero = () => {
  return (
    <div className='container'>
      <div className=''>
        <h1>Digitally forward creative</h1>
        <p className='bg-black'>
          When it comes to interactive marketing, we've got you covered. Be
          where the world is going
        </p>
        <form className='form'>
          <input
            className='email'
            placeholder='Enter your email'
            type='email'
          />
          <button className='form__btn'>Try for free</button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
