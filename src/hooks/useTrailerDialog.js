import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { TrailerDialog } from '../components/media/TrailerDialog';
import { getMovieTrailer } from '../data/moviesSlice';

const useTrailerDialog = () => {
  const [videoKey, setVideoKey] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();

  const closeModal = () => setOpen(false);

  const viewTrailer = useCallback(async id => {
    const trailerKey = await dispatch(getMovieTrailer({ id })).unwrap();

    if (trailerKey) {
      setVideoKey(trailerKey);
    }

    setOpen(true);
  }, [dispatch]);

  return {
    component: <TrailerDialog isOpen={isOpen} videoKey={videoKey} close={closeModal} />,
    viewTrailer,
  };
};

export { useTrailerDialog };
