import Header from "../components/Header/Header";

const AdmissionPage = () => {
  return (
    <>
      <Header />
      <div className="p-6 bg-gradient-to-b from-sky-100 to-white min-h-screen text-gray-800">
        <h1 className="text-3xl font-bold text-center mb-6">
          Admissions at Vivekanand College
        </h1>

        <p className="mb-4 text-center">
          Welcome to the Admissions page of Vivekanand College! We are delighted
          you&apos;re considering joining our vibrant academic community. Our admission
          process is designed to be straightforward and accessible.
        </p>
        <p className="mb-8 text-center">
          Please review the eligibility criteria and key dates below for the
          upcoming academic year. For any queries, feel free to contact our
          admissions office.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Eligibility Criteria for Undergraduate Programs
        </h2>

        <div className="overflow-auto rounded-lg shadow-md">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="py-2 px-4 border">Program</th>
                <th className="py-2 px-4 border">Minimum Qualification</th>
                <th className="py-2 px-4 border">Required Subjects</th>
                <th className="py-2 px-4 border">Minimum Marks (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-4 border">B.Sc. Computer Science</td>
                <td className="py-2 px-4 border">10+2 (or equivalent)</td>
                <td className="py-2 px-4 border">Physics, Chemistry, Maths</td>
                <td className="py-2 px-4 border">50%</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-4 border">B.Com. Accounting & Finance</td>
                <td className="py-2 px-4 border">10+2 (or equivalent)</td>
                <td className="py-2 px-4 border">Commerce Stream</td>
                <td className="py-2 px-4 border">45%</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-4 border">B.A. English Literature</td>
                <td className="py-2 px-4 border">10+2 (or equivalent)</td>
                <td className="py-2 px-4 border">Any Stream</td>
                <td className="py-2 px-4 border">40%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Application Process</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>
            <strong>Online Application:</strong> Fill out the application form
            available on our portal.
          </li>
          <li>
            <strong>Document Submission:</strong> Upload scanned copies of
            required documents (mark sheets, ID proof, etc.).
          </li>
          <li>
            <strong>Entrance Exam (if applicable):</strong> Appear for the
            college&apos;s entrance examination.
          </li>
          <li>
            <strong>Merit List & Interview:</strong> Check the merit list and
            attend the interview if shortlisted.
          </li>
          <li>
            <strong>Fee Payment:</strong> Complete the admission by paying the
            required fees.
          </li>
        </ol>

        <p className="mt-6">
          For detailed information on postgraduate program admissions, specific
          program syllabi, and fee structures, please visit our{" "}
          <a href="/course" className="text-blue-600 underline">
            Courses page
          </a>{" "}
          or{" "}
          <a href="/contact" className="text-blue-600 underline">
            Contact us
          </a>{" "}
          directly.
        </p>
      </div>
    </>
  );
};

export default AdmissionPage;