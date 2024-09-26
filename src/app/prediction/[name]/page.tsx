import Image from "next/image";
const getPredictedAge = async (name: string) => {
  try {
    const res = await fetch(`https://api.agify.io/?name=${name}`);
    
    // Check if the response is okay (status in the range 200-299)
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching predicted age:", error);
    return null; // or handle the error as needed
  }
};


// Function to get predicted gender
const getPredictedGender = async (name: string) => {
  try {
    const res = await fetch(`https://api.genderize.io/?name=${name}`);
    
    // Check if the response is okay
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching predicted gender:", error);
    return null; // Return null or handle the error as needed
  }
};

// Function to get predicted country
const getPredictedCountry = async (name: string) => {
  try {
    const res = await fetch(`https://api.nationalize.io/?name=${name}`);
    
    // Check if the response is okay
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching predicted country:", error);
    return null; // Return null or handle the error as needed
  }
};



interface Params{
  params: { name: string};
}
export default  async function Name({params}: Params) {
  const ageData = getPredictedAge(params.name);
  const genderData = getPredictedGender(params.name);
  const countryData = getPredictedCountry(params.name);

  const [age , gender , country] = await Promise.all([
    ageData,
    genderData,
    countryData]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
  <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Personal Info</h2>
    <div className="text-gray-700 mb-2">
      <span className="font-semibold">Age:</span> {age?.age || "N/A"}
    </div>
    <div className="text-gray-700 mb-2">
      <span className="font-semibold">Gender:</span> {gender?.gender || "N/A"}
    </div>
    <div className="text-gray-700">
      <span className="font-semibold">Country:</span> {country?.country[0]?.country_id || "N/A"}
    </div>
  </div>
</div>

    
  );
}
