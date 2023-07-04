import { User, Info, Code } from "../../assets/Icons";

const Introduction = () => {
  return (
    <div className="Introduction grid lg:grid-cols-3 gap-12 my-20">
      <div
        className="card w-full h-auto p-6 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer border flex flex-col items-start gap-2"
        data-aos="fade-up-right"
      >
        <div className="w-12 h-12 rounded-md bg-blue-600 grid place-items-center">
          <User className="stroke-white w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mt-2">
          What is BizTechs?
        </h3>
        <p className="text-gray-600 text-sm">
          ARASMO is an company that provides consulting and business solutions
          to its clients. The business challenges...
        </p>
      </div>
      <div
        className="card w-full h-auto p-6 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer border flex flex-col items-start gap-2"
        data-aos="fade-up"
      >
        <span className="w-12 h-12 rounded-md bg-rose-600 grid place-items-center">
          <Info className="stroke-white w-7 h-7" />
        </span>
        <h3 className="text-xl font-bold text-gray-800 mt-2">What do we do?</h3>
        <p className="text-gray-600 text-sm">
          We are web application development company. Our platform includes
          application on Personal Computers...
        </p>
      </div>
      <div
        className="card w-full h-auto p-6 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer border flex flex-col items-start gap-2"
        data-aos="fade-up-left"
      >
        <span className="w-12 h-12 rounded-md bg-emerald-600 grid place-items-center">
          <Code className="stroke-white w-7 h-7" />
        </span>
        <h3 className="text-xl font-bold text-gray-800 mt-2">
          What tech do we use?
        </h3>
        <p className="text-gray-600 text-sm">
          With help of state-of-the-art technologies we present productive
          solutions best suited to clients needs. Our skills include...
        </p>
      </div>
    </div>
  );
};

export default Introduction;
