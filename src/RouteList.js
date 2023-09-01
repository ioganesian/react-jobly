import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function RouteList({ currUser, login, signup }) {
  console.log(`USER in ROUTELIST: ${currUser}`);
  return (
    <div>
      <Routes>

        <Route path="/" element={<Homepage />} />

        {!currUser &&
          <>
            <Route
              path="/login"
              element={<LoginForm login={login} />} />
            <Route
              path="/signup"
              element={<SignupForm signup={signup} />} />
          </>
        }

        {currUser &&
          <>
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
          </>
        }

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default RouteList;

