// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const DisplayData = () => {
//   const [data, setData] = useState([]); // State to hold fetched data
//   const [loading, setLoading] = useState(true); // State to manage loading status
//   const [error, setError] = useState(null); // State to handle errors

//   useEffect(() => {
//     // Fetch data from the API when the component mounts
//     axios.get('http://localhost:3000/fetch-data')
//       .then(response => {
//         setData(response.data); // Set the fetched data
//         setLoading(false); // Set loading to false
//       })
//       .catch(err => {
//         setError(err.message); // Set error if request fails
//         setLoading(false); // Set loading to false
//       });
//   }, []); // Empty dependency array ensures this runs once when the component mounts

//   // Handle loading state
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   // Handle error state
//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   // Render the fetched data
//   return (
//     <>
//     <div>
//       <h1>Fetched Data</h1>
//       <ul>
//         {data.map(item => (
//           <li key={item.id}>
//             <strong>Title:</strong> {item.title}
//             <br />
//             <strong>Body:</strong> {item.body}
//           </li>
//         ))}
//       </ul>
//     </div>
//     </>
//   );
// };

// export default DisplayData;

import { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState([]); // State to hold fetched data
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios
      .get('http://localhost:3000/fetch-data')
      .then(response => {
        setData(response.data); // Set the fetched data
        setLoading(false); // Set loading to false
      })
      .catch(err => {
        setError(err.message); // Set error if request fails
        setLoading(false); // Set loading to false
      });
  }, []); // Empty dependency array ensures this runs once when the component mounts

  // Handle loading state
  if (loading) {
    return <div className="text-center text-xl font-semibold">Loading...</div>;
  }

  // Handle error state
  if (error) {
    return (
      <div className="text-center text-red-500 text-xl font-semibold">
        Error: {error}
      </div>
    );
  }

  // Render the fetched data
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <h1 className="text-center text-3xl font-bold mb-6 text-gray-800">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* ID Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-bold text-gray-700 mb-4">IDs</h2>
          <ul>
            {data.map(item => (
              <li
                key={item.id}
                className="text-gray-600 text-sm py-1 border-b last:border-none"
              >
                {item.id}
              </li>
            ))}
          </ul>
        </div>

        {/* User ID Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-bold text-gray-700 mb-4">User IDs</h2>
          <ul>
            {data.map(item => (
              <li
                key={item.id}
                className="text-gray-600 text-sm py-1 border-b last:border-none"
              >
                {item.userId}
              </li>
            ))}
          </ul>
        </div>

        {/* Title Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-bold text-gray-700 mb-4">Titles</h2>
          <ul>
            {data.map(item => (
              <li
                key={item.id}
                className="text-gray-600 text-sm py-1 border-b last:border-none truncate"
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
