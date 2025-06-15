

const Overview = () => {
  return (
        <div className="p-4 mt-8 lg:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4 md:mt-6">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-slate-900">Overview</h1>
        </div>
    </div>

    <div className="flex mt-8 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="inline-flex items-center py-4 px-6 border border-gray-200 rounded-lg bg-slate-50">
                <h2 className="text-4xl text-black">0</h2>
                <p className="text-gray-700 ml-2">Total Uploads</p>
            </div>
              <div className="inline-flex items-center py-4 px-6 border border-gray-200 rounded-lg bg-slate-50">
                <h2 className="text-4xl text-black">0</h2>
                <p className="text-gray-700 ml-2">Total Uploads</p>
            </div>
              <div className="inline-flex items-center py-4 px-6 border border-gray-200 rounded-lg bg-slate-50">
                <h2 className="text-4xl text-black">0</h2>
                <p className="text-gray-700 ml-2">Total Uploads</p>
            </div>
        </div>

     <div className="grid grid-cols-1 mid:grid-cols-2 gap-4">
        <div>
            
        </div>
    </div>
    </div>



    </div>
  )
}

export default Overview;
