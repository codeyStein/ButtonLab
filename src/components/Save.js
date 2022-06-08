import { ToastContainer, toast, Bounce, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Save() {
  const notify = () => toast.success("Saved This Configuration!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Bounce
  });

  return (
    <div className='Save'>
      <button onClick={notify}>Save This</button>
      <ToastContainer style={
        {toastifyToastBackground: "red"}
      } />
    </div>

  )
}
