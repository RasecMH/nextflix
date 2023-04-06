import Billboard from '@/components/Billboard';
import InfoModal from '@/components/InfoModal';
import MovieList from '@/components/MovieList';
import NavBar from '@/components/NavBar';
import useFavorites from '@/hooks/useFavorites';
import useInfoModal from '@/hooks/useInfoModal';
import useMovieList from '@/hooks/useMovieList';
import useCurrentUser from '@/hooks/userCurrentUser';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModal();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <NavBar />
      <Billboard />
      <div className='pb-40'>
        <MovieList title='Trending Now' data={movies} />
        <MovieList title='My list' data={favorites} />
      </div>
    </>
  );
}
