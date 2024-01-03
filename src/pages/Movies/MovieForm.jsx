import { Formik, Form, Field } from 'formik';
import { IoSearch } from 'react-icons/io5';

export default function MovieForm({ handleSubmit }) {
  return (
    <Formik initialValues={{ movieId: '' }} onSubmit={handleSubmit}>
      <Form className="flex">
        <Field
          className="bg-blue-200 px-6 py-2 text-blue-900 md:mb-6 mb-16 w-full max-w-[400px] placeholder:text-blue-900
            placeholder:opacity-60 placeholder:font-thin outline-none text-xl md:max-w-[260px] rounded-tl-3xl rounded-bl-3xl"
          type="text"
          name="movieId"
          placeholder="Enter movie title"
        />
        <button
          type="submit"
          className="bg-blue-900 transition-all duration-300 hover:bg-blue-700 border border-blue-900 hover:border-blue-700 h-[44px] text-center  w-[50px] 
            rounded-tr-3xl rounded-br-3xl flex justify-center items-center "
        >
          <IoSearch size={22} />
        </button>
      </Form>
    </Formik>
  );
}
