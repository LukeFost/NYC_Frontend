const PoolPage = () => {
  return (
    <>
      <div className="justify-center align-center auto-mx h-screen w-screen p-10">
        <div className="flex mb-10">
          <div className="flex-1 bg-blue-200 p-6 m-2 rounded-lg">Chart 1</div>
          <div className="flex-1 bg-blue-300 p-6 m-2 rounded-lg">Chart 2</div>
          <div className="flex-1 bg-blue-400 p-6 m-2 rounded-lg">Chart 3</div>
        </div>

        <div className="flex mb-6">
          <div className="flex-1 bg-red-200 p-6 m-2 rounded-lg">Box 1.1</div>
          <div className="flex-1 bg-red-300 p-6 m-2 rounded-lg">Box 1.2</div>
          <div className="flex-1 bg-red-400 p-6 m-2 rounded-lg">Box 1.3</div>
        </div>

        <div className="flex">
          <div className="flex-1 bg-green-200 p-6 m-2 rounded-lg">Box 2.1</div>
          <div className="flex-1 bg-green-300 p-6 m-2 rounded-lg">Box 2.2</div>
          <div className="flex-1 bg-green-400 p-6 m-2 rounded-lg">Box 2.3</div>
        </div>
      </div>
    </>
  );
};

export default PoolPage;
