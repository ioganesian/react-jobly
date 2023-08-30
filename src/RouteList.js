import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";

function RouteList() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Homepage />}
      />

      <Route
        path="/companies"
        element={<CompanyList />}
      />

      <Route
        path="/companies/:handle"
        element={<CompanyDetail />}
      />

      <Route
        path="/jobs"
        element={<JobList />}
      />

      <Route
        path="*"
        element={<Navigate to="/" />}
      />
    </Routes>
  );
}

export default RouteList;

