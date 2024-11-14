import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setImages } from './store/actions/imageAction';

const App = () => {

  const state = useSelector(store => store.imageReducer)
  console.log(state)

  const dispatch = useDispatch();

  const getImageHandler = ()=>{
    dispatch(setImages());
  }



  return (
    <div>
      <button onClick={getImageHandler} >Get images</button>

      <div className='flex flex-wrap gap-3'>
        {state.value.length > 0 ? state.value.map(e=> <img key={e.id} className='h-[100px] w-[100px] object-cover' src={e.download_url} alt="" /> ) : <h1>No images</h1> }
      </div>
    </div>
  )
}

export default App