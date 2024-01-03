import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY, BASE_URL, options } from '../../constants/constants';
import { errorToast } from '../../helpers/toasts';
import { MdCommentsDisabled } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';

export default function ReviewList() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}movie/${movieId}/reviews?${API_KEY}`,
          options
        );
        setReviews(response.data.results);
      } catch (error) {
        errorToast();
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <ul className="flex justify-center flex-col gap-12 ">
      {reviews.length ? (
        reviews.map(review => (
          <li
            key={review.id}
            className="border-b-[0.5px] border-blue-900 py-2 px-4 pt-0 "
          >
            <h3 className="text-xl font-bold">{review.author}</h3>
            <p className="text-xs flex items-center gap-0.5">
              Author rating: {review.author_details.rating}{' '}
              <FaStar className=" fill-amber-400" />
            </p>
            <p className="text-xs font-thin  text-slate-500 mb-4">
              {review.created_at}
            </p>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <li className="text-center justify-center flex gap-2 items-center">
          <p>UPS Sorry but here is no reviews</p>{' '}
          <MdCommentsDisabled size={22} />
        </li>
      )}
    </ul>
  );
}
