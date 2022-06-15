import CartWidget from "./CartWidget";

const Navbar = () =>{
    return(
      <>
        <div className='p-2 d-flex align-items-end shadow-sm'>
          <div className='flex-grow-1'>
            <span className='px-2'>Home</span>
            <span className='px-2'>Contact</span>
            <span className='px-2'>Service</span>
          </div>
          <CartWidget/>
        </div>
      </>
    )
  }

  export default Navbar;