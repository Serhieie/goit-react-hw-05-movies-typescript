import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY, BASE_URL, options } from '../../constants/constants.ts';
import { MdRecentActors } from 'react-icons/md';
import { errorToast } from '../../helpers/toasts';

interface Credit {
  id: number;
  profile_path: string | null;
  name: string;
}

const CastList: React.FC = () => {
  const [credits, setCredits] = useState<Credit[]>([]);
  const { movieId } = useParams<{ movieId: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}movie/${movieId}/credits?${API_KEY}`,
          options
        );
        const slicedFive = response.data.cast.slice(0, 10) as Credit[];
        setCredits(slicedFive);
      } catch (error) {
        errorToast();
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <ul className="grid md:grid-cols-3 sm2:grid-cols-4 grid-cols-5 gap-1 justify-center w-10/12 mx-auto">
      {credits.length ? (
        credits.map(credit => (
          <li key={credit.id} className="flex flex-col justify-between ">
            {credit.profile_path ? (
              <img
                loading="lazy"
                className="overflow-hidden rounded"
                src={`https://image.tmdb.org/t/p/original/${credit.profile_path}`}
                alt={credit.name}
                width={160}
              />
            ) : (
              <img
                loading="lazy"
                className="h-[75%] object-cover rounded overflow-hidden"
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                alt={credit.name}
                width={160}
              />
            )}
            <p className="md:text-xs text-xl">{credit.name}</p>
          </li>
        ))
      ) : (
        <li className="text-center col-span-5 justify-center flex gap-2 items-center">
          <p>Oops! Sorry, but there is no information about actors</p>
          <MdRecentActors size={24} />
        </li>
      )}
    </ul>
  );
};

export default CastList;
